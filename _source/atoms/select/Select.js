/* eslint-disable jsx-a11y/no-onchange */
import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Label from '../../atoms/label';

export default class Select extends Component {
  static propTypes = {
    options: PropTypes.array.isRequired,
    className: PropTypes.string,
    onChange: PropTypes.func,
    label: PropTypes.string,
    id: PropTypes.string,
    name: PropTypes.string,
    required: PropTypes.bool,
    selected: PropTypes.string,
    disabled: PropTypes.bool,
    darkMode: PropTypes.bool,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
  };

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
      value
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
          disabled={disabled}
          className={classNames(
            'select',
            darkMode && 'select--dark-mode',
            className
          )}
        >
          {options.map(({ text, value: optionValue }) => (
            <option key={optionValue} value={optionValue}>
              {text}
            </option>
          ))}
        </select>
      </Fragment>
    );
  }
}
