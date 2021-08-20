import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

import Skeleton from '../skeleton';
import Tooltip from '../tooltip';

export default class Icon extends PureComponent {
  static propTypes = {
    className: PropTypes.string,
    icon: PropTypes.string.isRequired,
    label: PropTypes.string,
    onClick: PropTypes.func,
    stopPropagation: PropTypes.bool,
    color: PropTypes.oneOf([
      'primary',
      'dark',
      'grey',
      'medium',
      'light',
      'green',
      'orange',
      'blue',
      ''
    ]),
    dragHandleProps: PropTypes.object,
    tabIndex: PropTypes.string,
    darkMode: PropTypes.bool,
    ignoreDarkMode: PropTypes.bool,
    size: PropTypes.oneOf(['tiny', 'small', 'medium', 'large']),
    isButton: PropTypes.bool,
    useSkeleton: PropTypes.bool,
    pending: PropTypes.bool,
    to: PropTypes.string,
    tooltipDirection: PropTypes.string
  };

  static defaultProps = {
    color: 'medium',
    size: 'small',
    tooltipDirection: 'bottom'
  };

  handleClick = (event) => {
    const { stopPropagation, onClick } = this.props;

    if (stopPropagation) {
      event.stopPropagation();
    }

    if (onClick) {
      onClick();
    }
  };

  handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      this.handleClick(event);
    }
  };

  // eslint-disable-next-line max-statements
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
      pending,
      to,
      tooltipDirection
    } = this.props;
    const icon = pending ? 'spinner' : this.props.icon;
    const link = `/_assets/symbol-defs.svg?=${process.env.VERSION}#icon-${icon}`;
    const additionalProps = {};
    let CustomTag = isButton ? 'button' : 'span';

    if (to) {
      CustomTag = Link;
    }

    if (isButton) {
      additionalProps.type = 'button';
    } else if (!to) {
      additionalProps['aria-hidden'] = true;
    }

    return useSkeleton ? (
      <Skeleton
        ignoreDarkMode={ignoreDarkMode}
        className={classNames('icon--skeleton', className)}
      />
    ) : (
      <CustomTag
        className={classNames(
          'icon',
          `icon--size-${size}`,
          `icon--${color}`,
          !isButton && !to && 'icon--decorative',
          darkMode && !ignoreDarkMode && 'icon--dark-mode',
          className
        )}
        onClick={this.handleClick}
        onKeyDown={this.handleKeyDown}
        {...additionalProps}
        {...dragHandleProps}
        tabIndex={tabIndex}
        to={to}
      >
        <svg
          focusable="false"
          className={classNames(
            'icon__svg',
            `icon__svg--size-${size}`,
            icon === 'spinner' && 'icon__svg--spinner'
          )}
        >
          <use xlinkHref={link} />
        </svg>
        {label && <Tooltip direction={tooltipDirection} text={label} />}
      </CustomTag>
    );
  }
}
