import React from 'react';

import Icon from '../icon/Icon.jsx';

export default class Link extends React.Component {
    constructor() {
        super();
    }

    render() {
        const PROPS = this.props;
        const CLASS = 'a-link ' + PROPS.className;
        const TEXT = PROPS.text ? PROPS.text : '';

        return (
            <a className={ CLASS } href={ PROPS.href } title={ PROPS.title }>
                { TEXT }
            </a>
        );
    }
}