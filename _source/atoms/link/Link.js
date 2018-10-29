import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link as RegularLink, IndexLink } from 'react-router';
import classNames from 'classnames';

export default class Link extends Component {
  render() {
    const { color, children, className, darkMode, to, href, title, onClick, target } = this.props;
    const internalType = to === '/' ? IndexLink : RegularLink;
    const CustomTag = href ? 'a' : internalType;

    return (
      <CustomTag
        href={ href }
        to={ to }
        title={ title }
        onClick={ onClick }
        target={ target }
        className={ classNames(
          'link',
          color && `link--${color}`,
          darkMode && 'link--dark-mode',
          className && className
        ) }
      >
        { children }
      </CustomTag>
    );
  }
}

Link.propTypes = {
  href: PropTypes.string,
  to: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
    PropTypes.array
  ]),
  title: PropTypes.string,
  color: PropTypes.string,
  onClick: PropTypes.func,
  target: PropTypes.string,
  darkMode: PropTypes.bool
};

Link.defaultProps = {
  color: 'primary'
};
