import React from 'react';
import { Route, IndexRoute } from 'react-router';

import Booky from './00_base/Booky.jsx';
import Home from './05_pages/home/Home.jsx';
import About from './05_pages/about/About.jsx';
import NotFound from './05_pages/not-found/NotFound.jsx';

export default (
    <Route path="/" component={ Booky }>
        <IndexRoute component={ Home } />
        <Route path="about" component={ About } />
        <Route path="*" component={ NotFound } />
    </Route>
);
