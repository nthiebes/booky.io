import React, { Component } from 'react';
import classNames from 'classnames';

export default class Label extends Component {
  render() {
    const { children, htmlFor, className, darkMode, first } = this.props;

    return (
      <label
        className={classNames(
          'label',
          darkMode && 'label--dark-mode',
          first && 'label--first',
          className
        )}
        htmlFor={htmlFor}
      >
        {children}
      </label>
    );
  }
}
