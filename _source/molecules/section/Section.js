import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export default class Section extends Component {
  render() {
    const {
      className,
      color,
      children,
      fullWidth,
      compact,
      noPadding,
      noMargin,
      contentClassName
    } = this.props;

    return (
      <section
        className={classNames(
          'section',
          color && `section--${color}`,
          fullWidth && 'section--full-width',
          compact && 'section--compact',
          noMargin && 'section--noMargin',
          className
        )}
      >
        <div
          className={classNames(
            'section__content',
            noPadding && 'section__content--noPadding',
            contentClassName
          )}
        >
          {children}
        </div>
      </section>
    );
  }
}

Section.propTypes = {
  className: PropTypes.string,
  color: PropTypes.string,
  fullWidth: PropTypes.bool,
  compact: PropTypes.bool,
  noPadding: PropTypes.bool,
  children: PropTypes.node,
  noMargin: PropTypes.bool,
  contentClassName: PropTypes.string
};
