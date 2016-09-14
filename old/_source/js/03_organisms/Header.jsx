import React from 'react';
import Icon from '../01_atoms/Icon.jsx';

export default class Header extends React.Component {
    constructor() {
        super();
    }

    render() {
        const PROPS = this.props;
        const ICON_CLASS = 'm-menu-account__item a-icon--light';

        return (
            <header className="o-header">
                <svg className="o-header__menu-main-icon a-icon a-icon--light" id="menu-main-icon">
                    <use xlinkHref="img/symbol-defs.svg#icon-menu"></use>
                </svg>
                <ul className="m-menu-main" id="menu-main">
                    <li className="m-menu-main__item m-menu-main__item--light">Transaction</li>
                    <li className="m-menu-main__item m-menu-main__item--light">Dashboard</li>
                </ul>

                <div className="a-logo"></div>

                <ul className="m-menu-account" id="menu-account">
                    <li className="m-menu-account__item m-menu-main__item--light">Nico T.</li>
                    <li className="m-menu-account__item">FE</li>
                    <Icon icon="settings" className={ ICON_CLASS } target="Settings" handleClick={ PROPS.handleClick } />
                    <Icon icon="sign-out" className={ ICON_CLASS } />
                </ul>
                <svg className="o-header__menu-account-icon a-icon a-icon--light">
                    <use xlinkHref="img/symbol-defs.svg#icon-more_vert"></use>
                </svg>
            </header>
        );
    }
}
