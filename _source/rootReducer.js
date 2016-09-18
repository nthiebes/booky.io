import { combineReducers } from 'redux';
import categories from './03_organisms/categories/categoriesReducers';

const bookyApp = combineReducers({
    categories
});

export default bookyApp;