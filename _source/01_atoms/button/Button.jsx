import React from 'react';

export default class Button extends React.Component {
    constructor() {
        super();
    }

    render() {
        const PROPS = this.props;

        return (
            <button className="a-button" onClick={ PROPS.onClick }>
                { PROPS.text }
            </button>
        );
    }
}