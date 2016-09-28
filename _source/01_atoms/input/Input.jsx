import React from 'react';
import { findDOMNode } from 'react-dom';

export default class Input extends React.Component {
    constructor() {
        super();
    }

    componentDidUpdate() {
        if (this.props.focus) {
            findDOMNode(this.refs.nameInput).focus(); 
        }
    }

    render() {
        const PROPS = this.props;
        const INPUT_PROPS = {
            className: 'a-input__field',
            placeholder: PROPS.placeholder
        };

        return (
            <div className="a-input">
                <input ref="nameInput" {...INPUT_PROPS} />
            </div>
        );
    }
}