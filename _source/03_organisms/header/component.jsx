import React, { PropTypes, Component } from 'react';

import MenuMain from '../../02_molecules/menu-main/MenuMain.jsx';
import Icon from '../../01_atoms/icon/Icon.jsx';
import Link from '../../01_atoms/link/Link.jsx';
import Button from '../../01_atoms/button/Button.jsx';

/**
 * React component
 *
 * @class Header
 * @classdesc 03_organisms/header/Header
 *
 * @prop {boolean}  [sticky]          Fixed header enabled/disabled
 * @prop {boolean}  dashboardsOpen    Dashboards sidebar open/closed
 * @prop {boolean}  menuMainOpen      Main menu open/closed
 * @prop {boolean}  sidebarOpen       Sidebar open/closed
 * @prop {function} onDashboardsClick Dashboards icon click callback
 * @prop {function} onHeaderClick     Header click callback
 * @prop {function} onMenuMainClick   Main menu icon click callback
 * @prop {function} onSidebarClick    Sidebar icon click callback
 * @prop {number}   [color]           Header background color
 */
export default class Header extends Component {
    render() {
        const PROPS = this.props;
        const STICKY_CLASS = PROPS.sticky ? 'o-header--sticky' : '';
        const OVERLAY_MENU_MAIN_CLASS = PROPS.menuMainOpen ? 'o-header--overlay-menu-main' : '';
        const OVERLAY_SIDEBAR_CLASS = PROPS.sidebarOpen ? 'o-header--overlay-sidebar' : '';
        const OVERLAY_DASHBOARDS_CLASS = PROPS.dashboardsOpen ? 'o-header--overlay-dashboards' : '';
        const HEADER_CLASS = `o-header o-header--color-${PROPS.color} 
                            ${STICKY_CLASS} 
                            ${OVERLAY_MENU_MAIN_CLASS} 
                            ${OVERLAY_SIDEBAR_CLASS} 
                            ${OVERLAY_DASHBOARDS_CLASS}`;

        return (
            <header className={ HEADER_CLASS } onClick={ PROPS.onHeaderClick }>
                <Icon 
                    icon="menu" 
                    className="o-header__icon o-header__menu-main-icon a-icon--light" 
                    label="Menu" 
                    onClick={ PROPS.onMenuMainClick } 
                    stopPropagation={ true } 
                />
                <MenuMain document={ document } menuMainOpen={ PROPS.menuMainOpen } />

                <Link className="o-header__logo o-header__logo--small a-link--light" href="/" title="Home">
                    <Icon icon="heart" />
                </Link>
                <Link className="o-header__logo o-header__logo--large a-link--light" href="/" title="Home" />

                <Icon icon="customize" className="a-icon--light" title="Customize booky" stopPropagation={ true } onClick={ PROPS.onSidebarClick } />
                <Icon 
                    icon="dashboard" 
                    className="o-header__dashboards a-icon--light" 
                    title="Dashboards" 
                    stopPropagation={ true } 
                    onClick={ PROPS.onDashboardsClick } 
                />
                <Button className="o-header__sign-out a-button--light" size="small" color="light" text="Sign" buzzword="Out" />
            </header>
        );
    }
}

Header.propTypes = {
    'menuMainOpen': PropTypes.bool.isRequired,
    'dashboardsOpen': PropTypes.bool.isRequired,
    'sidebarOpen': PropTypes.bool.isRequired,
    'onMenuMainClick': PropTypes.func.isRequired,
    'onDashboardsClick': PropTypes.func.isRequired,
    'onHeaderClick': PropTypes.func.isRequired,
    'onSidebarClick': PropTypes.func.isRequired,
    'sticky': PropTypes.bool,
    'color': PropTypes.number
};

Header.defaultProps = {
    'sticky': true,
    'color': 0
};
