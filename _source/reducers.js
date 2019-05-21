import { combineReducers } from 'redux';
import { intlReducer } from 'react-intl-redux';

import user from './_state/user';
import dashboards from './_state/dashboards';
import categories from './_state/categories';
import toolbar from './_state/toolbar';
import sidebar from './_state/sidebar';
import modal from './_state/modal';
import extension from './_state/extension/reducer';

const reducers = combineReducers({
  intl: intlReducer,
  user,
  toolbar,
  sidebar,
  modal,
  dashboards,
  categories,
  extension
});

export default reducers;
