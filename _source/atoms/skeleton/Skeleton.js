import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export default class Skeleton extends Component {
  render() {
    const { className, darkMode } = this.props;

    return (
      // eslint-disable-next-line react/jsx-no-literals
      <span className={ classNames('skeleton', darkMode && 'skeleton--darkMode', className) }>
        &zwnj;
      </span>
    );
  }
}

Skeleton.propTypes = {
  className: PropTypes.string,
  darkMode: PropTypes.bool
};
