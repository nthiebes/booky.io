import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Illustration extends Component {
  render() {
    const { className, height, width, name, alt, ariaHidden } = this.props;

    return (
      <img
        width={ width }
        height={ height }
        alt={ alt }
        className={ className }
        src={ `../../_assets/illustrations/${name}.svg` }
        aria-hidden={ ariaHidden }
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
  ariaHidden: PropTypes.bool
};

Illustration.defaultProps = {
  height: '200',
  width: '200',
  ariaHidden: true
};
