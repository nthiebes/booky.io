import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Categories from '../../organisms/categories';
import Page from '../../templates/page';
import Dashboards from '../../organisms/dashboards';

export default class Home extends Component {
  render() {
    const { loggedIn } = this.props;

    return loggedIn ? (
      <Page className="page--full-width" toolbar={ loggedIn } search dashboards>
        <Dashboards className="dashboards-sidebar" />
        <Categories dashboards />
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
