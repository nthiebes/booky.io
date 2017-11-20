import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { findDOMNode } from 'react-dom';

export default class Input extends Component {
  componentDidUpdate() {
    if (this.focus) {
      findDOMNode(this.refs.inputField).focus();
    }
  }

  render() {
    const { className, placeholder, type, onBlur, onFocus } = this.props;
    const INPUT_PROPS = {
      'className': `input__field ${className}`,
      'placeholder': placeholder,
      'type': type,
      'onBlur': onBlur ? onBlur : null,
      'onFocus': onFocus ? onFocus : null
    };

    return (
      <div className={ `input ${className}` }>
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
