import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

export const mapStateToProps = (state) => ({
  loggedIn: state.user.loggedIn
});

export default function restricted(BaseComponent) {
  class Restricted extends Component {
    componentWillMount() {
      this.checkAuthentication(this.props);
    }

    componentWillReceiveProps(nextProps) {
      if (nextProps.location !== this.props.location) {
        this.checkAuthentication(nextProps);
      }
    }

    checkAuthentication(params) {
      const { history, loggedIn } = params;

      if (!loggedIn) {
        history.replace({ pathname: '/login' });
      }
    }

    render() {
      return <BaseComponent { ...this.props } />;
    }
  }

  Restricted.propTypes = {
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired,
    loggedIn: PropTypes.bool.isRequired
  };

  return connect(mapStateToProps)(
    withRouter(Restricted)
  );
}
