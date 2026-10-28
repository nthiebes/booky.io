// This file configures a web server for testing the production build
// on your local machine.

import fs from 'fs';
import path from 'path';
import browserSync from 'browser-sync';
import historyApiFallback from 'connect-history-api-fallback';
import { chalkProcessing } from './chalkConfig';

const PRERENDERED_DIR = path.resolve(__dirname, '../_public/prerendered');

// Serves _public/prerendered/<name>.html for /<name> (home.html for /), like the backend's IndexPage
const servePrerendered = (request, response, next) => {
  const pathname = request.url.split('?')[0];
  const name = pathname === '/' ? 'home' : pathname.slice(1);
  const file = path.join(PRERENDERED_DIR, `${name}.html`);

  if (/^[a-z-]+$/.test(name) && fs.existsSync(file)) {
    response.setHeader('Content-Type', 'text/html; charset=utf-8');
    response.end(fs.readFileSync(file));
    return;
  }

  next();
};

console.log(chalkProcessing('Opening production build...'));

// Run Browsersync
browserSync({
  port: 4000,
  open: false,
  ui: {
    port: 4001
  },
  server: {
    baseDir: '_public'
  },

  files: ['_source/*.html'],

  middleware: [servePrerendered, historyApiFallback()]
});
