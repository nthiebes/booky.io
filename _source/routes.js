import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Route, Switch, withRouter } from 'react-router-dom';
import { hot } from 'react-hot-loader';

import { restricted } from './templates/restricted';
// import Home from './pages/home';
import About from './pages/about';
import Help from './pages/help';
import Account from './pages/account';
import Login from './pages/login';
import Join from './pages/join';
import Feedback from './pages/feedback';
import Privacy from './pages/privacy';
import Legal from './pages/legal';
import Contact from './pages/contact';
import Forgot from './pages/forgot';
import NotFound from './pages/not-found';

class Routes extends Component {
  static propTypes = {
    location: PropTypes.object
  };

  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      this.onRouteChanged();
    }
  }

  onRouteChanged() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <Switch>
        <Route exact path="/" component={ Login } />
        <Route path="/about" component={ About }/>
        <Route path="/help" component={ Help } />
        <Route path="/account" component={ restricted(Account) } />
        <Route path="/login" component={ Login } />
        <Route path="/join" component={ Join } />
        <Route path="/feedback" component={ Feedback } />
        <Route path="/privacy" component={ Privacy } />
        <Route path="/legal" component={ Legal } />
        <Route path="/contact" component={ Contact } />
        <Route path="/forgot" component={ Forgot } />
        <Route path="*" component={ NotFound } />
      </Switch>
    );
  }
}

export default hot(module)(withRouter(Routes));
