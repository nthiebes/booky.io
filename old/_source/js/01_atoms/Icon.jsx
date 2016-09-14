import React from 'react';

export default class Icon extends React.Component {
    constructor() {
        super();
    }

    render() {
        const PROPS = this.props;
        const LINK = 'img/symbol-defs.svg#icon-' + PROPS.icon;
        const CLASS = 'a-icon ' + PROPS.className;
        const CLICK_HANDLER = PROPS.handleClick ? PROPS.handleClick.bind(this, PROPS.target) : '';

        return (
            <svg className={ CLASS } onClick={ CLICK_HANDLER }>
                <use xlinkHref={ LINK }></use>
            </svg>
        );
    }
}
