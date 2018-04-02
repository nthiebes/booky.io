import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { findDOMNode } from 'react-dom';
import classNames from 'classnames';

import Label from '../../atoms/label';
import Icon from '../icon';

export default class Input extends Component {
  constructor(props) {
    super(props);

    this.onChange = this.onChange.bind(this);
    this.onFocus = this.onFocus.bind(this);
    this.onBlur = this.onBlur.bind(this);
    this.state = {
      errorColor: 'medium'
    };
  }

  componentDidMount() {
    if (this.props.focus) {
      findDOMNode(this.refs.inputField).focus();
    }
  }

  onChange(event) {
    this.props.onChange(event.target.value);
  }

  onFocus() {
    this.setState({
      errorColor: 'primary'
    });
    this.props.onFocus && this.props.onFocus();
  }

  onBlur() {
    this.setState({
      errorColor: 'medium'
    });
    this.props.onBlur && this.props.onBlur();
  }

  render() {
    const { className, placeholder, type, color, name, id, required, value, maxLength, label } = this.props;
    const inputProps = {
      className: classNames('input__field', className && className, color && `input__field--color-${color}`),
      onBlur: this.onBlur,
      onFocus: this.onFocus,
      onChange: this.onChange,
      value,
      placeholder,
      type,
      name,
      id,
      required,
      maxLength
    };

    return (
      <Fragment>
        { label && <Label htmlFor={ id }>{ label }</Label> }
        <div className={ `input ${className}` }>
          <input ref="inputField" { ...inputProps } />
          { required && value && <Icon icon="check" color="green" className="input__icon" /> }
          { required && !value && <Icon icon="error" color={ this.state.errorColor } className="input__icon" /> }
        </div>
      </Fragment>
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
  value: PropTypes.string,
  maxLength: PropTypes.string,
  label: PropTypes.string
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
  value: '',
  maxlength: '',
  label: ''
};
