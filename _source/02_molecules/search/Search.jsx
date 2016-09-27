import React from 'react';

import Icon from '../../01_atoms/icon/Icon.jsx';
import Input from '../../01_atoms/input/Input.jsx';

export default class Search extends React.Component {
    constructor() {
        super();
    }

    render() {
        const PROPS = this.props;

        return (
            <div className="m-search">
                <Input placeholder="Search booky..." />
                <Icon icon="search" className="a-icon--dark" />
            </div>
        );
    }
}