import { createStore } from 'redux';

import bookyApp from './rootReducer';
import toolbar from './03_organisms/toolbar/toolbarReducers';
import categories from './03_organisms/categories/categoriesReducers';
import header from './03_organisms/header/headerReducers';

describe('rootReducer', function() {

    let store,
        undefinedState;

    beforeEach(function() {
        store = createStore(bookyApp);
    });

    it('initial state matches child reducers', function() {
        expect(store.getState().toolbar).toEqual(toolbar(undefinedState, {}));
        expect(store.getState().categories).toEqual(categories(undefinedState, {}));
        expect(store.getState().header).toEqual(header(undefinedState, {}));
    });

    it('child reducers handle actions', function() {
        const toolbarAction = { 'type': 'TOGGLE_SEARCH' };
        const categoriesAction = { 'type': 'ADD_CATEGORY' };
        const headerAction = { 'type': 'TOGGLE_MAIN_MENU' };

        store.dispatch(toolbarAction);
        expect(store.getState().toolbar).toEqual(toolbar(undefinedState, toolbarAction));

        store.dispatch(categoriesAction);
        expect(store.getState().categories).toEqual(categories(undefinedState, categoriesAction));
        
        store.dispatch(headerAction);
        expect(store.getState().header).toEqual(header(undefinedState, headerAction));
    });
});
