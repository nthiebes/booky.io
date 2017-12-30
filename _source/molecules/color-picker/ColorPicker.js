import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Icon from '../../atoms/icon';

export default class ColorPicker extends Component {
  constructor(props) {
    super(props);
    
    this.getColor = this.getColor.bind(this);
    this.onChange = this.onChange.bind(this);
    this.colors = [];
  }

  onChange(key) {
    this.props.onChange(key);
  }

  getColor(color) {
    const activeClass = this.props.value === color.key ? 'color-picker__color--active' : '';
    const className = `color-picker__color color-picker__color--${color.key} ${activeClass}`;

    /* eslint-disable react/jsx-no-bind */
    return (
      <span key={ color.key } className={ className } onClick={ this.onChange.bind(this, color.key) }>
        { this.props.value === color.key && <Icon icon="check" color="dark" className="color-picker__icon" /> }
      </span>
    );
    
    /* eslint-enable react/jsx-no-bind */
  }

  getColors() {
    const count = 8,
      colors = [];
    let index = 0;

    for (index; index <= count; index++) {
      colors.push({'key': index});
    }
    return colors;
  }

  render() {
    const { className } = this.props;
    const colors = this.getColors().map(this.getColor);

    return (
      <div className={ `color-picker ${className}` }>
        { colors }
      </div>
    );
  }
}

ColorPicker.propTypes = {
  value: PropTypes.number,
  className: PropTypes.string,
  onChange: PropTypes.func.isRequired
};

ColorPicker.defaultProps = {
  className: '',
  value: 0
};
