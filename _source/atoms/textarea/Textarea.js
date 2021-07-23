import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Label from '../label';
// import Icon from '../icon';
import { ErrorMessage } from '../messages';

export default class Textarea extends Component {
  static propTypes = {
    className: PropTypes.string,
    autoFocus: PropTypes.bool,
    onBlur: PropTypes.func,
    onFocus: PropTypes.func,
    onChange: PropTypes.func,
    placeholder: PropTypes.string,
    color: PropTypes.string,
    name: PropTypes.string,
    id: PropTypes.string,
    required: PropTypes.bool,
    value: PropTypes.string,
    maxLength: PropTypes.string,
    label: PropTypes.string,
    autoComplete: PropTypes.string,
    disabled: PropTypes.bool,
    validation: PropTypes.bool,
    error: PropTypes.string,
    cols: PropTypes.number,
    rows: PropTypes.number,
    darkMode: PropTypes.bool
  };

  static defaultProps = {
    color: '',
    value: '',
    validation: true
  };

  onChange = (event) => {
    this.props.onChange(event.target.value, this.props.name);
  };

  onFocus = () => {
    this.props.onFocus && this.props.onFocus();
  };

  onBlur = () => {
    this.props.onBlur && this.props.onBlur();
  };

  render() {
    const {
      className,
      placeholder,
      color,
      name,
      id,
      required,
      value,
      maxLength,
      label,
      autoComplete,
      disabled,
      validation,
      autoFocus,
      error,
      cols,
      rows,
      darkMode
    } = this.props;
    const textareaProps = {
      className: classNames(
        'textarea__field',
        color && `textarea__field--color-${color}`,
        !validation && 'textarea__field--no-validation',
        darkMode && 'textarea__field--dark-mode',
        className
      ),
      onBlur: this.onBlur,
      onFocus: this.onFocus,
      onChange: this.onChange,
      value,
      placeholder,
      name,
      id,
      required,
      maxLength,
      autoComplete,
      disabled,
      autoFocus,
      cols,
      rows
    };

    return (
      <Fragment>
        {label && <Label htmlFor={id}>{label}</Label>}
        <span className={classNames('textarea', className)}>
          <textarea {...textareaProps} />
          {validation && (
            <Fragment>
              {/* <Icon
                icon="check"
                color="green"
                className="textarea__icon textarea__icon--valid"
              />
              <Icon
                icon="error"
                color="orange"
                className="textarea__icon textarea__icon--invalid"
              /> */}
            </Fragment>
          )}
          {error && <ErrorMessage message={error} />}
        </span>
      </Fragment>
    );
  }
}
