import React, { PropTypes, Component } from 'react';

import Icon from '../icon/Icon.jsx';

export default class Button extends Component {
    render() {
        const PROPS = this.props;
        const CLASS = `a-button a-button--${PROPS.size} a-button--${PROPS.size}-${PROPS.color} ${PROPS.className}`;
        const ICON = PROPS.icon ? <Icon icon={ PROPS.icon } className="a-button__icon" /> : '';
        const TEXT = PROPS.text ? PROPS.text : '';
        const BUZZWORD = PROPS.buzzword ? PROPS.buzzword : '';

        return (
            <button className={ CLASS }>
                { ICON }
                <span className="a-button__text">{ TEXT }</span>
                <span className="a-button__text a-button__text--buzzword">{ BUZZWORD }</span>
            </button>
        );
    }
}

Button.propTypes = {
    'className': PropTypes.string,
    'icon': PropTypes.string,
    'text': PropTypes.string.isRequired,
    'buzzword': PropTypes.string,
    'size': PropTypes.string.isRequired,
    'color': PropTypes.string.isRequired
};
