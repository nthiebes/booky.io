import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Skeleton from '../skeleton';

export default class Icon extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  handleClick(event) {
    const { stopPropagation, onClick } = this.props;

    if (stopPropagation) {
      event.stopPropagation();
    }

    if (onClick) {
      onClick();
    }
  }

  handleKeyDown(event) {
    if (event.key === 'Enter') {
      this.handleClick(event);
    }
  }

  render() {
    const {
      icon,
      className,
      label,
      color,
      dragHandleProps,
      tabIndex,
      darkMode,
      ignoreDarkMode,
      size,
      isButton,
      useSkeleton
    } = this.props;
    const link = '_assets/symbol-defs.svg#icon-' + icon;
    const additionalProps = {};
    let CustomTag = 'button';
    
    if (isButton) {
      additionalProps['aria-label'] = label;
    } else {
      CustomTag = 'span';
      additionalProps['aria-hidden'] = true;
    }

    return (
      useSkeleton ? (
        <Skeleton className={ classNames('icon--skeleton', className) } />
      ) : (
        <CustomTag
          className={ classNames(
            'icon',
            `icon--size-${size}`,
            darkMode && !ignoreDarkMode ? 'icon--light' : `icon--${color}`,
            darkMode && !ignoreDarkMode && 'icon--dark-mode',
            className && className
          ) }
          title={ label }
          onClick={ this.handleClick }
          onKeyDown={ this.handleKeyDown }
          tabIndex={ tabIndex }
          { ...additionalProps }
          { ...dragHandleProps }
        >
          <svg
            focusable="false"
            className={ classNames(
              'icon__svg',
              `icon__svg--size-${size}`,
              icon === 'spinner' && 'icon__svg--spinner'
            ) }>
            <use xlinkHref={ link } />
          </svg>
        </CustomTag>
      )
    );
  }
}

Icon.propTypes = {
  className: PropTypes.string,
  icon: PropTypes.string.isRequired,
  label: PropTypes.string,
  onClick: PropTypes.func,
  stopPropagation: PropTypes.bool,
  color: PropTypes.string,
  dragHandleProps: PropTypes.object,
  tabIndex: PropTypes.string,
  darkMode: PropTypes.bool,
  ignoreDarkMode: PropTypes.bool,
  size: PropTypes.string,
  isButton: PropTypes.bool,
  useSkeleton: PropTypes.bool
};

Icon.defaultProps = {
  color: 'medium',
  size: 'small'
};
