import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Illustration extends Component {
  render() {
    const {
      className,
      height,
      width,
      name,
      alt,
      ariaHidden,
      darkMode,
      loading
    } = this.props;
    const fileName = darkMode ? `${name}_dark` : name;

    return (
      <img
        width={width}
        height={height}
        alt={alt}
        className={className}
        src={`../../_assets/illustrations/${fileName}.svg`}
        aria-hidden={ariaHidden}
        loading={loading}
      />
    );
  }
}

Illustration.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string.isRequired,
  height: PropTypes.string,
  width: PropTypes.string,
  alt: PropTypes.string,
  ariaHidden: PropTypes.bool,
  darkMode: PropTypes.bool,
  loading: PropTypes.string
};

Illustration.defaultProps = {
  height: '300',
  width: '300',
  ariaHidden: true,
  loading: 'lazy'
};
