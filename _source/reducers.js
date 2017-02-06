import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import booky from './00_base/booky/bookyReducers';
import dashboards from './03_organisms/dashboards/dashboardsReducers';
import categories from './03_organisms/categories/categoriesReducers';
import { reducers as header } from './03_organisms/header';
import toolbar from './03_organisms/toolbar/toolbarReducers';
import sidebar from './03_organisms/sidebar/sidebarReducers';

const reducers = combineReducers({
    'routing': routerReducer,
    booky,
    dashboards,
    categories,
    header,
    toolbar,
    sidebar
});

export default reducers;
