import React from 'react';

/**
 * @class 02_molecules/bookmark/Bookmark
 */
export default class Bookmark extends React.Component {
    constructor() {
        super();
    }

    render() {
        const PROPS = this.props;

        return (
            <li className="m-bookmark">
                { PROPS.title }
            </li>
        );
    }
}