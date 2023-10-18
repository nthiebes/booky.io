import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export default class Paragraph extends Component {
  static propTypes = {
    className: PropTypes.string,
    children: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.element,
      PropTypes.array
    ]).isRequired,
    first: PropTypes.bool,
    darkMode: PropTypes.bool,
    noPadding: PropTypes.bool,
    role: PropTypes.string,
    ignoreDarkMode: PropTypes.bool,
    size: PropTypes.string,
    color: PropTypes.string
  };

  static defaultProps = {
    size: 'normal',
    color: 'dark'
  };

  render() {
    const {
      children,
      className,
      first,
      darkMode,
      noPadding,
      role,
      ignoreDarkMode,
      size,
      color
    } = this.props;

    return (
      <p
        className={classNames(
          'paragraph',
          `paragraph--${size}`,
          `paragraph--${color}`,
          first && 'paragraph--first',
          darkMode && !ignoreDarkMode && 'paragraph--dark-mode',
          noPadding && 'paragraph--no-padding',
          className
        )}
        role={role}
      >
        {children}
      </p>
    );
  }
}
