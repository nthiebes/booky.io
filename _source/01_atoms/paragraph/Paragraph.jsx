import React, { PropTypes, Component } from 'react';

/**
 * React component
 *
 * @class Paragraph
 * @classdesc 01_atoms/paragraph/Paragraph
 *
 * @prop {string}  [className] Additional class name
 * @prop {element} children    Paragraph content
 */
export default class Paragraph extends Component {
    render() {
        const PROPS = this.props;
        const CLASS = 'a-paragraph ' + PROPS.className;

        return (
            <p className={ CLASS }>
                { PROPS.children }
            </p>
        );
    }
}

Paragraph.propTypes = {
    'className': PropTypes.string,
    'children': PropTypes.element.isRequired
};

Paragraph.defaultProps = {
    'className': ''
};
