import React from 'react';

import Input from '../../01_atoms/input/Input.jsx';

/**
 * @class 02_molecules/search/Search
 */
export default class Search extends React.Component {
    constructor() {
        super();
    }

    render() {
        const PROPS = this.props;
        const CLASS = 'm-search ' + PROPS.className;

        return (
            <div className={ CLASS }>
                <Input placeholder="Search booky..." focus={ PROPS.open } />
            </div>
        );
    }
}