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
            <svg className={ CLASS }>
                <use xlinkHref={ LINK }></use>
            </svg>
        );
    }
}