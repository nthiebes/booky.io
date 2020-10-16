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
    ignoreDarkMode: PropTypes.bool
  }
  
  render() {
    const { children, className, first, darkMode, noPadding, role, ignoreDarkMode } = this.props;

    return (
      <p
        className={ classNames(
          'paragraph',
          first && 'paragraph--first',
          (darkMode && !ignoreDarkMode) && 'paragraph--dark-mode',
          noPadding && 'paragraph--no-padding',
          className
        ) }
        role={ role }
      >
        { children }
      </p>
    );
  }
}
