import React, { Component } from 'react';
import classNames from 'classnames';

export default class Headline extends Component {
  render() {
    const {
      className,
      children,
      type,
      onClick,
      noMargin,
      id,
      display,
      color,
      darkMode,
      centered,
      title,
      style,
      onMouseEnter,
      ignoreDarkMode
    } = this.props;
    const CustomTag = `h${type}`;

    return (
      <CustomTag
        className={classNames(
          style ? `headline headline--${style}` : `headline headline--h${type}`,
          display && 'headline--display',
          noMargin && 'headline--no-margin',
          color && `headline--color-${color}`,
          darkMode && !ignoreDarkMode && 'headline--dark-mode',
          centered && 'headline--centered',
          id && 'headline--with-link',
          className
        )}
        onClick={onClick}
        onMouseEnter={onMouseEnter}
        id={id}
        title={title}
        ref={(element) => {
          const { hash } = window.location;

          if (hash !== '' && element) {
            const hashId = hash.replace('#', '');

            if (element.id === hashId) {
              element.scrollIntoView();
            }
          }
        }}
      >
        {children}
        {id && (
          <a href={`#${id}`} aria-hidden="true" className="headline__hash">
            {'#'}
          </a>
        )}
      </CustomTag>
    );
  }
}
