import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Icon from '../../atoms/icon';
import Radio from '../../atoms/radio';

const colorMap = {
  1: 'Grey',
  2: 'Black',
  3: 'Orange',
  4: 'Blue',
  5: 'Purple',
  6: 'Pink',
  7: 'Green',
  8: 'Turquoise',
  9: 'Red'
};

export default class Color extends Component {
  static propTypes = {
    value: PropTypes.string.isRequired,
    color: PropTypes.object.isRequired,
    onChange: PropTypes.func.isRequired
  };

  handleChange = () => {
    this.props.onChange(this.props.color.key);
  };

  render() {
    const { color, value } = this.props;
    const colorName = colorMap[color.key];

    return (
      <Radio
        className="color-picker__color"
        inputClassName="color-picker__input"
        labelClassName={classNames(
          'color-picker__label',
          `color-picker__label--${color.key}`
        )}
        id={`color${color.key}`}
        name="color"
        value={`color${value}`}
        onChange={this.handleChange}
        checked={value === color.key}
      >
        <Icon
          icon="check"
          color="light"
          className={classNames(
            'color-picker__icon',
            value === color.key && 'color-picker__icon--active'
          )}
        />
        <span className="color-picker__name">{colorName}</span>
      </Radio>
    );
  }
}
