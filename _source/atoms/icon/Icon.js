import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Skeleton from '../skeleton';

export default class Icon extends Component {
  static propTypes = {
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
    useSkeleton: PropTypes.bool,
    pending: PropTypes.bool
  }
  
  static defaultProps = {
    color: 'medium',
    size: 'small'
  }

  handleClick = (event) => {
    const { stopPropagation, onClick } = this.props;

    if (stopPropagation) {
      event.stopPropagation();
    }

    if (onClick) {
      onClick();
    }
  }

  handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      this.handleClick(event);
    }
  }

  render() {
    const {
      className,
      label,
      color,
      dragHandleProps,
      tabIndex,
      darkMode,
      ignoreDarkMode,
      size,
      isButton,
      useSkeleton,
      pending
    } = this.props;
    const icon = pending ? 'spinner' : this.props.icon;
    const link = `/_assets/symbol-defs.svg?=${process.env.VERSION}#icon-${icon}`;
    const additionalProps = {};
    const CustomTag = isButton ? 'button' : 'span';
    
    if (isButton) {
      additionalProps['aria-label'] = label;
      additionalProps.type = 'button';
    } else {
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
            `icon--${color}`,
            !isButton && 'icon--decorative',
            darkMode && !ignoreDarkMode && 'icon--dark-mode',
            className
          ) }
          title={ label }
          onClick={ this.handleClick }
          onKeyDown={ this.handleKeyDown }
          { ...additionalProps }
          { ...dragHandleProps }
          tabIndex={ tabIndex }
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
