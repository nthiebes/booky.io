/* eslint-disable no-nested-ternary */
const isOpera =
  // eslint-disable-next-line no-undef
  (Boolean(window.opr) && Boolean(opr.addons)) ||
  Boolean(window.opera) ||
  navigator.userAgent.indexOf(' OPR/') >= 0;
const isFirefox = typeof InstallTrigger !== 'undefined';
const isChrome = Boolean(window.chrome);
const isEdge = isChrome && navigator.userAgent.indexOf('Edg') !== -1;
const browser = isOpera
  ? 'opera'
  : isEdge
  ? 'edge'
  : isChrome
  ? 'chrome'
  : isFirefox
  ? 'firefox'
  : null;

export const config = {
  NEWS_VERSION: 13,
  POLL_VERSION: 2,
  browser
};
