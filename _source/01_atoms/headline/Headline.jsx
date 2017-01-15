import React, { PropTypes, Component } from 'react';

/**
 * React component
 *
 * @class Headline
 * @classdesc 01_atoms/headline/Headline
 *
 * @prop {string} [className] Additional class name
 * @prop {string} text        Headline text
 * @prop {string} type        Headline type
 */
export default class Headline extends Component {
    render() {
        const PROPS = this.props;
        const CLASS = 'a-headline ' + PROPS.className;
        const TEXT = PROPS.text;
        const CustomTag = `h${PROPS.type}`;

        return (
            <CustomTag className={ CLASS }>
                { TEXT }
            </CustomTag>
        );
    }
}

Headline.propTypes = {
    'className': PropTypes.string,
    'type': PropTypes.number.isRequired,
    'text': PropTypes.string.isRequired
};

Headline.defaultProps = {
    'className': ''
};
