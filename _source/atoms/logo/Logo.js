import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './Logo.scss';

export default class Logo extends Component {
  render() {
    const { className, src, alt, height, width, colorInverted } = this.props;
    
    return (
      <img src={ src } alt={ alt } height={ height } width={ width } className={ classNames(colorInverted && 'logo--inverted', className && className )} />
    )
  }
}

Logo.propTypes = {
  className: PropTypes.string,
  src: PropTypes.string,
  alt: PropTypes.string,
  colorInverted: PropTypes.boolean,
  height: PropTypes.string,
  width: PropTypes.string 
}

Logo.defaultProps = {
  src: '../../_assets/logo-primary.png',
  alt: 'Logo',
  height: '36',
  colorInverted: false,
}