import React, { Component } from 'react';
import classNames from 'classnames';

export default class Section extends Component {
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
