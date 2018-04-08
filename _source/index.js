import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import { addLocaleData, IntlProvider } from 'react-intl';
import deLocaleData from 'react-intl/locale-data/de';
import 'whatwg-fetch';

import router from './router';
import configureStore from './configureStore';
import initialState from './initialState';

const store = configureStore(initialState);
const history = syncHistoryWithStore(browserHistory, store);
let locale = navigator.language || navigator.userLanguage;

locale = (locale || 'en').slice(0, 2);
// locale = 'en';

fetch(`/_assets/i18n/${locale}.json`)
  .then((response) => response.json()).then((messages) => {
    addLocaleData(deLocaleData);

    render(
      <Provider store={ store }>
        <IntlProvider locale={ locale } messages={ messages }>
          <Router history={ history } routes={ router } onUpdate={ () => window.scrollTo(0, 0) } />
        </IntlProvider>
      </Provider>,
      document.getElementById('root')
    );
  }).catch();
