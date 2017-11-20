import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Page from '../../templates/page';
import Headline from '../../atoms/headline';
import P from '../../atoms/paragraph';
import Categories from '../../organisms/categories';
import Dashboards from '../../organisms/dashboards';

/**
 * React component
 * 
 * @class Home
 * @classdesc pages/home/Home
 */
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
  'loggedIn': PropTypes.bool.isRequired
};
