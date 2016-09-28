import React from 'react';
import { findDOMNode } from 'react-dom';

import Input from '../../01_atoms/input/Input.jsx';

export default class Search extends React.Component {
    constructor() {
        super();
    }

    render() {
        const PROPS = this.props;
        const CLASS = 'm-search ' + PROPS.className;

        return (
            <div className={ CLASS }>
                <Input placeholder="Search booky..." />
            </div>
        );
    }
}