import React from 'react';
import { render } from 'react-dom';
import * as Cookies from 'es-cookie';
import { Router, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import { addLocaleData } from 'react-intl';
import { Provider } from 'react-intl-redux';
import deLocaleData from 'react-intl/locale-data/de';

import fetcher from './_utils/fetcher';
import router from './router';
import configureStore from './configureStore';
import initialState from './initialState';

const supportedLanguages = ['en', 'de'];
const cookieLanguage = Cookies.get('lang');
let locale = cookieLanguage || navigator.language || navigator.userLanguage;

locale = locale.slice(0, 2);

const language = supportedLanguages.indexOf(locale) === -1 ? 'en' : locale;

Cookies.set('lang', language, { expires: 365 });
document.documentElement.setAttribute('lang', language);

function loadingDone(store) {
  const history = syncHistoryWithStore(browserHistory, store);

  addLocaleData(deLocaleData);

  render(
    <Provider store={ store }>
      <Router history={ history } routes={ router } onUpdate={ () => window.scrollTo(0, 0) } />
    </Provider>,
    document.getElementById('root')
  );
}

fetch(`/_assets/i18n/${language}.json`)
  .then((response) => response.json())
  .then((messages) => {
    fetcher({
      url: '/user',
      onSuccess: (data) => {
        // console.log('user', data);

        const store = configureStore({
          ...initialState,
          user: {
            loggedIn: typeof data.user === 'object',
            ...data
          },
          intl: {
            locale: language,
            messages
          }
        });
        
        loadingDone(store);
      },
      onError: (error) => {
        // console.log('error:', error);

        const store = configureStore({
          ...initialState,
          user: {
            loggedIn: false,
            error
          },
          intl: {
            locale: language,
            messages
          }
        });

        loadingDone(store);
      }
    });
  })
  .catch();
