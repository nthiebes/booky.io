import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { findDOMNode } from 'react-dom';
import classNames from 'classnames';

export default class Input extends Component {
  constructor(props) {
    super(props);

    this.onChange = this.onChange.bind(this);
  }

  componentDidUpdate() {
    if (this.focus) {
      findDOMNode(this.refs.inputField).focus();
    }
  }

  onChange(event) {
    this.props.onChange(event.target.value);
  }

  render() {
    const { className, placeholder, type, onBlur, onFocus, color, name, id, required, value } = this.props;
    const inputProps = {
      className: classNames('input__field', className && className, color && `input__field--color-${color}`),
      onBlur: onBlur ? onBlur : null,
      onFocus: onFocus ? onFocus : null,
      onChange: this.onChange,
      value: value,
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

Input.propTypes = {
  className: PropTypes.string,
  focus: PropTypes.bool,
  onBlur: PropTypes.func,
  onFocus: PropTypes.func,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  color: PropTypes.string,
  name: PropTypes.string,
  id: PropTypes.string,
  required: PropTypes.bool,
  value: PropTypes.string
};

Input.defaultProps = {
  className: '',
  focus: false,
  placeholder: '',
  type: 'text',
  color: '',
  name: '',
  id: '',
  required: false,
  value: ''
};
