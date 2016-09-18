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
                <Icon icon="menu" className="m-menu-main__item a-icon--light" />
                <MenuMain />
                <Link className="o-header__logo" href="/" title="Home" />
                <MenuAccount />
                <Icon icon="more" className="m-menu-account__item a-icon--light" />
            </header>
        );
    }
}