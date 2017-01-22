import React, { Component, PropTypes } from 'react';

import HeaderContainer from '../../03_organisms/header/headerContainer';
import SidebarContainer from '../../03_organisms/sidebar/sidebarContainer';

/**
 * React component
 * 
 * @class Page
 * @classdesc 04_templates/page/Page
 */
export default class Page extends Component {
    render() {
        return (
            <div>
                <HeaderContainer />
                <SidebarContainer />
                <main className="t-page">
                    { this.props.children }
                </main>
            </div>
        );
    }
}

Page.propTypes = {
    'children': PropTypes.element.isRequired
};
