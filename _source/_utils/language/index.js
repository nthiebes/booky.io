import * as Cookies from 'es-cookie';

export const setLanguage = (language) => {
  const cookieConsent = Cookies.get('cookieConsent');

  if (cookieConsent === 'true') {
    Cookies.set('lang', language, { expires: 18250 });
  }
  document.documentElement.setAttribute('lang', language);
};
