import React, { PropTypes, Component } from 'react';
import { Link as RegularLink, IndexLink } from 'react-router';

/**
 * React component
 *
 * @class Link
 * @classdesc 01_atoms/link/Link
 *
 * @prop {element} children    Child elements
 * @prop {string}  [className] Additional class name
 * @prop {string}  [title]     Title
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
    'className': PropTypes.string,
    'children': PropTypes.element,
    'title': PropTypes.string
};

Link.defaultProps = {
    'className': '',
    'title': ''
};
