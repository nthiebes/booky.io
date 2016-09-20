import React from 'react';

import MenuMain from '../../02_molecules/menu-main/MenuMain.jsx';
import MenuAccount from '../../02_molecules/menu-account/MenuAccount.jsx';
import Icon from '../../01_atoms/icon/Icon.jsx';
import Link from '../../01_atoms/link/Link.jsx';

export default class Header extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <header className="o-header">
                <Icon icon="menu" className="o-header__menu-main-icon a-icon--light" />
                <MenuMain />
                <Link className="o-header__logo" href="/" title="Home" icon="heart" />
                <MenuAccount />
                <Icon icon="more" className="o-header__menu-account-icon a-icon--light" />
            </header>
        );
    }
}