/* eslint-disable jsx-a11y/no-onchange */
import React, { Component, Fragment } from 'react';
import classNames from 'classnames';

import Label from '../../atoms/label';

export default class Select extends Component {
  onChange = (event) => {
    this.props.onChange(event.target.value);
  };

  render() {
    const {
      options,
      className,
      label,
      id,
      name,
      required,
      selected,
      disabled,
      darkMode,
      value,
      pending
    } = this.props;

    return (
      <Fragment>
        {label && <Label htmlFor={id}>{label}</Label>}
        <select
          id={id}
          name={name}
          required={required}
          onChange={this.onChange}
          value={value}
          defaultValue={selected}
          disabled={disabled || pending}
          className={classNames(
            'select',
            darkMode && 'select--dark-mode',
            className
          )}
        >
          {pending ? (
            <option value="">{'Loading...'}</option>
          ) : (
            options.map(({ text, value: optionValue }) => (
              <option key={optionValue} value={optionValue}>
                {text}
              </option>
            ))
          )}
        </select>
      </Fragment>
    );
  }
}
