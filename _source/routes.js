import React, { Component, Suspense, lazy } from 'react';
import PropTypes from 'prop-types';
import { Route, Switch, withRouter } from 'react-router-dom';
import { hot } from 'react-hot-loader';

import { restricted } from './templates/restricted';
import { publicOnly } from './templates/public-only';
import Loading from './pages/loading';
import Home from './pages/home';
import Shared from './pages/shared';

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
const Resend = lazy(() => import('./pages/resend'));
const NotFound = lazy(() => import('./pages/not-found'));
const Next = lazy(() => import('./pages/next'));
const Add = lazy(() => import('./pages/add'));
const Open = lazy(() => import('./pages/open'));
const Customize = lazy(() => import('./pages/customize'));
const Bookmarklet = lazy(() => import('./pages/bookmarklet'));
const Features = lazy(() => import('./pages/features'));
const Supporter = lazy(() => import('./pages/supporter'));
const Upsell = lazy(() => import('./pages/upsell'));
const New = lazy(() => import('./pages/new'));
const Terms = lazy(() => import('./pages/terms'));

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
      <Suspense fallback={<Loading />}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/help" component={Help} />
          <Route path="/account" component={restricted(Account)} />
          <Route path="/login" component={publicOnly(Login)} />
          <Route path="/join" component={publicOnly(Join)} />
          <Route path="/feedback" component={Feedback} />
          <Route path="/privacy" component={Privacy} />
          <Route path="/legal" component={Legal} />
          <Route path="/contact" component={Contact} />
          <Route path="/forgot" component={Forgot} />
          <Route path="/resend" component={Resend} />
          <Route path="/next" component={restricted(Next)} />
          <Route path="/bookmarklet" component={Bookmarklet} />
          <Route path="/features" component={Features} />
          <Route path="/supporter" component={Supporter} />
          <Route path="/upsell" component={restricted(Upsell)} />
          <Route path="/new" component={New} />
          <Route path="/terms" component={Terms} />
          <Route path="/shared/:id" component={Shared} />
          <Route path="/activate/:token" component={publicOnly(Login)} />
          <Route
            path="/recovery/:action/:params"
            component={publicOnly(Login)}
          />
          <Route path="/extension/login" component={publicOnly(Login)} />
          <Route path="/extension/add" component={restricted(Add)} />
          <Route path="/extension/open" component={restricted(Open)} />
          <Route
            path="/extension/customize"
            component={restricted(Customize)}
          />
          <Route path="*" component={NotFound} />
        </Switch>
      </Suspense>
    );
  }
}

export default hot(module)(withRouter(Routes));
