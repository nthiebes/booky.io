import React, { PropTypes, Component } from 'react';
import { Link as RegularLink, IndexLink } from 'react-router';

/**
 * React component
 *
 * @class Link
 * @classdesc atoms/link/Link
 */
export default class Link extends Component {
  render() {
    const PROPS = this.props;
    const CLASS = 'a-link ' + PROPS.className;
    const CustomTag = PROPS.href === '/' ? IndexLink : RegularLink;

    return (
      <CustomTag className={ CLASS } to={ PROPS.href } title={ PROPS.title }>
        { PROPS.children }
      </CustomTag>
    );
  }
}

Link.propTypes = {
  'href': PropTypes.string.isRequired,
  'className': PropTypes.string,
  'children': PropTypes.element,
  'title': PropTypes.string
};

Link.defaultProps = {
  'className': '',
  'title': ''
};
