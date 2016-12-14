import React, { Component } from 'react';

import HeaderContainer from '../../03_organisms/header/headerContainer';
import ToolbarContainer from '../../03_organisms/toolbar/toolbarContainer';
import CategoriesContainer from '../../03_organisms/categories/categoriesContainer';
import SidebarContainer from '../../03_organisms/sidebar/sidebarContainer';
import DashboardsContainer from '../../03_organisms/dashboards/dashboardsContainer';
import './booky.scss';

/**
 * React component
 * 
 * @class Booky
 * @classdesc 00_base/booky/Booky
 * 
 * @requires 03_organisms/header/headerContainer
 * @requires 03_organisms/toolbar/toolbarContainer
 * @requires 03_organisms/sidebar/sidebarContainer
 * @requires 03_organisms/categories/categoriesContainer
 * @requires 03_organisms/dashboards/dashboardsContainer
 */
export default class Booky extends Component {
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
