import React from 'react';

export default class Icon extends React.Component {
    render() {
        const PROPS = this.props;
        const LINK = 'images/symbol-defs.svg#icon-' + PROPS.icon;
        const CLASS = PROPS.className ? 'a-icon ' + PROPS.className : 'a-icon';
        const LABEL = PROPS.label ? <label className="a-icon__label">{ PROPS.label }</label> : '';

        return (
            <div className={ CLASS } onClick={ PROPS.onClick ? PROPS.onClick : '' }>
                <svg className="a-icon__svg">
                    <use xlinkHref={ LINK } />
                </svg>
                { LABEL }
            </div>
        );
    }
}
