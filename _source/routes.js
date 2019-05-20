import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import { restricted } from './templates/restricted';
import Home from './pages/home';
import About from './pages/about';
import Help from './pages/help';
import Account from './pages/account';
import Login from './pages/login';
import Join from './pages/join';
import Next from './pages/next';
import Privacy from './pages/privacy';
import Legal from './pages/legal';
import Contact from './pages/contact';
import Extension from './pages/extension';
import NotFound from './pages/not-found';

export default class Routes extends Component {
  componentDidUpdate() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <Switch>
        <Route exact path="/" component={ Home } />
        <Route path="/about" component={ About }/>
        <Route path="/help" component={ Help } />
        <Route path="/account" component={ restricted(Account) } />
        <Route path="/login" component={ Login } />
        <Route path="/join" component={ Join } />
        <Route path="/next" component={ restricted(Next) } />
        <Route path="/privacy" component={ Privacy } />
        <Route path="/legal" component={ Legal } />
        <Route path="/contact" component={ Contact } />
        <Route path="/extension" component={ Extension } />
        <Route path="*" component={ NotFound } />
      </Switch>
    );
  }
}
