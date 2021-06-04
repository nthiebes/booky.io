import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export default class Skeleton extends Component {
  render() {
    const { className, darkMode, ignoreDarkMode } = this.props;

    return (
      <span
        className={classNames(
          'skeleton',
          darkMode && !ignoreDarkMode && 'skeleton--darkMode',
          className
        )}
        // eslint-disable-next-line react/jsx-no-literals
      >
        &zwnj;
      </span>
    );
  }
}

Skeleton.propTypes = {
  className: PropTypes.string,
  darkMode: PropTypes.bool,
  ignoreDarkMode: PropTypes.bool
};
