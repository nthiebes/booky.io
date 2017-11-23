import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { findDOMNode } from 'react-dom';
import classNames from 'classnames';

export default class Input extends Component {
  componentDidUpdate() {
    if (this.focus) {
      findDOMNode(this.refs.inputField).focus();
    }
  }

  render() {
    const { className, placeholder, type, onBlur, onFocus, color } = this.props;
    const inputProps = {
      className: classNames('input__field', className && className, color && `input__field--color-${color}`),
      placeholder: placeholder,
      type: type,
      onBlur: onBlur ? onBlur : null,
      onFocus: onFocus ? onFocus : null
    };

    return (
      <div className={ `input ${className}` }>
        <input ref="inputField" { ...inputProps } />
      </div>
    );
  }
}

Input.propTypes = {
  className: PropTypes.string,
  focus: PropTypes.bool,
  onBlur: PropTypes.func,
  onFocus: PropTypes.func,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  color: PropTypes.string
};

Input.defaultProps = {
  className: '',
  focus: false,
  placeholder: '',
  type: 'text',
  color: ''
};
