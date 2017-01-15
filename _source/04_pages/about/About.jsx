import React, { Component } from 'react';

import HeaderContainer from '../../03_organisms/header/headerContainer';
import SidebarContainer from '../../03_organisms/sidebar/sidebarContainer';
import Headline from '../../01_atoms/headline/Headline';

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
                <main>
                    <Headline type={ 1 } text="Servus, wie geht's?" />
                    <Headline type={ 1 } text="Servus, wie geht's?" />
                    <Headline type={ 1 } text="Category こんにちはお元気で 3" />
                    <Headline type={ 1 } text="مرحبا كيف حالك؟" />
                    <Headline type={ 1 } text="Привет, как дела 3" />
                </main>
            </div>
        );
    }
}
