import React from 'react';
import { render } from 'react-dom';
import * as Sentry from '@sentry/browser';
import * as Cookies from 'es-cookie';
import { addLocaleData } from 'react-intl';
import { AppContainer } from 'react-hot-loader';
import deLocaleData from 'react-intl/locale-data/de';

import Booky from './templates/booky';
import fetcher from './_utils/fetcher';
import { loadPolyfills } from './_utils/polyfills';
import configureStore, { history } from './configureStore';
import initialState from './initialState';

// Language detection
const supportedLanguages = ['en', 'de'];
const cookieLanguage = Cookies.get('lang');
const locale = (cookieLanguage || navigator.language || navigator.userLanguage).slice(0, 2);
const language = supportedLanguages.indexOf(locale) === -1 ? 'en' : locale;

// Store language
Cookies.set('lang', language, { expires: 365 });
document.documentElement.setAttribute('lang', language);

// Activate the :active pseudo class on mobile
document.addEventListener('touchstart', () => { /* Do nothing */ }, {passive: true});

// Initialize Sentry error tracking
if (process.env.NODE_ENV !== 'development') {
  Sentry.init({
    dsn: 'https://3b30e08ee0164a03816c765e2a29a2c2@sentry.io/1792556',
    environment: process.env.NODE_ENV
  });
}

let counter = 0;
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
    document.title = 'booky.io';
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

  if (language === 'de') {
    addLocaleData(deLocaleData);
  }

  render(
    <AppContainer>
      <Booky store={ store } history={ history } />
    </AppContainer>,
    document.getElementById('root')
  );
};
const init = () => {
  loadPolyfills().then(() => {
    // Fetch translations
    fetch(`/_assets/i18n/${language}.json`)
      .then((response) => response.json())
      .then((data) => {
        messages = data;
        counter++;
      
        if (counter === 2) {
          loadingDone();
        }
      })
      .catch();
    
    // Fetch user data
    fetcher({
      url: '/user',
      onSuccess: (data) => {
        userData = data;
        counter++;
      
        if (counter === 2) {
          loadingDone();
        }
      },
      onError: () => {
        error = true;
        counter++;
      
        if (counter === 2) {
          loadingDone();
        }
      }
    });
    
  });    
};
const loadScript = (src, done) => {
  const js = document.createElement('script');

  js.src = src;
  js.onload = function() {
    done();
  };
  js.onerror = function() {
    done(new Error('Failed to load script ' + src));
  };
  document.head.appendChild(js);
};

if (window.Promise) {
  init();
} else {
  loadScript('/_assets/promise-polyfill.js', init);
}
