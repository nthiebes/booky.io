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

  onChange(key) {
    this.props.onChange(key);
  }

  getColors() {
    const count = 8,
      colors = [];
    let index = 0;

    for (index; index <= count; index++) {
      colors.push({'key': index.toString()});
    }
    return colors;
  }

  render() {
    const { className, value, darkMode} = this.props;
    const colors = this.getColors().map(((color, index) => (
      <Color key={ index } color={ color } value={ value } darkMode={ darkMode } onChange={ this.onChange } />
    )));

    return (
      <div className={ classNames('color-picker', className && className) }>
        { colors }
      </div>
    );
  }
}

ColorPicker.propTypes = {
  value: PropTypes.string,
  className: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  darkMode: PropTypes.bool
};

ColorPicker.defaultProps = {
  value: '0'
};
