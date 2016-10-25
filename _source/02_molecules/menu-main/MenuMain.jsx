import React, { PropTypes, Component } from 'react';

import Icon from '../../01_atoms/icon/Icon.jsx';

/**
 * React component
 * @class 02_molecules/menu-main/MenuMain
 * 
 * @requires 01_atoms/icon/Icon
 *
 * @prop {boolean} menuMainOpen Main menu open/closed
 * @prop {string}  [className]  Additional class name
 */
export default class MenuMain extends Component {
    componentWillReceiveProps(nextProps) {
        document.body.classList.toggle('booky--no-scrolling', nextProps.menuMainOpen);
    }

    render() {
        const PROPS = this.props;
        const MENU_MAIN_OPEN_CLASS = PROPS.menuMainOpen ? 'm-menu-main--open ' : '';
        const CLASS = 'm-menu-main ' + MENU_MAIN_OPEN_CLASS + PROPS.className;

        return (
            <ul className={ CLASS }>
                <Icon className="m-menu-main__item" icon="about" label="About" />
                <Icon className="m-menu-main__item" icon="help" label="Help" />
                <Icon className="m-menu-main__item" icon="next" label="Account" />
                <Icon className="m-menu-main__item" icon="next" label="Next" />
                <Icon className="m-menu-main__item" icon="next" label="Customize" />
                <Icon className="m-menu-main__item" icon="next" label="Sign Out" />
            </ul>
        );
    }
}

MenuMain.propTypes = {
    'menuMainOpen': PropTypes.bool.isRequired,
    'className': PropTypes.string
};

MenuMain.defaultProps = {
    'className': ''
};
