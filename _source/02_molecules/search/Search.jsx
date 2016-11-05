import React, { PropTypes, Component } from 'react';

import Input from '../../01_atoms/input/Input.jsx';

/**
 * React component
 * @class 02_molecules/search/Search
 * 
 * @requires 01_atoms/input/Input
 *
 * @prop {boolean} [open]      Search bar open and visible
 * @prop {string}  [className] Optional class name
 */
export default class Search extends Component {
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

Search.propTypes = {
    'open': PropTypes.bool,
    'className': PropTypes.string
};

Search.defaultProps = {
    'className': '',
    'open': false
};
