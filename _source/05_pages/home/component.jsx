import React, { Component, PropTypes } from 'react';

import Page from '../../04_templates/page';
import Headline from '../../01_atoms/headline/Headline.jsx';
import P from '../../01_atoms/paragraph/Paragraph.jsx';
import HeaderContainer from '../../03_organisms/header';
import ToolbarContainer from '../../03_organisms/toolbar/toolbarContainer';
import CategoriesContainer from '../../03_organisms/categories/categoriesContainer';
import SidebarContainer from '../../03_organisms/sidebar/sidebarContainer';
import DashboardsContainer from '../../03_organisms/dashboards/dashboardsContainer';

/**
 * React component
 * 
 * @class Home
 * @classdesc 05_pages/home/Home
 */
export default class Home extends Component {
    render() {
        const LOGGED_IN = this.props.loggedIn;

        return LOGGED_IN ? (
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
