/* eslint-disable no-nested-ternary */
const isOpera =
  // eslint-disable-next-line no-undef
  (Boolean(window.opr) && Boolean(opr.addons)) ||
  Boolean(window.opera) ||
  navigator.userAgent.indexOf(' OPR/') >= 0;
const isFirefox = typeof InstallTrigger !== 'undefined';
const isChrome = Boolean(window.chrome);
const isEdge = isChrome && navigator.userAgent.indexOf('Edg') !== -1;
const isDevEnvironment = process.env.NODE_ENV === 'development';
const browser = isOpera ? 'opera'
  : isEdge ? 'edge'
    : isChrome ? 'chrome'
      : isFirefox ? 'firefox'
        : null;
const extensionIds = {
  chromeDev: 'chrome-extension://cdgbikmincdhncjonjcldflnkdbmbgco',
  chromeProd: 'chrome-extension://pmcpkkipiedakcaolhnbijibndfemckf',
  firefoxDev: 'moz-extension://6b1713db-fd5a-1344-bc24-18c2584c6ca4',
  firefoxProd: 'moz-extension://6b1713db-fd5a-1344-bc24-18c2584c6ca4',
  operaDev: 'chrome-extension://cdgbikmincdhncjonjcldflnkdbmbgco',
  operaProd: 'chrome-extension://iafdlnlobhkhinaaipdlmopphkeejjhc',
  edgeDev: 'chrome-extension://dohbhflggplgdmgbegknigcnffmggloh',
  edgeProd: 'chrome-extension://gnhlkmoepijbfnmblekhhdgkgdahdjek'
};

export const config = {
  extensionId: isDevEnvironment ? extensionIds[`${browser}Dev`] : extensionIds[`${browser}Prod`]
};
