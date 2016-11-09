import React, { Component } from 'react';

import HeaderContainer from '../../03_organisms/header/headerContainer';
import ToolbarContainer from '../../03_organisms/toolbar/toolbarContainer';
import CategoriesContainer from '../../03_organisms/categories/categoriesContainer';
import SidebarContainer from '../../03_organisms/sidebar/sidebarContainer';
import './booky.scss';

/**
 * React component
 * booky.io base class
 * 
 * @class 00_base/booky/Booky
 * 
 * @requires 03_organisms/header/headerContainer
 * @requires 03_organisms/toolbar/toolbarContainer
 * @requires 03_organisms/sidebar/sidebarContainer
 * @requires 03_organisms/categories/categoriesContainer
 */
export default class Booky extends Component {
    render() {
        return (
            <div>
                <HeaderContainer />
                <ToolbarContainer document={ document } window={ window } />
                <SidebarContainer />
                <CategoriesContainer />
            </div>
        );
    }
}
