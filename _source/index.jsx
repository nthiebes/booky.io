import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import bookyApp from './rootReducer';
import Booky from './00_base/booky/Booky.jsx';

let store = createStore(bookyApp);

render(
    <Provider store={ store }>
        <Booky />
    </Provider>,
    document.getElementById('app')
);