import * as Cookies from 'es-cookie';
import { addLocaleData as addLocaleDataToIntl } from 'react-intl';
import deLocaleData from 'react-intl/locale-data/de';

export const setLanguage = (language) => {
  const cookieConsent = Cookies.get('cookieConsent');

  if (cookieConsent === 'true') {
    Cookies.set('lang', language, { expires: 18250 });
  }
  document.documentElement.setAttribute('lang', language);
};

export const addLocaleData = (language) => {
  switch (language) {
    case 'de': {
      addLocaleDataToIntl(deLocaleData);
      break;
    }

    default:
  }
};
