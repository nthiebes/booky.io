// The browser extension embeds booky in an iframe, while the bookmarklet opens
// it in a window of its own, without access to the browser's tabs
export const isExtensionPopup = () => window.parent !== window;

export const postMessage = (data) => {
  const extension = window.parent;

  extension.postMessage(data, '*');
};

// Only the extension popup sends page data. Without this check, messages from
// other sources (browser extensions, the bookmarklet window posting to itself)
// would overwrite it on every render.
export const isExtensionMessage = (event) =>
  isExtensionPopup() &&
  event.source === window.parent &&
  event.data?.type === 'BOOKY';
