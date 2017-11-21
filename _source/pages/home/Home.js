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
    const { loggedIn, dashboard } = this.props;

    return loggedIn ? (
      <Page>
        <Headline type={ 3 }>{ dashboard.name }</Headline>
      </Page>
    ) : (
      <Page>
        { '' }
      </Page>
    );
  }
}

Home.propTypes = {
  'loggedIn': PropTypes.bool.isRequired,
  dashboard: PropTypes.object
};
