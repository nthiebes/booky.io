import React, { Component } from 'react';
import PropTypes from 'prop-types';

const colors = {
  light: '../../_assets/logo_l.svg',
  dark: '../../_assets/logo_d.svg',
  normal: '../../_assets/logo.svg'
};

export default class Logo extends Component {
  render() {
    const { className, alt, height, width, color, darkMode } = this.props;
    let src = colors[color];

    if (darkMode && color === 'dark') {
      src = colors.normal;
    }
    
    return (
      <img 
        src={ src } 
        alt={ alt } 
        height={ height } 
        width={ width } 
        className={ className } 
      />
    );
  }
}

Logo.propTypes = {
  className: PropTypes.string,
  src: PropTypes.string,
  alt: PropTypes.string,
  height: PropTypes.string,
  width: PropTypes.string,
  color: PropTypes.string,
  darkMode: PropTypes.bool
};

Logo.defaultProps = {
  alt: '',
  height: '36',
  color: 'normal'
};
