import React from 'react';
import { Route, IndexRoute } from 'react-router';

import BookyApp from './_base';
import Home from './pages/home';
import About from './pages/about';
import NotFound from './pages/not-found';

export default (
  <Route path="/" component={ BookyApp }>
    <IndexRoute component={ Home } />
    <Route path="about" component={ About } />
    <Route path="*" component={ NotFound } />
  </Route>
);
