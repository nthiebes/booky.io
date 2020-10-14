import * as Cookies from 'es-cookie';

export const setLanguage = (language) => {
  const cookieConsent = Cookies.get('cookieConsent');

  if (cookieConsent === 'true') {
    Cookies.set('lang', language, { expires: 18250,
      secure: process.env.NODE_ENV !== 'development'
    });
  }
  document.documentElement.setAttribute('lang', language);
};
