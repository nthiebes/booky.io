import React, { Component } from 'react';
import classNames from 'classnames';

import Label from '../label';

export default class Radio extends Component {
  handleInputChange = (event) => {
    const { onChange } = this.props;

    onChange &&
      onChange({
        name: event.target.name,
        value: event.target.value
      });
  };

  render() {
    const {
      children,
      className,
      id,
      name,
      value,
      checked,
      inputClassName,
      labelClassName,
      first,
      illustration,
      required
    } = this.props;

    return (
      <div
        className={classNames(
          'radio',
          first && 'radio--first',
          illustration && 'radio--image',
          className
        )}
      >
        {illustration && (
          // eslint-disable-next-line jsx-a11y/label-has-associated-control
          <label htmlFor={id} className="radio__image-label" aria-hidden="true">
            <img
              width={200}
              alt=""
              className="radio__image"
              src={`../../_assets/illustrations/${illustration}.svg`}
              loading="lazy"
            />
          </label>
        )}
        <input
          type="radio"
          id={id}
          name={name}
          className={classNames('radio__input', inputClassName)}
          value={value}
          onChange={this.handleInputChange}
          defaultChecked={checked}
          required={required}
        />
        <Label
          htmlFor={id}
          className={classNames('radio__label', labelClassName)}
        >
          {children}
        </Label>
      </div>
    );
  }
}
