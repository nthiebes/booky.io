import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export default class Section extends Component {
  static propTypes = {
    className: PropTypes.string,
    color: PropTypes.string,
    fullWidth: PropTypes.bool,
    compact: PropTypes.bool,
    children: PropTypes.node,
    noMargin: PropTypes.bool,
    contentClassName: PropTypes.string,
    contentSpace: PropTypes.bool,
    wave: PropTypes.bool,
    darkMode: PropTypes.bool
  };

  render() {
    const {
      className,
      color,
      children,
      fullWidth,
      compact,
      noMargin,
      contentClassName,
      contentSpace,
      wave,
      darkMode
    } = this.props;

    return (
      <section
        className={classNames(
          'section',
          color && `section--${color}`,
          compact && 'section--compact',
          noMargin && 'section--noMargin',
          wave && 'section--wave',
          darkMode && 'section--darkMode',
          className
        )}
      >
        {wave && (
          <div
            className={classNames(
              'section__wave',
              darkMode && 'section--wave-dark'
            )}
          />
        )}
        <div
          className={classNames(
            'section__content',
            fullWidth && 'section__content--fullWidth',
            contentSpace && 'section__content--more-space',
            contentClassName
          )}
        >
          {children}
        </div>
      </section>
    );
  }
}
