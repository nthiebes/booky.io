import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state) => ({
  loggedIn: state.user.loggedIn
});

export const restricted = (BaseComponent) => {
  class Restricted extends Component {
    componentDidMount() {
      this.checkAuthentication(this.props);
    }

    componentDidUpdate(prevProps) {
      const { location } = this.props;

      if (prevProps.location !== location) {
        this.checkAuthentication(location);
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
};
