import React, { Component } from 'react';

import HeaderContainer from '../../03_organisms/header/headerContainer';
import SidebarContainer from '../../03_organisms/sidebar/sidebarContainer';

/**
 * React component
 * 
 * @class AboutPage
 * @classdesc 04_pages/about/AboutPage
 * 
 * @requires 03_organisms/header/headerContainer
 * @requires 03_organisms/sidebar/sidebarContainer
 */
export default class AboutPage extends Component {
    render() {
        return (
            <div>
                <HeaderContainer />
                <SidebarContainer />
            </div>
        );
    }
}
