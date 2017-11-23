import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link as RegularLink, IndexLink } from 'react-router';
import classNames from 'classnames';

export default class Link extends Component {
  render() {
    const { color, className, href, title, children, onClick } = this.props;
    const CustomTag = href === '/' ? IndexLink : RegularLink;

    return (
      <CustomTag
        className={ classNames('link', className && className, color && `link--${color}`) }
        to={ href }
        title={ title }
        onClick={ onClick && onClick }>
        { children }
      </CustomTag>
    );
  }
}

Link.propTypes = {
  href: PropTypes.string.isRequired,
  className: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
    PropTypes.array
  ]),
  title: PropTypes.string,
  color: PropTypes.string,
  onClick: PropTypes.func
};

Link.defaultProps = {
  className: '',
  title: '',
  color: ''
};
