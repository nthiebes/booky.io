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
  NEWS_VERSION: 16,
  POLL_VERSION: 2,
  updateInProgress: false,
  browser
};

// New subscriptions and amount changes need at least this amount (also enforced
// by the backend). Supporters who subscribed with less may keep their amount.
export const MIN_SUPPORT_AMOUNT = 2;

// iCloud links to the iOS Shortcut, per language (fallback: en).
export const SHORTCUT_URLS = {
  de: 'https://www.icloud.com/shortcuts/0aed9a68f2ff4d28a052e303159cabc8',
  en: 'https://www.icloud.com/shortcuts/4d6113bd7dd244f6a47a8da8cf1fc1e9'
};

export const clientID =
  process.env.NODE_ENV === 'development'
    ? 'AfEjqLduFx2sXN6-g97vpIceMbvrTKb7YWOaEwUIbyJ5wO03KMtAPBIxlmbdTnC57h7TFljx7SZUd-y2'
    : 'AecoXO_XdaRXDYO3bs6uU5cdYphj-sFaDwavfA7HWYaK43V-3r9kR1cl0i_Q7X7V18JKtzLxnpnR_Hpi';

export const planID =
  process.env.NODE_ENV === 'development'
    ? 'P-8BA43361MS5240329MCBIDYA'
    : 'P-8P958691XL898214UMCAYO2Y';
