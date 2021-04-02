import React from 'react';
import { render } from 'react-dom';
import * as Sentry from '@sentry/browser';
import * as Cookies from 'es-cookie';
import { AppContainer } from 'react-hot-loader';

import Booky from './templates/booky';
import fetcher from './_utils/fetcher';
import { setLanguage } from './_utils/language';
import { loadPolyfills } from './_utils/polyfills';
import { loadScript, loadGoogleAnalytics } from './_utils/script';
import configureStore, { history } from './configureStore';
import initialState from './initialState';

// Language detection
const supportedLanguages = ['en', 'de'];
const cookieLanguage = Cookies.get('lang');
const localStorageLanguage = localStorage.getItem('lang');
const locale = (
  cookieLanguage ||
  localStorageLanguage ||
  navigator.language ||
  navigator.userLanguage
).slice(0, 2);
const language = supportedLanguages.indexOf(locale) === -1 ? 'en' : locale;

// Store language
setLanguage(language);

// Activate the :active pseudo class on mobile
document.addEventListener(
  'touchstart',
  () => {
    // Do nothing
  },
  { passive: true }
);

// Initialize Sentry error tracking
if (process.env.NODE_ENV !== 'development') {
  Sentry.init({
    dsn: 'https://3b30e08ee0164a03816c765e2a29a2c2@sentry.io/1792556',
    environment: process.env.NODE_ENV,
    release: `booky@${process.env.VERSION}`
  });
}

let error = false;
let messages;
let userData;
const loadingDone = () => {
  let store;

  // Not logged in
  if (error) {
    store = configureStore({
      ...initialState,
      user: {
        ...initialState.user,
        loggedIn: false
      },
      intl: {
        locale: language,
        messages
      }
    });
    // Logged in
  } else {
    document.title = 'booky';
    store = configureStore({
      ...initialState,
      user: {
        ...initialState.user,
        ...userData,
        loggedIn: true,
        settings: {
          ...initialState.user.settings,
          ...userData.settings
        }
      },
      intl: {
        locale: language,
        messages
      }
    });
  }

  loadGoogleAnalytics();

  render(
    <AppContainer>
      <Booky store={store} history={history} />
    </AppContainer>,
    document.getElementById('root')
  );
};
const loadUserAndTranslations = () => {
  const getUser = () =>
    new Promise((resolve) => {
      fetcher({
        url: '/user',
        onSuccess: (data) => {
          userData = data;

          resolve();
        },
        onError: () => {
          error = true;

          resolve();
        }
      });
    });
  const getTranslations = () =>
    new Promise((resolve) => {
      const headers = new Headers({ 'Content-Type': 'application/json' });

      fetch(`/_assets/i18n/${language}.json?=${process.env.VERSION}`, {
        headers
      })
        .then((response) => response.json())
        .then((data) => {
          messages = data;

          resolve();
        })
        .catch();
    });

  return Promise.all([getUser(), getTranslations()]);
};
const init = () => {
  loadPolyfills().then(
    loadUserAndTranslations().then(() => {
      loadingDone();
    })
  );
};

if (window.Promise) {
  init();
} else {
  loadScript(`/_assets/promise-polyfill.js?=${process.env.VERSION}`, init);
  loadScript(`/_assets/svguse-polyfill.js?=${process.env.VERSION}`);
}
