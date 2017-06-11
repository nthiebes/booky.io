import React, { Component, PropTypes } from 'react';
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
        <Dashboards position={ 1 } />
        <Categories />
      </Page>
    ) : (
      <Page>
        <Headline type={ 1 } text="Servus, wie geht's dir? Lorem ipsum dolor sit amet!" />
        <P>{`Web forms are the evolution of their paper counterparts. 
          A collection of labels, boxes and circles designed to constrain input and make it easier for data to be processed.`}</P>
      </Page>
    );
  }
}

Home.propTypes = {
  'loggedIn': PropTypes.bool.isRequired
};
