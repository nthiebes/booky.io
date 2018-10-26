import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export default class Paragraph extends Component {
  render() {
    const { children, className, first, darkMode } = this.props;

    return (
      <p className={ classNames(
        'paragraph',
        first && 'paragraph--first',
        darkMode && 'paragraph--dark-mode',
        className && className
      ) }>
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
  darkMode: PropTypes.bool
};
