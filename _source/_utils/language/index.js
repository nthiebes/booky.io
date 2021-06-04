import * as Cookies from 'es-cookie';

export const setLanguage = (language) => {
  const cookieConsent = Cookies.get('cookieConsent');
  const isExtension = Boolean(window.location.pathname.match(/extension/gi));

  if (cookieConsent === 'true') {
    Cookies.set('lang', language, {
      expires: 18250,
      secure: process.env.NODE_ENV !== 'development'
    });
  }
  if (isExtension) {
    localStorage.setItem('lang', language);
  }
  document.documentElement.setAttribute('lang', language);
};
