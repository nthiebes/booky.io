import React from 'react';

import './bookmark.scss';
import Link from '../../01_atoms/link/Link.jsx';

export default class Bookmark extends React.Component {
    constructor() {
        super();
    }

    render() {
        const PROPS = this.props;

        return (
            <li className="m-bookmark">
                <Link { ...PROPS } />
            </li>
        );
    }
}