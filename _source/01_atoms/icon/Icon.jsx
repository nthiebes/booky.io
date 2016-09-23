import React from 'react';

export default class Icon extends React.Component {
    constructor() {
        super();
    }

    render() {
        const PROPS = this.props;
        const LINK = 'images/symbol-defs.svg#icon-' + PROPS.icon;
        const CLASS = 'a-icon ' + PROPS.className;

        return (
            <svg className={ CLASS } onClick={ PROPS.onClick ? PROPS.onClick : '' }>
                <use xlinkHref={ LINK }></use>
            </svg>
        );
    }
}