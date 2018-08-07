import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Categories from '../../organisms/categories';
import Page from '../../templates/page';
import Dashboards from '../../organisms/dashboards';
import { H1 } from '../../atoms/headline';
import P from '../../atoms/paragraph';

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
        <H1>{ 'Welcome!' }</H1>
        <P>{ 'Booky start page' }</P>
      </Page>
    );
  }
}

Home.propTypes = {
  loggedIn: PropTypes.bool.isRequired
};
