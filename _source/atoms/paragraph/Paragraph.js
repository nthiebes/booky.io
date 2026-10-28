import React, { Component } from 'react';
import classNames from 'classnames';

export default class Paragraph extends Component {
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
