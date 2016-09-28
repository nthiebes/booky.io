import { combineReducers } from 'redux';
import categories from './03_organisms/categories/categoriesReducers';
import header from './03_organisms/header/headerReducers';
import toolbar from './03_organisms/toolbar/toolbarReducers';

const bookyApp = combineReducers({
    categories,
    header,
    toolbar
});

export default bookyApp;