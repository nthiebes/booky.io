import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Page from '../../templates/page';

export default class Home extends Component {
  render() {
    const { loggedIn } = this.props;

    return loggedIn ? (
      <Page toolbar={ loggedIn }>
        { '' }
      </Page>
    ) : (
      <Page>
        { '' }
      </Page>
    );
  }
}

Home.propTypes = {
  loggedIn: PropTypes.bool.isRequired
};
