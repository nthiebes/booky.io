import React from 'react';

import './booky.scss';
import Categories from '../03_organisms/categories/Categories.jsx';

export default class Booky extends React.Component {
    constructor() {
        super();
    }

    render() {
        const justATest = {
            categories: [{
                id: '0',
                name: 'Category 1'
            }, {
                id: '1',
                name: 'Category 2'
            }, {
                id: '2',
                name: 'Category 3'
            }]
        };

        return (
            <div>
                <Categories categories={ justATest.categories } />
            </div>
        );
    }
}
