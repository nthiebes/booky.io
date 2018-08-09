import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link as RegularLink, IndexLink } from 'react-router';
import classNames from 'classnames';

export default class Link extends Component {
  render() {
    const { color, children, className, ...props } = this.props;
    const internalType = this.props.to === '/' ? IndexLink : RegularLink;
    const CustomTag = this.props.href ? 'a' : internalType;

    return (
      <CustomTag { ...props } className={ classNames('link', color && `link--${color}`, className && className) }>
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
  target: PropTypes.string
};

Link.defaultProps = {
  color: 'primary'
};
