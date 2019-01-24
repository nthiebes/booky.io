import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Icon from '../../atoms/icon';
import Checkbox from '../../atoms/checkbox';

export default class Color extends Component {
  constructor(props) {
    super(props);

    this.onClick = this.onClick.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  handleKeyDown(event) {
    if (event.keyCode === 32) {
      event.preventDefault();
      this.props.onChange(this.props.color.key);
    }
  }

  onClick() {
    this.props.onChange(this.props.color.key);
  }

  render() {
    const { color, value, darkMode } = this.props;
    const className = classNames(
      'color-picker__color',
      `color-picker__color--${color.key}`,
      value === color.key && 'color-picker__color--active',
      darkMode && 'color-picker__color--dark-mode'
    );

    return (
      <span className={ className } onClick={ this.onClick } onKeyDown={ this.handleKeyDown } tabIndex="0">
        <Icon
          icon="check"
          color="light"
          className={ classNames(
            'color-picker__icon',
            value === color.key && 'color-picker__icon--active') }
        />
        <Checkbox
          className="color-picker__checkbox"
          checked={ value === color.key }
          value={ value }
          name="color"
          tabIndex="-1"
        />
      </span>
    );
  }
}

Color.propTypes = {
  value: PropTypes.number.isRequired,
  color: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
  darkMode: PropTypes.bool
};
