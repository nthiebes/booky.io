import React, { PropTypes, Component } from 'react';

import Icon from '../icon/Icon.jsx';

/**
 * React component
 * @class 01_atoms/button/Button
 * 
 * @requires 01_atoms/icon/Icon
 *
 * @prop {function} onButtonClick Button click callback
 * @prop {string}  [buzzword]     Buzzword (bold)
 * @prop {string}  [className]    Additional class name
 * @prop {string}  [color]        Icon color
 * @prop {string}  [icon]         Icon name
 * @prop {string}  [size]         Button size
 * @prop {string}  [text]         Button text
 */
export default class Button extends Component {
    render() {
        const PROPS = this.props;
        const CLASS = `a-button a-button--${PROPS.size} a-button--${PROPS.size}-${PROPS.color} ${PROPS.className}`;
        const ICON = PROPS.icon ? <Icon icon={ PROPS.icon } className="a-button__icon" /> : '';
        const TEXT = PROPS.text;
        const BUZZWORD = PROPS.buzzword;

        return (
            <button className={ CLASS } onClick={ PROPS.onButtonClick }>
                { ICON }
                <span className="a-button__text">{ TEXT }</span>
                <span className="a-button__text a-button__text--buzzword">{ BUZZWORD }</span>
            </button>
        );
    }
}

Button.propTypes = {
    'buzzword': PropTypes.string,
    'className': PropTypes.string,
    'color': PropTypes.string,
    'icon': PropTypes.string,
    'size': PropTypes.string,
    'text': PropTypes.string,
    'onButtonClick': PropTypes.func
};

Button.defaultProps = {
    'buzzword': '',
    'className': '',
    'color': 'primary',
    'size': 'small',
    'text': ''
};
