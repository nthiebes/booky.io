import React from 'react';

import Categories from '../../03_organisms/categories/Categories.jsx';
import './booky.scss';

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
