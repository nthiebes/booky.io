import React, { Component, Suspense, lazy } from 'react';
import PropTypes from 'prop-types';
import { Route, Switch, withRouter } from 'react-router-dom';
import { hot } from 'react-hot-loader';

import { restricted } from './templates/restricted';
import Loading from './pages/loading';

const Home = lazy(() => import('./pages/home'));
const About = lazy(() => import('./pages/about'));
const Help = lazy(() => import('./pages/help'));
const Account = lazy(() => import('./pages/account'));
const Login = lazy(() => import('./pages/login'));
const Join = lazy(() => import('./pages/join'));
const Feedback = lazy(() => import('./pages/feedback'));
const Privacy = lazy(() => import('./pages/privacy'));
const Legal = lazy(() => import('./pages/legal'));
const Contact = lazy(() => import('./pages/contact'));
const Forgot = lazy(() => import('./pages/forgot'));
const NotFound = lazy(() => import('./pages/not-found'));

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
      <Suspense fallback={ <Loading /> }>
        <Switch>
          <Route exact path="/" component={ Home } />
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
      </Suspense>
    );
  }
}

export default hot(module)(withRouter(Routes));
