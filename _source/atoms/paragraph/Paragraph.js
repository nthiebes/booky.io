import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export default class Paragraph extends Component {
  render() {
    const { children, className, first } = this.props;

    return (
      <p className={ classNames('paragraph', className && className, first && 'paragraph--first') }>
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
  first: PropTypes.bool
};
