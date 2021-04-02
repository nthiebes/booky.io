import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export default class Label extends Component {
  static propTypes = {
    children: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.node,
      PropTypes.array
    ]).isRequired,
    htmlFor: PropTypes.string,
    className: PropTypes.string,
    darkMode: PropTypes.bool,
    first: PropTypes.bool
  };

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
