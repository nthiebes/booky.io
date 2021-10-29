import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link as RegularLink, NavLink } from 'react-router-dom';
import classNames from 'classnames';

export default class Link extends Component {
  static propTypes = {
    href: PropTypes.string,
    to: PropTypes.string,
    className: PropTypes.string,
    children: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.element,
      PropTypes.array
    ]).isRequired,
    title: PropTypes.string,
    color: PropTypes.string,
    onClick: PropTypes.func,
    target: PropTypes.string,
    darkMode: PropTypes.bool,
    tabIndex: PropTypes.string,
    isNavLink: PropTypes.bool,
    activeClassName: PropTypes.string,
    noUnderline: PropTypes.bool,
    role: PropTypes.string,
    hasBadge: PropTypes.bool,
    ariaLabel: PropTypes.string
  };

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
        ariaLabel={ariaLabel}
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
