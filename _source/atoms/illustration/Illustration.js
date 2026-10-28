import React, { Component } from 'react';

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

Illustration.defaultProps = {
  height: '300',
  width: '300',
  ariaHidden: true,
  loading: 'lazy'
};
