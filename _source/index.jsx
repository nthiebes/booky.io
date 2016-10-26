import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import bookyApp from './rootReducer';
import Booky from './00_base/booky/Booky.jsx';

const initialState = {
    'dashboards': [{
        'id': 0,
        'name': 'Dashboard 1',
        'position': 1
    }, {
        'id': 2,
        'name': 'Dashboard 2',
        'position': 0
    }, {
        'id': 3,
        'name': 'Dashboard 3',
        'position': 2
    }],
    'categories': [{
        'id': 0,
        'name': 'Category 1 loooong naaaaame',
        'dashboard': 0,
        'position': 0,
        'color': 1,
        'expanded': true
    }, {
        'id': 1,
        'name': 'Category 2',
        'dashboard': 0,
        'position': 2,
        'color': 2,
        'expanded': true
    }, {
        'id': 2,
        'name': 'Category 3',
        'dashboard': 0,
        'position': 1,
        'color': 3,
        'expanded': false
    }, {
        'id': 3,
        'name': 'Category 4',
        'dashboard': 0,
        'position': 3,
        'color': 4,
        'expanded': true
    }, {
        'id': 4,
        'name': 'Category 5',
        'dashboard': 2,
        'position': 0,
        'color': 0,
        'expanded': false
    }],
    'bookmarks': [{
        'id': 0,
        'category': 0,
        'name': 'booky.io',
        'url': 'https://booky.io',
        'favicon': 'base64',
        'position': 0
    }, {
        'id': 1,
        'category': 0,
        'name': 'Bookmark 1 veeeeeeery veeeeeeery loooooong tiiiitle !!!!!!',
        'url': 'https://booky.io',
        'favicon': 'base64',
        'position': 0
    }, {
        'id': 2,
        'category': 0,
        'name': 'booky.io',
        'url': 'https://booky.io',
        'favicon': 'base64',
        'position': 0
    }, {
        'id': 3,
        'category': 1,
        'name': 'booky.io',
        'url': 'https://booky.io',
        'favicon': 'base64',
        'position': 0
    }, {
        'id': 4,
        'category': 1,
        'name': 'booky.io',
        'url': 'https://booky.io',
        'favicon': 'base64',
        'position': 0
    }, {
        'id': 5,
        'category': 3,
        'name': 'booky.io',
        'url': 'https://booky.io',
        'favicon': 'base64',
        'position': 0
    }, {
        'id': 6,
        'category': 3,
        'name': 'booky.io',
        'url': 'https://booky.io',
        'favicon': 'base64',
        'position': 0
    }, {
        'id': 7,
        'category': 3,
        'name': 'booky.io',
        'url': 'https://booky.io',
        'favicon': 'base64',
        'position': 0
    }, {
        'id': 8,
        'category': 3,
        'name': 'booky.io',
        'url': 'https://booky.io',
        'favicon': 'base64',
        'position': 0
    }, {
        'id': 9,
        'category': 3,
        'name': 'booky.io',
        'url': 'https://booky.io',
        'favicon': 'base64',
        'position': 0
    }, {
        'id': 10,
        'category': 1,
        'name': 'booky.io',
        'url': 'https://booky.io',
        'favicon': 'base64',
        'position': 0
    }, {
        'id': 11,
        'category': 1,
        'name': 'booky.io',
        'url': 'https://booky.io',
        'favicon': 'base64',
        'position': 0
    }, {
        'id': 12,
        'category': 0,
        'name': 'booky.io',
        'url': 'https://booky.io',
        'favicon': 'base64',
        'position': 0
    }, {
        'id': 13,
        'category': 0,
        'name': 'booky.io',
        'url': 'https://booky.io',
        'favicon': 'base64',
        'position': 0
    }],
    'header': {
        'menuMainOpen': false,
        'sticky': true,
        'color': 0
    },
    'toolbar': {
        'searchOpen': false,
        'editMode': false,
        'sticky': true
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
