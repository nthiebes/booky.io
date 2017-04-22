import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import router from './router.jsx';
import configureStore from './configureStore';
import initialState from './initialState';

const store = configureStore(initialState);

const history = syncHistoryWithStore(browserHistory, store);

render(
  <Provider store={ store }>
    <Router history={ history } routes={ router } />
  </Provider>,
  document.getElementById('root')
);
