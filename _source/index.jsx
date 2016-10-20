import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import bookyApp from './rootReducer';
import Booky from './00_base/booky/Booky.jsx';

const initialState = {
    'categories': [{
        'id': 0,
        'name': 'Category 1 loooong naaaaame'
    }, {
        'id': 1,
        'name': 'Category 2'
    }, {
        'id': 2,
        'name': 'Category 3'
    }, {
        'id': 3,
        'name': 'Category 4'
    }, {
        'id': 4,
        'name': 'Category 5'
    }],
    'header': {
        'menuMainOpen': false,
        'editMode': false,
        'sticky': false,
        'color': 0
    },
    'toolbar': {
        'searchOpen': false,
        'sticky': false
    },
    'userSettings': {
        'sticky': {
            'header': false,
            'toolbar': true
        }
    }
};

const store = createStore(bookyApp, initialState);

render(
    <Provider store={ store }>
        <Booky />
    </Provider>,
    document.getElementById('app')
);
