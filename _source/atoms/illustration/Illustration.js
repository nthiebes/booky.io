import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export default class Illustration extends Component {
  render() {
    const { className, height, width, name, alt } = this.props;

    return (
      <img
        width={ width }
        height={ height }
        alt={ alt }
        className={ className }
        src={ `../../_assets/illustrations/${name}.svg` }
      />
    );
  }
}

Illustration.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string.isRequired,
  height: PropTypes.string,
  width: PropTypes.string
};

Illustration.defaultProps = {
  height: 'auto',
  width: 'auto'
};
