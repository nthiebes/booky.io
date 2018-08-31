import React from 'react';
import { render } from 'react-dom';
import * as Cookies from 'es-cookie';
import { Router, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import { addLocaleData } from 'react-intl';
import { Provider } from 'react-intl-redux';
import deLocaleData from 'react-intl/locale-data/de';
import 'whatwg-fetch';

import router from './router';
import configureStore from './configureStore';
import initialState from './initialState';

const cookieLanguage = Cookies.get('lang');
const locale = cookieLanguage || navigator.language || navigator.userLanguage;
const language = (locale || 'en').slice(0, 2);

Cookies.set('lang', language, { expires: 365 });
document.documentElement.setAttribute('lang', language);

fetch(`/_assets/i18n/${language}.json`)
  .then((response) => response.json()).then((messages) => {
    const store = configureStore({
      ...initialState,
      intl: {
        locale: language,
        messages
      }
    });
    const history = syncHistoryWithStore(browserHistory, store);

    addLocaleData(deLocaleData);

    render(
      <Provider store={ store }>
        <Router history={ history } routes={ router } onUpdate={ () => window.scrollTo(0, 0) } />
      </Provider>,
      document.getElementById('root')
    );
  }).catch();
