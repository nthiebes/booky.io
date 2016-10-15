import React, { PropTypes, Component } from 'react';

import Icon from '../../01_atoms/icon/Icon.jsx';

/**
 * React component
 * @class 02_molecules/menu-main/MenuMain
 * 
 * @requires 01_atoms/icon/Icon
 *
 * @prop {string} [className] Additional class name
 * @prop {string} [icon]      Icon name
 * @prop {string} [text]      Link text
 */
export default class MenuMain extends Component {
    render() {
        const PROPS = this.props;
        const CLASS = 'm-menu-main ' + PROPS.className;

        return (
            <ul className={ CLASS }>
                <Icon className="m-menu-main__item" icon="about" label="About" />
                <Icon className="m-menu-main__item" icon="help" label="Help" />
                <Icon className="m-menu-main__item" icon="next" label="Next" />
            </ul>
        );
    }
}

MenuMain.propTypes = {
    'className': PropTypes.string
};

MenuMain.defaultProps = {
    'className': ''
};
