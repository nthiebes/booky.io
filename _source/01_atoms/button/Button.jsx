import React from 'react';

import Icon from '../icon/Icon.jsx';

export default class Button extends React.Component {
    constructor() {
        super();
    }

    render() {
        const PROPS = this.props;
        const CLASS = 'a-button ' + PROPS.className;
        const ICON = PROPS.icon ? <Icon icon={ PROPS.icon } className="a-icon--light" /> : '';
        const TEXT = PROPS.text ? PROPS.text : '';
        const BUZZWORD = PROPS.buzzword ? PROPS.buzzword : '';

        return (
            <button className={ CLASS }>
                { ICON }{ TEXT }
                <span className="a-button__text">{ TEXT }</span>
                <span className="a-button__text a-button__text--buzzword">{ BUZZWORD }</span>
            </button>
        );
    }
}