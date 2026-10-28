import React, { Component } from 'react';
import { Link as RegularLink, NavLink } from 'react-router-dom';
import classNames from 'classnames';

export default class Link extends Component {
  static defaultProps = {
    color: 'primary'
  };

  handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      this.props.onClick && this.props.onClick(event);
    }
  };

  render() {
    const {
      color,
      children,
      className,
      darkMode,
      to,
      href,
      title,
      onClick,
      target,
      tabIndex,
      isNavLink,
      activeClassName,
      noUnderline,
      role,
      hasBadge,
      ariaLabel
    } = this.props;
    const LinkComponent = isNavLink ? NavLink : RegularLink;
    const CustomTag = href ? 'a' : LinkComponent;
    const navLinkProps = {};

    if (isNavLink) {
      navLinkProps.activeClassName = activeClassName;
    }

    return (
      <CustomTag
        href={href}
        to={to}
        title={title}
        onClick={onClick}
        target={target}
        rel={target === '_blank' ? 'noopener noreferrer' : null}
        tabIndex={tabIndex}
        onKeyDown={this.handleKeyDown}
        role={role}
        aria-label={ariaLabel}
        className={classNames(
          'link',
          color && `link--${color}`,
          darkMode && 'link--dark-mode',
          noUnderline && 'link--noUnderline',
          hasBadge && 'link--badge',
          className
        )}
        {...navLinkProps}
      >
        {children}
      </CustomTag>
    );
  }
}

Link.defaultProps = {
  color: 'primary'
};
