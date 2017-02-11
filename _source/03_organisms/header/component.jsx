import React, { PropTypes, Component } from 'react';

import MenuMain from '../../02_molecules/menu-main';
import Icon from '../../01_atoms/icon/Icon.jsx';
import Link from '../../01_atoms/link/Link.jsx';
import Button from '../../01_atoms/button/Button.jsx';

/**
 * React component
 *
 * @class Header
 * @classdesc 03_organisms/header/Header
 */
export default class Header extends Component {
    render() {
        const PROPS = this.props;
        const LOGGED_IN = PROPS.loggedIn;
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
                <MenuMain document={ document } menuMainOpen={ PROPS.menuMainOpen } loggedIn={ LOGGED_IN } />

                <Link className="o-header__logo o-header__logo--small a-link--light" href="/" title="Home">
                    <Icon icon="heart" />
                </Link>
                <Link className="o-header__logo o-header__logo--large a-link--light" href="/" title="Home" />

                { LOGGED_IN ? <Icon 
                    icon="customize" 
                    className="a-icon--light" 
                    title="Customize booky" 
                    stopPropagation={ true } 
                    onClick={ PROPS.onSidebarClick } 
                /> : null }
                { LOGGED_IN ? <Icon 
                    icon="dashboard" 
                    className="o-header__dashboards a-icon--light" 
                    title="Dashboards" 
                    stopPropagation={ true } 
                    onClick={ PROPS.onDashboardsClick } 
                /> : null }
                { LOGGED_IN ? null : <Button 
                    className="o-header__join" 
                    size="small" 
                    color="light" 
                    text="Join" 
                    buzzword="Booky" 
                /> }
                { LOGGED_IN ? <Button 
                    className="o-header__sign-out" 
                    size="small" 
                    color="light" 
                    text="Sign" 
                    buzzword="Out" 
                /> : <Button 
                    className="o-header__sign-in" 
                    size="small" 
                    color="light" 
                    text="Sign" 
                    buzzword="In" 
                /> }
            </header>
        );
    }
}

Header.propTypes = {
    'color': PropTypes.number,
    'dashboardsOpen': PropTypes.bool.isRequired,
    'loggedIn': PropTypes.bool.isRequired,
    'menuMainOpen': PropTypes.bool.isRequired,
    'onDashboardsClick': PropTypes.func.isRequired,
    'onHeaderClick': PropTypes.func.isRequired,
    'onMenuMainClick': PropTypes.func.isRequired,
    'onSidebarClick': PropTypes.func.isRequired,
    'sidebarOpen': PropTypes.bool.isRequired,
    'sticky': PropTypes.bool
};

Header.defaultProps = {
    'color': 0,
    'sticky': true
};
