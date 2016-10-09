import React, { PropTypes, Component } from 'react';

import MenuMain from '../../02_molecules/menu-main/MenuMain.jsx';
import Icon from '../../01_atoms/icon/Icon.jsx';
import Link from '../../01_atoms/link/Link.jsx';

/**
 * React component
 * @class 03_organisms/header/Header
 * 
 * @requires 02_molecules/menu-main/MenuMain
 * @requires 01_atoms/icon/Icon
 * @requires 01_atoms/link/Link
 *
 * @prop {boolean}  menuMainOpen    Main menu open
 * @prop {function} onMainMenuClick Main menu icon click callback
 */
export default class Header extends Component {
    render() {
        const PROPS = this.props;
        const MENU_MAIN_CLASS = PROPS.menuMainOpen ? 'm-menu-main--open' : '';

        return (
            <header className="o-header o-header--primary">
                <Icon icon="menu" className="o-header__icon o-header__menu-main-icon a-icon--light" label="Menu" onClick={ PROPS.onMainMenuClick } />
                <MenuMain className={ MENU_MAIN_CLASS } />

                <Link className="o-header__logo o-header__logo--small a-link--light" href="/" title="Home" icon="heart" />
                <Link className="o-header__logo o-header__logo--large a-link--light" href="/" title="Home" />

                <Icon icon="edit" className="o-header__icon a-icon--light" />
                <Icon icon="add" className="o-header__icon a-icon--light" />
                <Icon icon="dashboard" className="o-header__icon a-icon--light" />
            </header>
        );
    }
}

Header.propTypes = {
    'menuMainOpen': PropTypes.bool.isRequired,
    'onMainMenuClick': PropTypes.func.isRequired
};
