import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const colors = {
  light: '../../_assets/logo_l.svg',
  dark: '../../_assets/logo_d.svg',
  normal: '../../_assets/logo.svg'
};

export default class Logo extends Component {
  render() {
    const { className, alt, height, width, color, colorInverted } = this.props;
    const src = colors[color];
    
    return (
      <img 
        src={ src } 
        alt={ alt } 
        height={ height } 
        width={ width } 
        className={ classNames(colorInverted && 'logo--inverted', className) } 
      />
    );
  }
}

Logo.propTypes = {
  className: PropTypes.string,
  src: PropTypes.string,
  alt: PropTypes.string,
  colorInverted: PropTypes.bool,
  height: PropTypes.string,
  width: PropTypes.string,
  color: PropTypes.string
};

Logo.defaultProps = {
  alt: '',
  height: '36',
  color: 'normal'
};
