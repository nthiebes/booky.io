import React, { Component } from 'react';
import PropTypes from 'prop-types';

const colors = {
  light: '../../_assets/logo_l.svg',
  dark: '../../_assets/logo_d.svg',
  normal: '../../_assets/logo.svg'
};

export default class Logo extends Component {
  render() {
    const { className, alt, height, width, color } = this.props;
    const src = colors[color];
    
    return (
      <img
        className={ className } 
        src={ src } 
        alt={ alt } 
        height={ height } 
        width={ width } 
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
  color: PropTypes.string
};

Logo.defaultProps = {
  alt: '',
  height: '36',
  color: 'normal'
};
