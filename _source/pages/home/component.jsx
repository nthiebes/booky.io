import React, { Component, PropTypes } from 'react';
import Page from '../../templates/page';
import Headline from '../../atoms/headline/Headline.jsx';
import P from '../../atoms/paragraph/Paragraph.jsx';
import HeaderContainer from '../../organisms/header';
import ToolbarContainer from '../../organisms/toolbar/toolbarContainer';
import CategoriesContainer from '../../organisms/categories/categoriesContainer';
import SidebarContainer from '../../organisms/sidebar/sidebarContainer';
import DashboardsContainer from '../../organisms/dashboards/dashboardsContainer';

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
      <div>
        <HeaderContainer />
        <ToolbarContainer document={ document } window={ window } />
        <SidebarContainer />
        <main>
          <DashboardsContainer position={ 1 } />
          <CategoriesContainer />
        </main>
      </div>
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
