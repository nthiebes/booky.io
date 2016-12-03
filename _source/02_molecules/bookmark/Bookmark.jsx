import React, { PropTypes, Component } from 'react';

import Icon from '../../01_atoms/icon/Icon.jsx';

/**
 * React component
 *
 * @class Bookmark
 * @classdesc 02_molecules/bookmark/Bookmark
 * 
 * @requires 01_atoms/icon/Icon
 *
 * @prop {string} title Title of the bookmark
 * @prop {string} url   Url of the bookmark
 */
export default class Bookmark extends Component {
    render() {
        const PROPS = this.props;

        return (
            <li className="m-bookmark">
                <a className="m-bookmark__link" href={ PROPS.url } target={ PROPS.target }>{ PROPS.name }</a>
                <Icon className="m-bookmark__icon m-bookmark__icon--edit-mode a-icon--dark" icon="edit" title="Edit bookmark" />
                <Icon className="m-bookmark__icon m-bookmark__icon--edit-mode a-icon--dark" icon="delete" title="Delete bookmark" />
                <Icon className="m-bookmark__icon m-bookmark__icon--edit-mode a-icon--dark m-bookmark__icon--drag" icon="drag" title="Drag bookmark" />
            </li>
        );
    }
}

Bookmark.propTypes = {
    'name': PropTypes.string.isRequired,
    'url': PropTypes.string.isRequired,
    'target': PropTypes.string
};

Bookmark.defaultProps = {
    'target': '_blank'
};
