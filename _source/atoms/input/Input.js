import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Label from '../label';
import Icon from '../icon';
import ErrorMessage from '../error-message';

export default class Input extends Component {
  constructor(props) {
    super(props);

    this.onChange = this.onChange.bind(this);
    this.onFocus = this.onFocus.bind(this);
    this.onBlur = this.onBlur.bind(this);
  }

  onChange(event) {
    this.props.onChange(event.target.value, this.props.name);
  }

  onFocus() {
    this.props.onFocus && this.props.onFocus();
  }

  onBlur() {
    this.props.onBlur && this.props.onBlur();
  }

  render() {
    const {
      className,
      placeholder,
      type,
      color,
      name,
      id,
      required,
      value,
      maxLength,
      label,
      autoComplete,
      pattern,
      requirements,
      disabled,
      validation,
      autoFocus,
      icon,
      error
    } = this.props;
    const inputProps = {
      className: classNames(
        'input__field',
        className && className,
        color && `input__field--color-${color}`,
        !validation && 'input__field--no-validation',
        icon && 'input__field--icon'
      ),
      onBlur: this.onBlur,
      onFocus: this.onFocus,
      onChange: this.onChange,
      value,
      placeholder,
      type,
      name,
      id,
      required,
      maxLength,
      autoComplete,
      pattern,
      requirements,
      disabled,
      autoFocus
    };

    return (
      <Fragment>
        { label && <Label htmlFor={ id }>{ label }</Label> }
        <span className={ classNames('input', className && className) }>
          <input { ...inputProps } />
          { validation && (
            <Fragment>
              <Icon icon="check" color="green" className="input__icon input__icon--valid" />
              <Icon icon="error" color="primary" className="input__icon input__icon--invalid" />
            </Fragment>
          ) }
          { icon && <Icon icon={ icon } className="input__icon input__icon--visible" /> }
          { requirements && (
            <div className="input__requirements">
              { requirements }
            </div>
          ) }
          { error && (
            <ErrorMessage id={ error } />
          ) }
        </span>
      </Fragment>
    );
  }
}

Input.propTypes = {
  className: PropTypes.string,
  autoFocus: PropTypes.bool,
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
  label: PropTypes.string,
  autoComplete: PropTypes.string,
  pattern: PropTypes.string,
  requirements: PropTypes.string,
  disabled: PropTypes.bool,
  validation: PropTypes.bool,
  icon: PropTypes.string,
  error: PropTypes.string
};

Input.defaultProps = {
  type: 'text',
  color: '',
  value: '',
  validation: true
};
