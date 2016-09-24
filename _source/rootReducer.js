import { combineReducers } from 'redux';
import categories from './03_organisms/categories/categoriesReducers';
import header from './03_organisms/header/headerReducers';

const bookyApp = combineReducers({
    categories,
    header
});

export default bookyApp;