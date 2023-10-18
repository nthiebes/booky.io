import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Label from '../label';
import Icon from '../icon';
import { ErrorMessage } from '../messages';

export default class Input extends PureComponent {
  static propTypes = {
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
    error: PropTypes.string,
    darkMode: PropTypes.bool,
    pending: PropTypes.bool,
    inputMode: PropTypes.string,
    ariaLabel: PropTypes.string,
    min: PropTypes.string,
    max: PropTypes.string,
    step: PropTypes.string
  };

  static defaultProps = {
    type: 'text',
    color: '',
    value: '',
    validation: true
  };

  onChange = (event) => {
    this.props.onChange(event.target.value, this.props.name);
  };

  onFocus = (event) => {
    this.props.onFocus && this.props.onFocus(event);
  };

  onBlur = (event) => {
    this.props.onBlur && this.props.onBlur(event.target.value);
  };

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
      error,
      darkMode,
      pending,
      inputMode,
      ariaLabel,
      min,
      max,
      step
    } = this.props;
    const inputProps = {
      className: classNames(
        'input__field',
        className,
        color && `input__field--color-${color}`,
        !validation && 'input__field--no-validation',
        icon && 'input__field--icon',
        error && 'input__field--error',
        darkMode && 'input__field--dark-mode'
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
      autoFocus,
      inputMode,
      min,
      max,
      step,
      'aria-label': ariaLabel
    };

    return (
      <>
        {label && <Label htmlFor={id}>{label}</Label>}
        <span className={classNames('input', className)}>
          {type === 'number' ? (
            <input {...inputProps} pattern="[0-9]*" />
          ) : (
            <input {...inputProps} />
          )}

          {validation && !pending && !error && (
            <>
              <Icon
                icon="check"
                color="green"
                className="input__icon input__icon--valid"
              />
              <Icon
                icon="error"
                color="orange"
                className="input__icon input__icon--invalid"
              />
            </>
          )}
          {error && !pending && (
            <Icon
              icon="error"
              color="orange"
              className="input__icon input__icon--error"
            />
          )}
          {icon && (
            <Icon icon={icon} className="input__icon input__icon--visible" />
          )}
          {pending && (
            <Icon icon="spinner" className="input__icon input__icon--visible" />
          )}
          {requirements && !error && (
            <div
              className={classNames(
                'input__requirements',
                darkMode && 'input__requirements--dark-mode'
              )}
            >
              {requirements}
            </div>
          )}
          {error && <ErrorMessage message={error} noPadding />}
        </span>
      </>
    );
  }
}
