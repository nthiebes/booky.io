import * as Cookies from 'es-cookie';

export const loadScript = (src, done) => {
  const js = document.createElement('script');

  js.src = src;
  js.onload = function() {
    done && done();
  };
  js.onerror = function() {
    done && done(new Error('Failed to load script ' + src));
  };
  document.head.appendChild(js);
};

export const loadGoogleAnalytics = () => {
  const cookieConsent = Cookies.get('cookieConsent');
  const gaDisabled = Cookies.get('gaDisabled');

  if (cookieConsent === 'true' && gaDisabled !== 'true') {
    loadScript('https://www.googletagmanager.com/gtag/js?id=UA-45004279-5');

    window.dataLayer = window.dataLayer || [];
    // eslint-disable-next-line prefer-rest-params
    window.gtag = function gtag() { window.dataLayer.push(arguments); };
    window.gtag('js', new Date());
    window.gtag('config', 'UA-45004279-5', { 'anonymize_ip': true });
  }
};
