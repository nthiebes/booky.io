import React, { Component } from 'react';
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
         
      >
        &zwnj;
      </span>
    );
  }
}
