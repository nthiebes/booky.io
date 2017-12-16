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
    const { className, placeholder, type, onBlur, onFocus, color, name, id, required, label } = this.props;
    const inputProps = {
      className: classNames('input__field', className && className, color && `input__field--color-${color}`),
      onBlur: onBlur ? onBlur : null,
      onFocus: onFocus ? onFocus : null,
      placeholder,
      type,
      name,
      id,
      required
    };

    return (
      <div className={ `input ${className}` }>
        <input ref="inputField" { ...inputProps } />
      </div>
    );
  }
}

/*
<div className={ `input ${className}` }>
        <input className="input__field" ref="inputField" { ...inputProps } />
        <span className="input__highlight" />
        <span className="input__bar" />
        <label className="input__label">{ label }</label>
      </div>
 */

Input.propTypes = {
  className: PropTypes.string,
  focus: PropTypes.bool,
  onBlur: PropTypes.func,
  onFocus: PropTypes.func,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  color: PropTypes.string,
  name: PropTypes.string,
  id: PropTypes.string,
  required: PropTypes.bool
};

Input.defaultProps = {
  className: '',
  focus: false,
  placeholder: '',
  type: 'text',
  color: '',
  name: '',
  id: '',
  required: false
};
