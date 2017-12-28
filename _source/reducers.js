import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import booky from './_state/booky';
import dashboards from './_state/dashboards';
import categories from './_state/categories';
import header from './_state/header';
import toolbar from './_state/toolbar';
import sidebar from './_state/sidebar';
import modal from './_state/modal';

const reducers = combineReducers({
  routing: routerReducer,
  booky,
  dashboards,
  categories,
  header,
  toolbar,
  sidebar,
  modal
});

export default reducers;
