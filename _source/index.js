import React from 'react';
import { render } from 'react-dom';
import * as Cookies from 'es-cookie';
import { addLocaleData } from 'react-intl';
import { Provider } from 'react-intl-redux';
import deLocaleData from 'react-intl/locale-data/de';

import Booky from './templates/booky';
import fetcher from './_utils/fetcher';
import configureStore from './configureStore';
import initialState from './initialState';

const supportedLanguages = ['en', 'de'];
const cookieLanguage = Cookies.get('lang');
let locale = cookieLanguage || navigator.language || navigator.userLanguage;

locale = locale.slice(0, 2);

const language = supportedLanguages.indexOf(locale) === -1 ? 'en' : locale;

Cookies.set('lang', language, { expires: 365 });
document.documentElement.setAttribute('lang', language);

const loadingDone = (store) => {
  addLocaleData(deLocaleData);

  render(
    <Provider store={ store }>
      <Booky />
    </Provider>,
    document.getElementById('root')
  );
};

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
            ...initialState.user,
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
            ...initialState.user,
            loggedIn: true, // false
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
