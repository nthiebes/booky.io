// The browser extension embeds booky in an iframe, while the bookmarklet opens
// it in a window of its own, without access to the browser's tabs
export const isExtensionPopup = () => window.parent !== window;

// The popup is a page of the extension. Its exact origin isn't known in
// advance (Firefox uses a random id per install), only its scheme.
const EXTENSION_ORIGIN =
  /^(chrome-extension|moz-extension|extension):\/\/[^/]+$/;

export const isExtensionOrigin = (origin) =>
  typeof origin === 'string' && EXTENSION_ORIGIN.test(origin);

// Learned from the first message of the popup, or right away where the browser
// exposes the embedding origin (Chrome)
let extensionOrigin = null;
let queue = [];

const getAncestorOrigin = () => {
  const origin = window.location.ancestorOrigins?.[0];

  return isExtensionOrigin(origin) ? origin : null;
};

const setExtensionOrigin = (origin) => {
  if (extensionOrigin) {
    return;
  }

  extensionOrigin = origin;
  queue.forEach((data) => window.parent.postMessage(data, extensionOrigin));
  queue = [];
};

/**
 * Sends a message to the extension popup. Messages can contain bookmarks, so
 * they only go to the popup's own origin and are queued until it is known.
 * Only the "ready" handshake goes to any origin, since it is what makes the
 * popup answer.
 */
export const postMessage = (data) => {
  if (!isExtensionPopup()) {
    return;
  }

  extensionOrigin = extensionOrigin || getAncestorOrigin();

  if (extensionOrigin) {
    window.parent.postMessage(data, extensionOrigin);
  } else if (data.ready) {
    // eslint-disable-next-line no-unused-vars
    const { ready, ...rest } = data;

    window.parent.postMessage({ ready: true }, '*');

    if (Object.keys(rest).length) {
      queue.push(rest);
    }
  } else {
    queue.push(data);
  }
};

// Only the extension popup sends page data. Without this check, messages from
// other sources (other extensions, websites, the bookmarklet window posting to
// itself) would be treated as page data.
export const isExtensionMessage = (event) => {
  const isValid =
    isExtensionPopup() &&
    event.source === window.parent &&
    isExtensionOrigin(event.origin) &&
    (!extensionOrigin || event.origin === extensionOrigin) &&
    event.data?.type === 'BOOKY';

  if (isValid) {
    setExtensionOrigin(event.origin);
  }

  return isValid;
};
