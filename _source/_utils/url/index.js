export const parseBookmarkUrl = (url, { protocol } = {}) => {
  const cleanUrl = url.replace(/[^\w\].,!@#$%^&*()?[:;//=+~`'-]/gi, '');

  return cleanUrl.match(/^([a-z]+:+)\/\/|^\/\//i)
    ? cleanUrl
    : `${protocol ? protocol : ''}${protocol ? ':' : ''}//${cleanUrl}`;
};

// Schemes that run code in the page when a link is clicked. Browsers ignore
// case, leading control characters and spaces, and tabs or line breaks anywhere
// in the scheme, so these are removed before checking.
const SCRIPT_SCHEME = /^(javascript|vbscript|data):/;

export const isSafeUrl = (url) =>
  typeof url === 'string' &&
  // eslint-disable-next-line no-control-regex
  !SCRIPT_SCHEME.test(url.replace(/[\u0000- ]/g, '').toLowerCase());

// Bookmarks added without a protocol are saved as //example.com, which only
// works relative to a page. The extension needs a full http(s) URL to open it.
export const getTabUrl = (url) => {
  const absoluteUrl = url.startsWith('//') ? `https:${url}` : url;

  return /^https?:\/\//i.test(absoluteUrl) ? absoluteUrl : null;
};
