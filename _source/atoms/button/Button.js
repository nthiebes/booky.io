import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Icon from '../icon';
import Link from '../link';
import Skeleton from '../skeleton';

export default class Button extends Component {
  render() {
    const {
      size,
      icon,
      className,
      color,
      onClick,
      href,
      to,
      children,
      disabled,
      tabIndex,
      solid,
      type,
      contentBefore,
      pending,
      value,
      id,
      useSkeleton
    } = this.props;
    const CustomTag = href || to ? Link : 'button';

    return (
      useSkeleton ? (
        <Skeleton className={ classNames('button--skeleton', className) } />
      ) : (
        <CustomTag
          className={ classNames(
            'button',
            `button--${size}`,
            `button--${size}-${color}`,
            solid && 'button--solid',
            pending && 'button--pending',
            contentBefore && 'button--content-before',
            className && className)
          }
          onClick={ onClick }
          href={ href }
          to={ to }
          tabIndex={ tabIndex }
          type={ type }
          disabled={ disabled }
          value={ value }
          id={ id }
        >
          { icon && (
            <Icon
              icon={ pending ? 'spinner' : icon }
              color={ size === 'small' ? color : 'light' }
              className="button__icon"
              ignoreDarkMode
            />
          ) }
          <span className="button__text">{ children }</span>
        </CustomTag>
      )
    );
  }
}

Button.propTypes = {
  className: PropTypes.string,
  color: PropTypes.string.isRequired,
  href: PropTypes.string,
  to: PropTypes.string,
  onClick: PropTypes.func,
  size: PropTypes.string.isRequired,
  icon: PropTypes.string,
  disabled: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.element,
    PropTypes.string
  ]).isRequired,
  tabIndex: PropTypes.string,
  solid: PropTypes.bool,
  type: PropTypes.string,
  contentBefore: PropTypes.bool,
  pending: PropTypes.bool,
  value: PropTypes.string,
  id: PropTypes.string,
  useSkeleton: PropTypes.bool
};

Button.defaultProps = {
  disabled: false
};
