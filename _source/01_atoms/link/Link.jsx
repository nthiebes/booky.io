import React, { PropTypes, Component } from 'react';

import Icon from '../icon/Icon.jsx';

/**
 * React component
 * @class 01_atoms/link/Link
 * 
 * @requires 01_atoms/icon/Icon
 *
 * @prop {string} [className] Additional class name
 * @prop {string} [icon]      Icon name
 * @prop {string} [text]      Link text
 * @prop {string} [title]     Title
 */
export default class Link extends Component {
    render() {
        const PROPS = this.props;
        const CLASS = 'a-link ' + PROPS.className;
        const ICON = PROPS.icon ? <Icon className="a-link__icon" icon={ PROPS.icon } /> : '';
        const TEXT = PROPS.text;

        return (
            <a className={ CLASS } href={ PROPS.href } title={ PROPS.title }>
                { ICON }{ TEXT }
            </a>
        );
    }
}

Link.propTypes = {
    'className': PropTypes.string,
    'icon': PropTypes.string,
    'text': PropTypes.string,
    'title': PropTypes.string
};

Link.defaultProps = {
    'className': '',
    'text': '',
    'title': ''
};
