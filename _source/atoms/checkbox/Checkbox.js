import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Label from '../label';

export default class Checkbox extends Component {
  static propTypes = {
    id: PropTypes.string,
    checked: PropTypes.bool,
    label: PropTypes.node,
    name: PropTypes.string,
    value: PropTypes.string,
    className: PropTypes.string,
    onChange: PropTypes.func,
    tabIndex: PropTypes.string,
    first: PropTypes.bool,
    disabled: PropTypes.bool,
    required: PropTypes.bool
  };

  handleInputChange = (event) => {
    const { onChange } = this.props;

    onChange &&
      onChange({
        name: event.target.name,
        checked: event.target.checked
      });
  };

  render() {
    const {
      label,
      className,
      id,
      name,
      value,
      checked,
      tabIndex,
      first,
      disabled,
      required
    } = this.props;

    return (
      <div
        className={classNames(
          'checkbox',
          first && 'checkbox--first',
          className
        )}
      >
        <input
          type="checkbox"
          id={id}
          name={name}
          className="checkbox__input"
          value={value}
          checked={checked}
          onChange={this.handleInputChange}
          tabIndex={tabIndex}
          disabled={disabled}
          required={required}
        />
        {label && (
          <Label htmlFor={id} className="checkbox__label">
            {label}
          </Label>
        )}
      </div>
    );
  }
}
