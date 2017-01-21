import React, { PropTypes, Component } from 'react';

import Link from '../../01_atoms/link/Link.jsx';
import Icon from '../../01_atoms/icon/Icon.jsx';

/**
 * React component
 *
 * @class MenuMain
 * @classdesc 02_molecules/menu-main/MenuMain
 *
 * @prop {boolean} menuMainOpen Main menu open/closed
 * @prop {string}  [className]  Additional class name
 * @prop {object}  document     The page document object
 */
export default class MenuMain extends Component {
    constructor(props) {
        super(props);

        this.onMenuClick = this.onMenuClick.bind(this);
    }

    // componentWillReceiveProps(nextProps) {
    //     nextProps.document.body.classList.toggle('booky--no-scrolling-mobile-tablet', nextProps.menuMainOpen);
    // }

    onMenuClick(event) {
        event.stopPropagation();
    }

    render() {
        const PROPS = this.props;
        const MENU_MAIN_OPEN_CLASS = PROPS.menuMainOpen ? 'm-menu-main--open ' : '';
        const CLASS = 'm-menu-main ' + MENU_MAIN_OPEN_CLASS + PROPS.className;

        return (
            <ul className={ CLASS } onClick={ this.onMenuClick }>
                <Link className="m-menu-main__item" href="/about">
                    <Icon icon="about" label="About" />
                </Link>
                <Link className="m-menu-main__item" href="/help">
                    <Icon icon="help" label="Help" />
                </Link>
                <Link className="m-menu-main__item" href="/account">
                    <Icon icon="account" label="Account" />
                </Link>
                <Link className="m-menu-main__item" href="/next">
                    <Icon icon="next" label="Next" />
                </Link>
                <Link className="m-menu-main__item m-menu-main__sign-out" href="/sign-out">
                    <Icon icon="sign-out" label="Sign Out" />
                </Link>
            </ul>
        );
    }
}

MenuMain.propTypes = {
    'menuMainOpen': PropTypes.bool.isRequired,
    'className': PropTypes.string,
    'document': PropTypes.object.isRequired
};

MenuMain.defaultProps = {
    'className': ''
};
