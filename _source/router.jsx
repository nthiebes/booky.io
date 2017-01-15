import React from 'react';
import { Route, IndexRoute } from 'react-router';

import Booky from './00_base/booky/Booky.jsx';
import Home from './04_pages/home/Home';
import About from './04_pages/about/About';
import NotFound from './04_pages/not-found/NotFound';

export default (
    <Route path="/" component={ Booky }>
        <IndexRoute component={ Home } />
        <Route path="about" component={ About } />
        <Route path="*" component={ NotFound } />
    </Route>
);
