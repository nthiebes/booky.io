export const parseBookmarkUrl = (url, { protocol } = {}) => (
  url.match(/^([a-z]+:+)\/\/|^\/\//i) ? url : `${protocol ? protocol : ''}${protocol ? ':' : ''}//${url}`
);
