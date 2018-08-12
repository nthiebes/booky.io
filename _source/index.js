import React from 'react';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import { addLocaleData } from 'react-intl';
import { Provider } from 'react-intl-redux';
import deLocaleData from 'react-intl/locale-data/de';
import 'whatwg-fetch';

import router from './router';
import configureStore from './configureStore';
import initialState from './initialState';

let locale = navigator.language || navigator.userLanguage;

locale = (locale || 'en').slice(0, 2);
// locale = 'en';

fetch(`/_assets/i18n/${locale}.json`)
  .then((response) => response.json()).then((messages) => {
    const store = configureStore({
      ...initialState,
      intl: {
        locale,
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
