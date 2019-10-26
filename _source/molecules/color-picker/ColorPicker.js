import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Color from './Color';

export default class ColorPicker extends Component {
  constructor(props) {
    super(props);
    
    this.onChange = this.onChange.bind(this);
    this.getColors = this.getColors.bind(this);
    this.colors = [];
  }

  onChange(value) {
    this.props.onChange(`color${value}`);
  }

  getColors() {
    const { isLegacy } = this.props;
    const count = 8;
    let colors = [];
    let index = 0;

    if (isLegacy) {
      colors = [
        { key: '1' },
        { key: '2' },
        { key: '3' },
        { key: '4' },
        { key: '8' },
        { key: '7' },
        { key: '9' },
        { key: '5' },
        { key: '6' }
      ];
    } else {
      for (index; index <= count; index++) {
        colors.push({ key: index.toString() });
      }
    }

    return colors;
  }

  render() {
    const { className, value, darkMode, isLegacy } = this.props;
    const colors = this.getColors().map(((color) => (
      <Color
        key={ color.key }
        color={ color }
        value={ value.replace(/color/g, '') }
        darkMode={ darkMode }
        onChange={ this.onChange }
      />
    )));

    console.log(this.getColors(), value);

    return (
      <div className={ classNames('color-picker', isLegacy && 'colar-picker__legacy', className) }>
        { colors }
      </div>
    );
  }
}

ColorPicker.propTypes = {
  value: PropTypes.string,
  className: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  darkMode: PropTypes.bool,
  isLegacy: PropTypes.bool
};

ColorPicker.defaultProps = {
  value: 'color0'
};
