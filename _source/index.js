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

// Language detection
const supportedLanguages = ['en', 'de'];
const cookieLanguage = Cookies.get('lang');
const locale = (cookieLanguage || navigator.language || navigator.userLanguage).slice(0, 2);
const language = supportedLanguages.indexOf(locale) === -1 ? 'en' : locale;

// Store language
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
        const store = configureStore({
          ...initialState,
          user: {
            ...initialState.user,
            loggedIn: true,
            settings: {
              ...initialState.user.settings,
              ...data.settings
            }
          },
          intl: {
            locale: language,
            messages
          }
        });
        
        loadingDone(store);
      },
      onError: () => {
        const store = configureStore({
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

        loadingDone(store);
      }
    });
  })
  .catch();
