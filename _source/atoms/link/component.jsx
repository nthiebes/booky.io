import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link as RegularLink, IndexLink } from 'react-router';

/**
 * React component
 *
 * @class Link
 * @classdesc atoms/link/Link
 */
export default class Link extends Component {
  render() {
    const { color, className, href, title, children } = this.props;
    const CLASS = `a-link a-link--${color} ${className}`;
    const CustomTag = href === '/' ? IndexLink : RegularLink;

    return (
      <CustomTag className={ CLASS } to={ href } title={ title }>
        { children }
      </CustomTag>
    );
  }
}

Link.propTypes = {
  'href': PropTypes.string.isRequired,
  'className': PropTypes.string,
  'children': PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
    PropTypes.array
  ]),
  'title': PropTypes.string,
  'color': PropTypes.string
};

Link.defaultProps = {
  'className': '',
  'title': '',
  'color': ''
};
