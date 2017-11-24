import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link as RegularLink, IndexLink } from 'react-router';
import classNames from 'classnames';

export default class Link extends Component {
  render() {
    const { color, className, href, title, children, onClick } = this.props;
    const isMail = href.indexOf('mailto') >= 0;
    const props = {
      className: classNames('link', className && className, color && `link--${color}`),
      [isMail ? 'href' : 'to']: href,
      title: title,
      onClick: onClick && onClick
    };
    let CustomTag = href === '/' ? IndexLink : RegularLink;

    CustomTag = isMail ? 'a' : CustomTag;

    return (
      <CustomTag { ...props }>
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
