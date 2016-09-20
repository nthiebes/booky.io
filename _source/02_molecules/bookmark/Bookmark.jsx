import React from 'react';

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