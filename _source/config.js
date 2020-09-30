const extensionIds = {
  chromeDev: 'chrome-extension://cdgbikmincdhncjonjcldflnkdbmbgco',
  chromeProd: 'chrome-extension://pmcpkkipiedakcaolhnbijibndfemckf',
  firefox: 'moz-extension://ffe1d848-0e95-e247-8323-c93f1cc19443',
  opera: 'op-extension://cdgbikmincdhncjonjcldflnkdbmbgco'
};
// const browser = '';

export const config = {
  extensionId: process.env.NODE_ENV === 'development' ? extensionIds.chromeDev : extensionIds.chromeProd
  // extensionId: extensionIds.firefox
  // extensionId: extensionIds.opera
};
