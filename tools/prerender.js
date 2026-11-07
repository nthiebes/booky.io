// Renders the public pages of the production build in headless Chrome and saves the resulting HTML,
// so that crawlers and AI agents which don't execute JavaScript see the actual page content.
// Output: _public/prerendered/<page>.html, served by the backend's IndexPage for the matching path.
//
// The prerendered markup is hidden for visitors with JavaScript (React replaces it on render anyway),
// so logged-in users don't see a flash of the logged-out page.

import fs from 'fs';
import http from 'http';
import path from 'path';
import puppeteer from 'puppeteer';
import { chalkError, chalkSuccess, chalkProcessing } from './chalkConfig';

const PUBLIC_DIR = path.resolve(__dirname, '../_public');
const OUTPUT_DIR = path.join(PUBLIC_DIR, 'prerendered');
const ORIGIN = 'https://booky.io';
const PORT = 4010;
const ALLOWED_EXTERNAL_HOSTS = ['api.github.com'];

// Keep in sync with _source/sitemap.xml and IndexPage in the backend.
const PAGES = {
  home: '/',
  features: '/features',
  supporter: '/supporter',
  about: '/about',
  help: '/help',
  new: '/new',
  bookmarklet: '/bookmarklet',
  join: '/join',
  login: '/login',
  forgot: '/forgot',
  resend: '/resend',
  contact: '/contact',
  privacy: '/privacy',
  legal: '/legal',
  terms: '/terms'
};

const CONTENT_TYPES = {
  '.html': 'text/html',
  '.js': 'application/javascript',
  '.css': 'text/css',
  '.json': 'application/json',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.ico': 'image/x-icon',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2'
};

const indexHtml = fs.readFileSync(path.join(PUBLIC_DIR, 'index.html'), 'utf8');

// Serves the build like production: static files, the SPA shell for everything else,
// and a logged-out API.
const server = http.createServer((request, response) => {
  const pathname = decodeURIComponent(new URL(request.url, ORIGIN).pathname);

  if (pathname.startsWith('/api/')) {
    response.writeHead(401, { 'Content-Type': 'application/json' });
    response.end('{"error":"error.unauthorized","code":0}');
    return;
  }

  const filePath = path.join(PUBLIC_DIR, pathname);

  if (
    filePath.startsWith(PUBLIC_DIR) &&
    fs.existsSync(filePath) &&
    fs.statSync(filePath).isFile()
  ) {
    response.writeHead(200, {
      'Content-Type':
        CONTENT_TYPES[path.extname(filePath)] || 'application/octet-stream'
    });
    fs.createReadStream(filePath).pipe(response);
    return;
  }

  response.writeHead(200, { 'Content-Type': 'text/html' });
  response.end(indexHtml);
});

const escapeHtml = (text) =>
  text
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');

const renderPage = async (browser, route) => {
  const page = await browser.newPage();

  await page.setRequestInterception(true);
  page.on('request', (request) => {
    const { hostname } = new URL(request.url());

    if (
      hostname === 'localhost' ||
      ALLOWED_EXTERNAL_HOSTS.includes(hostname) ||
      request.url().startsWith('data:')
    ) {
      request.continue();
    } else {
      request.abort();
    }
  });
  await page.setCookie({ name: 'lang', value: 'en', domain: 'localhost' });
  await page.goto(`http://localhost:${PORT}${route}`, {
    waitUntil: 'networkidle0'
  });
  await page.waitForFunction(
    () =>
      document.querySelector('#root > *') &&
      !document.querySelector('#root .loading-page__spinner')
  );

  const { content, headline, stylesheets } = await page.evaluate(() => {
    const h1 = document.querySelector('#root h1');

    // The cookie banner is only noise for crawlers, real visitors get it from React
    document
      .querySelectorAll('#root .cookie-banner')
      .forEach((element) => element.remove());

    return {
      content: document.getElementById('root').innerHTML,
      headline: h1 ? h1.innerText.replace(/\s+/g, ' ').trim() : '',
      // CSS chunks of lazy loaded pages, so the page is styled without JavaScript too
      // Array.from instead of spreading: babel-node would transpile the spread into a helper,
      // which doesn't exist in the browser this function is serialized into
      stylesheets: Array.from(
        document.querySelectorAll('head link[rel="stylesheet"]'),
        (link) => link.getAttribute('href')
      )
    };
  });

  await page.close();

  return { content, headline, stylesheets };
};

const buildHtml = (route, { content, headline, stylesheets }) => {
  let html = indexHtml.replace(
    '<div id="root"></div>',
    `<div id="root"><div class="prerendered">${content}</div></div>`
  );
  const head = [
    `<link rel="canonical" href="${ORIGIN}${route}"/>`,
    ...stylesheets
      .filter((href) => !indexHtml.includes(`href="${href}"`))
      .map((href) => `<link href="${href}" rel="stylesheet"/>`),
    '<style>.prerendered{display:none}</style>',
    // The spinner rule in index.ejs loses against the main stylesheet, which loads after it
    '<noscript><style>.prerendered{display:block}.loading__spinner{display:none}</style></noscript>'
  ];

  if (route !== '/' && headline) {
    html = html.replace(
      /<title>[^<]*<\/title>/,
      `<title>${escapeHtml(headline)} | booky.io</title>`
    );
  }

  return html.replace('</head>', `${head.join('')}</head>`);
};

const prerender = async () => {
  if (!indexHtml.includes('<div id="root"></div>')) {
    throw new Error('_public/index.html has no empty <div id="root"></div>');
  }

  await new Promise((resolve) => server.listen(PORT, resolve));

  const browser = await puppeteer.launch();

  try {
    fs.rmSync(OUTPUT_DIR, { recursive: true, force: true });
    fs.mkdirSync(OUTPUT_DIR);

    for (const [name, route] of Object.entries(PAGES)) {
      const result = await renderPage(browser, route);

      fs.writeFileSync(
        path.join(OUTPUT_DIR, `${name}.html`),
        buildHtml(route, result)
      );
      console.log(chalkProcessing(`Prerendered ${route}`));
    }
  } finally {
    await browser.close();
    server.close();
  }
};

prerender()
  .then(() => {
    console.log(chalkSuccess('Prerendered pages are in /_public/prerendered.'));
  })
  .catch((error) => {
    console.log(chalkError(error));
    process.exit(1);
  });
