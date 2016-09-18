import React from 'react';

import CategoriesContainer from '../../03_organisms/categories/CategoriesContainer.js';
import './booky.scss';

export default class Booky extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div>
                <CategoriesContainer />
            </div>
        );
    }
}