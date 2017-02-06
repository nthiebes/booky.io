import React, { Component } from 'react';

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
        return (
            <div>
                <HeaderContainer />
                <ToolbarContainer document={ document } window={ window } />
                <SidebarContainer />
                <main>
                    <DashboardsContainer position={ 1 } />
                    <CategoriesContainer />
                </main>
            </div>
        );
    }
}
