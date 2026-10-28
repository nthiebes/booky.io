import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state) => ({
  loggedIn: state.user.loggedIn,
  isExtension: state.extension.active
});

export const publicOnly = (BaseComponent) => {
  class PublicOnly extends Component {
    componentDidMount() {
      this.checkAuthentication(this.props);
    }

    componentDidUpdate(prevProps) {
      const { location } = this.props;

      if (prevProps.location !== location) {
        this.checkAuthentication(this.props);
      }
    }

    checkAuthentication(props) {
      const { history, loggedIn, isExtension } = props;

      if (loggedIn) {
        history.replace({
          pathname: isExtension ? '/extension/add' : '/',
          search: isExtension ? window.location.search : ''
        });
      }
    }

    render() {
      return <BaseComponent {...this.props} />;
    }
  }

  return connect(mapStateToProps)(withRouter(PublicOnly));
};
