import React from 'react';

import MenuMain from '../../02_molecules/menu-main/MenuMain.jsx';
import MenuAccount from '../../02_molecules/menu-account/MenuAccount.jsx';
import Search from '../../02_molecules/search/Search.jsx';
import Icon from '../../01_atoms/icon/Icon.jsx';
import Link from '../../01_atoms/link/Link.jsx';

export default class Header extends React.Component {
    constructor() {
        super();

        this.onMainMenuClick = this.onMainMenuClick.bind(this);
    }

    onMainMenuClick() {
        console.log(this);
    }

    render() {
        const PROPS = this.props;
        const MENU_MAIN_CLASS = PROPS.menuMainOpen ? 'm-menu-main--open' : '';

        return (
            <header className="o-header o-header--primary">
                <Icon icon="menu" className="o-header__icon o-header__menu-main-icon a-icon--light" label="Menu" onClick={ this.props.onMainMenuClick } />
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

/**
<MenuAccount />
<Icon icon="more" className="o-header__menu-account-icon a-icon--light" />
 */