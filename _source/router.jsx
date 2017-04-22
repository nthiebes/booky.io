import React from 'react';
import { Route, IndexRoute } from 'react-router';

import Booky from './_base';
import Home from './pages/home';
import About from './pages/about';
import Help from './pages/help';
import Account from './pages/account';
import Logout from './pages/logout';
import Login from './pages/login';
import Join from './pages/join';
import Next from './pages/next';
import NotFound from './pages/not-found';

export default (
  <Route path="/" component={ Booky }>
    <IndexRoute component={ Home } />
    <Route path="about" component={ About } />
    <Route path="help" component={ Help } />
    <Route path="profile" component={ Account } />
    <Route path="logout" component={ Logout } />
    <Route path="login" component={ Login } />
    <Route path="join" component={ Join } />
    <Route path="next" component={ Next } />
    <Route path="*" component={ NotFound } />
  </Route>
);
