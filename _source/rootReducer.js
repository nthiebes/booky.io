import { combineReducers } from 'redux';
import categories from './03_organisms/categories/categoriesReducers';
import header from './03_organisms/header/headerReducers';
import toolbar from './03_organisms/toolbar/toolbarReducers';
import sidebar from './03_organisms/sidebar/sidebarReducers';

const bookyApp = combineReducers({
    categories,
    header,
    toolbar,
    sidebar
});

export default bookyApp;
