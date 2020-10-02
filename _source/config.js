/* eslint-disable no-nested-ternary */
const isOpera =
  // eslint-disable-next-line no-undef
  (Boolean(window.opr) && Boolean(opr.addons)) ||
  Boolean(window.opera) ||
  navigator.userAgent.indexOf(' OPR/') >= 0;
const isFirefox = typeof InstallTrigger !== 'undefined';
const isChrome = Boolean(window.chrome) && (Boolean(window.chrome.webstore) || Boolean(window.chrome.runtime));
const isEdge = isChrome && navigator.userAgent.indexOf('Edg') !== -1;
const isDevEnvironment = process.env.NODE_ENV === 'development';
const browser = isChrome ? 'chrome'
  : isOpera ? 'opera'
    : isFirefox ? 'firefox'
      : isEdge ? 'edge'
        : 'chrome';
const extensionIds = {
  chromeDev: 'chrome-extension://cdgbikmincdhncjonjcldflnkdbmbgco',
  chromeProd: 'chrome-extension://pmcpkkipiedakcaolhnbijibndfemckf',
  firefoxDev: 'moz-extension://ffe1d848-0e95-e247-8323-c93f1cc19443',
  firefoxProd: 'moz-extension://17dcc72b-ab50-e94b-a287-5539977d1488',
  operaDev: 'op-extension://cdgbikmincdhncjonjcldflnkdbmbgco',
  operaProd: 'op-extension://cdgbikmincdhncjonjcldflnkdbmbgco'
};

export const config = {
  extensionId: isDevEnvironment ? extensionIds[`${browser}Dev`] : extensionIds[`${browser}Prod`]
};
