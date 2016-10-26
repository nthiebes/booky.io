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
 * @prop {boolean}  menuMainOpen    Main menu open/closed
 * @prop {function} onMainMenuClick Main menu icon click callback
 * @prop {function} onHeaderClick   Header click callback
 */
export default class Header extends Component {
    constructor(props) {
        super(props);

        // this.onHeaderClick = this.onHeaderClick.bind(this);
    }

    // onHeaderClick(event) {
        
    // }

    getColor() {
        return 'primary';
    }

    render() {
        const PROPS = this.props;
        const STICKY_CLASS = PROPS.sticky ? 'o-header--sticky' : '';
        const MENU_MAIN_OPEN_CLASS = PROPS.menuMainOpen ? 'o-header--main-menu-open' : '';
        const HEADER_CLASS = `o-header o-header--${this.getColor()} ${STICKY_CLASS} ${MENU_MAIN_OPEN_CLASS}`;

        return (
            <header className={ HEADER_CLASS } onClick={ PROPS.onHeaderClick }>
                <Icon icon="menu" className="o-header__icon o-header__menu-main-icon a-icon--light" label="Menu" onClick={ PROPS.onMainMenuClick } stopPropagation={ true } />
                <MenuMain menuMainOpen={ PROPS.menuMainOpen } />

                <Link className="o-header__logo o-header__logo--small a-link--light" href="/" title="Home" icon="heart" />
                <Link className="o-header__logo o-header__logo--large a-link--light" href="/" title="Home" />

                <Icon icon="dashboard" className="o-header__icon a-icon--light" title="Dashboards" />
            </header>
        );
    }
}

Header.propTypes = {
    'menuMainOpen': PropTypes.bool.isRequired,
    'onMainMenuClick': PropTypes.func.isRequired,
    'onHeaderClick': PropTypes.func.isRequired
};
