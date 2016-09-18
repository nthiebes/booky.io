import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import bookyApp from './rootReducer';
import Booky from './00_base/booky/Booky.jsx';

const initialState = {
    categories: [{
        id: 0,
        name: 'Category 1'
    }, {
        id: 1,
        name: 'Category 2'
    }, {
        id: 2,
        name: 'Category 3'
    }]
};

let store = createStore(bookyApp, initialState);

render(
    <Provider store={ store }>
        <Booky />
    </Provider>,
    document.getElementById('app')
);