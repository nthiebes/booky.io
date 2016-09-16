import React from 'react';

import './link.scss';

export default class Link extends React.Component {
    constructor() {
        super();
    }

    render() {
        const PROPS = this.props;

        return (
            <a className="a-link" onClick={ PROPS.onClick }>
                { PROPS.text }
            </a>
        );
    }
}