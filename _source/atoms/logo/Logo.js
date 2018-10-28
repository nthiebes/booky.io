import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export default class Logo extends Component {
  render() {
    const { className, src, alt, height, width } = this.props;
    
    return (
        <img src={ src } alt={ alt } height={ height } width={ width } className={ className } />
      )
  }
}

Logo.propTypes = {
  className: PropTypes.string,
  src: PropTypes.string,
  alt: PropTypes.string,
  height: PropTypes.string,
  width: PropTypes.string 
}

Logo.defaultProps = {
  src: '../../_assets/logo-primary.png',
  alt: 'Logo',
  height: '36'
}