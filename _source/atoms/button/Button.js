import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

import Icon from '../icon';
import Skeleton from '../skeleton';

export default class Button extends Component {
  static propTypes = {
    className: PropTypes.string,
    color: PropTypes.string.isRequired,
    href: PropTypes.string,
    target: PropTypes.string,
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
  }
  
  static defaultProps = {
    disabled: false
  }

  state = {
    currentIcon: this.props.icon
  }

  componentDidUpdate(prevProps) {
    if (this.props.pending === false && prevProps.pending === true) {
      this.timeoutId = window.setTimeout(() => {
        this.setState({
          currentIcon: this.props.icon
        });
      }, 250);
    } else if (this.props.pending === true && prevProps.pending === false) {
      // eslint-disable-next-line react/no-did-update-set-state
      this.setState({
        currentIcon: 'spinner'
      });
    }
  }

  componentWillUnmount() {
    window.clearTimeout(this.timeoutId);
  }

  timeoutId = null;

  render() {
    const {
      size,
      className,
      color,
      onClick,
      href,
      target,
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
    const { currentIcon } = this.state;
    let CustomTag = 'button';
    
    if (to) {
      CustomTag = Link;
    }

    if (href) {
      CustomTag = 'a';
    }

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
            className
          ) }
          onClick={ onClick }
          href={ href }
          target={ target }
          to={ to }
          tabIndex={ tabIndex }
          type={ type }
          disabled={ disabled }
          value={ value }
          id={ id }
        >
          { currentIcon && (
            <Icon
              icon={ currentIcon }
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
