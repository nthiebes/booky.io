import React from 'react';

import Input from '../../01_atoms/input/Input.jsx';

/**
 * React component
 * @class 02_molecules/search/Search
 * 
 * @requires 02_molecules/search/Search
 * @requires 01_atoms/icon/Icon
 * @requires 01_atoms/button/Button
 *
 * @prop {boolean}  searchOpen    Search bar open and visible
 * @prop {function} onSearchClick Icon click callback
 */
export default class Search extends React.Component {
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
