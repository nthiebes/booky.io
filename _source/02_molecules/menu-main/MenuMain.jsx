import React, { PropTypes, Component } from 'react';

import Icon from '../../01_atoms/icon/Icon.jsx';

/**
 * React component
 *
 * @class MenuMain
 * @classdesc 02_molecules/menu-main/MenuMain
 * 
 * @requires 01_atoms/icon/Icon
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
                <Icon className="m-menu-main__item" icon="about" label="About" />
                <Icon className="m-menu-main__item" icon="help" label="Help" />
                <Icon className="m-menu-main__item" icon="account" label="Account" />
                <Icon className="m-menu-main__item" icon="next" label="Next" />
                <Icon className="m-menu-main__item m-menu-main__sign-out" icon="sign-out" label="Sign Out" />
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
