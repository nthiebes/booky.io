import React from 'react';

export default class Link extends React.Component {
    constructor() {
        super();
    }

    render() {
        const PROPS = this.props;
        const CLASS = 'a-link ' + PROPS.className;

        return (
            <a className={ CLASS } href={ PROPS.href } title={ PROPS.title }>
                { PROPS.name ? PROPS.name : '' }
            </a>
        );
    }
}