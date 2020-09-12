import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export default class Paragraph extends Component {
  render() {
    const { children, className, first, darkMode, noPadding, role } = this.props;

    return (
      <p
        className={ classNames(
          'paragraph',
          first && 'paragraph--first',
          darkMode && 'paragraph--dark-mode',
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

Paragraph.propTypes = {
  className: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
    PropTypes.array
  ]).isRequired,
  first: PropTypes.bool,
  darkMode: PropTypes.bool,
  noPadding: PropTypes.bool,
  role: PropTypes.string
};
