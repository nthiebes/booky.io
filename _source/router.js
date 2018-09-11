import React from 'react';
import { Route, IndexRoute } from 'react-router';

import Booky from './templates/booky';
import Home from './pages/home';
import About from './pages/about';
import Help from './pages/help';
import Account from './pages/account';
import Login from './pages/login';
import Join from './pages/join';
import Next from './pages/next';
import Structure from './pages/structure';
import Privacy from './pages/privacy';
import Legal from './pages/legal';
import NotFound from './pages/not-found';

export default (
  <Route path="/" component={ Booky }>
    <IndexRoute component={ Home } />
    <Route path="about" component={ About } />
    <Route path="help" component={ Help } />
    <Route path="account" component={ Account } />
    <Route path="login" component={ Login } />
    <Route path="join" component={ Join } />
    <Route path="next" component={ Next } />
    <Route path="structure" component={ Structure } />
    <Route path="privacy" component={ Privacy } />
    <Route path="legal" component={ Legal } />
    <Route path="*" component={ NotFound } />
  </Route>
);
