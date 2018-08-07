import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import booky from './_state/booky';
import dashboards from './_state/dashboards';
import categories from './_state/categories';
import toolbar from './_state/toolbar';
import sidebar from './_state/sidebar';
import modal from './_state/modal';

const reducers = combineReducers({
  routing: routerReducer,
  booky,
  toolbar,
  sidebar,
  modal,
  dashboards,
  categories
});

export default reducers;
