import React, { PropTypes, Component } from 'react';
import { findDOMNode } from 'react-dom';

/**
 * React component
 *
 * @class Input
 * @classdesc 01_atoms/input/Input
 *
 * @prop {string}   [className]   Additional class name
 * @prop {boolean}  [focus]       Autofocus input field
 * @prop {function} [onBlur]      Blur event callback
 * @prop {function} [onFocus]     Focus event callback
 * @prop {string}   [placeholder] Input placeholder
 * @prop {string}   [type]        Input type
 */
export default class Input extends Component {
    componentDidUpdate() {
        if (this.props.focus) {
            findDOMNode(this.refs.inputField).focus();
        }
    }

    render() {
        const PROPS = this.props;
        const CLASS = 'a-input ' + PROPS.className;
        const INPUT_PROPS = {
            'className': 'a-input__field',
            'placeholder': PROPS.placeholder,
            'type': PROPS.type,
            'onBlur': PROPS.onBlur ? PROPS.onBlur : '',
            'onFocus': PROPS.onFocus ? PROPS.onFocus : ''
        };

        return (
            <div className={ CLASS }>
                <input ref="inputField" { ...INPUT_PROPS } />
            </div>
        );
    }
}

Input.propTypes = {
    'className': PropTypes.string,
    'focus': PropTypes.bool,
    'onBlur': PropTypes.func,
    'onFocus': PropTypes.func,
    'placeholder': PropTypes.string,
    'type': PropTypes.string
};

Input.defaultProps = {
    'className': '',
    'focus': false,
    'placeholder': '',
    'type': 'text'
};
