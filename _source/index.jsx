import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import router from './router.jsx';
import configureStore from './configureStore';

const initialState = {
    'dashboards': {
        'items': [{
            'id': 0,
            'name': 'Dashboard كيف ح вет, как 1'
        }, {
            'id': 2,
            'name': 'Dashboard looooooooooooooooong 2'
        }, {
            'id': 1,
            'name': 'Dashboard こんにち 3'
        }],
        'active': 0,
        'offset': 3
    },
    'categories': [{
        'id': 0,
        'name': 'Category 1 loooong naaaaame',
        'dashboard': 0,
        'position': 0,
        'color': 1,
        'expanded': true
    }, {
        'id': 1,
        'name': 'مرحبا كيف حالك؟ asas!',
        'dashboard': 0,
        'position': 2,
        'color': 2,
        'expanded': true
    }, {
        'id': 2,
        'name': 'Category こんにちはお元気で 3',
        'dashboard': 0,
        'position': 1,
        'color': 3,
        'expanded': false
    }, {
        'id': 3,
        'name': 'Category Привет, как дела 4',
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
        'name': 'Bookmark 1 veeeeeeery loooooong tiiiitle !!!!!!',
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
        'dashboardsOpen': false
    },
    'toolbar': {
        'searchOpen': false,
        'searchFocused': false,
        'editMode': false,
        'sticky': true,
        'currentlySticky': true
    },
    'sidebar': {
        'open': false,
        'notes': true,
        'autofill': true,
        'newtab': true,
        'stickyHeader': true,
        'stickyToolbar': true,
        'globalColor': 0,
        'headerColor': 0,
        'maxWidth': true,
        'dashboard': 1
    }
};

const store = configureStore(initialState);

const history = syncHistoryWithStore(browserHistory, store);

render(
    <Provider store={ store }>
        <Router history={ history } routes={ router } />
    </Provider>,
    document.getElementById('root')
);
