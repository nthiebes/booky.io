import React, { PureComponent, Fragment } from 'react';
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
    inputMode: PropTypes.string
  }
  
  static defaultProps = {
    type: 'text',
    color: '',
    value: '',
    validation: true
  }

  onChange = (event) => {
    this.props.onChange(event.target.value, this.props.name);
  }

  onFocus = (event) => {
    this.props.onFocus && this.props.onFocus(event);
  }

  onBlur = (event) => {
    this.props.onBlur && this.props.onBlur(event.target.value);
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
      error,
      darkMode,
      pending,
      inputMode
    } = this.props;
    const inputProps = {
      className: classNames(
        'input__field',
        className && className,
        color && `input__field--color-${color}`,
        !validation && 'input__field--no-validation',
        icon && 'input__field--icon',
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
      inputMode
    };

    return (
      <Fragment>
        { label && <Label htmlFor={ id }>{ label }</Label> }
        <span className={ classNames('input', className) }>
          <input { ...inputProps } />
          { validation && !pending && (
            <Fragment>
              <Icon icon="check" color="green" className="input__icon input__icon--valid" />
              <Icon icon="error" color="orange" className="input__icon input__icon--invalid" />
            </Fragment>
          ) }
          { icon && <Icon icon={ icon } className="input__icon input__icon--visible" /> }
          { pending && <Icon icon="spinner" className="input__icon input__icon--visible" /> }
          { requirements && (
            <div className={ classNames('input__requirements', darkMode && 'input__requirements--dark-mode') }>
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
