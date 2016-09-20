import React from 'react';

import Icon from '../icon/Icon.jsx';

export default class Link extends React.Component {
    constructor() {
        super();
    }

    render() {
        const PROPS = this.props;
        const CLASS = 'a-link ' + PROPS.className;
        const ICON = PROPS.icon ? <Icon icon={ PROPS.icon } className="a-icon--light" /> : '';
        const NAME = PROPS.name ? PROPS.name : '';

        return (
            <a className={ CLASS } href={ PROPS.href } title={ PROPS.title }>
                { ICON }{ NAME }
            </a>
        );
    }
}