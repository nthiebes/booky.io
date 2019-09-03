import { combineReducers } from 'redux';
import { intlReducer } from 'react-intl-redux';
import { connectRouter } from 'connected-react-router';

import user from './_state/user';
import dashboards from './_state/dashboards';
import categories from './_state/categories';
import toolbar from './_state/toolbar';
import sidebar from './_state/sidebar';
import modal from './_state/modal';

const reducers = (history) => combineReducers({
  router: connectRouter(history),
  intl: intlReducer,
  user,
  toolbar,
  sidebar,
  modal,
  dashboards,
  categories
});

export default reducers;
