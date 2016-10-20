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
 * @prop {boolean}  editMode        Edit mode active
 * @prop {function} onMainMenuClick Main menu icon click callback
 * @prop {function} onEditModeClick Edit mode icon click callback
 */
export default class Header extends Component {
    getColor() {
        return 'primary';
    }

    render() {
        const PROPS = this.props;
        const STICKY_CLASS = PROPS.sticky ? 'o-header--sticky' : '';
        const HEADER_CLASS = `o-header o-header--${this.getColor()} ${STICKY_CLASS}`;
        const MENU_MAIN_CLASS = PROPS.menuMainOpen ? 'm-menu-main--open' : '';
        const EDIT_MODE_ICON = PROPS.editMode ? 'view' : 'edit';
        const EDIT_MODE_TITLE = PROPS.editMode ? 'View mode' : 'Edit mode';

        return (
            <header className={ HEADER_CLASS }>
                <Icon icon="menu" className="o-header__icon o-header__menu-main-icon a-icon--light" label="Menu" onClick={ PROPS.onMainMenuClick } />
                <MenuMain className={ MENU_MAIN_CLASS } />

                <Link className="o-header__logo o-header__logo--small a-link--light" href="/" title="Home" icon="heart" />
                <Link className="o-header__logo o-header__logo--large a-link--light" href="/" title="Home" />

                <Icon icon={ EDIT_MODE_ICON } className="o-header__icon a-icon--light" title={ EDIT_MODE_TITLE } onClick={ PROPS.onEditModeClick } />
                <Icon icon="add" className="o-header__icon o-header__icon--add a-icon--light" title="Add" />
                <Icon icon="dashboard" className="o-header__icon a-icon--light" title="Dashboards" />
            </header>
        );
    }
}

Header.propTypes = {
    'menuMainOpen': PropTypes.bool.isRequired,
    'editMode': PropTypes.bool.isRequired,
    'onMainMenuClick': PropTypes.func.isRequired,
    'onEditModeClick': PropTypes.func.isRequired
};
