import React from 'react';

import Category from '../../02_molecules/category/Category.jsx';

/**
 * A wrapper for all categories
 * @class 03_organisms/categories/Categories
 */
export default class Categories extends React.Component {
    constructor() {
        super();
    }

    render() {
        const PROPS = this.props;
        const CATEGORIES = PROPS.categories;

        return (
            <main className="o-categories">
                {CATEGORIES.map(category =>
                    <Category key={category.id} {...category} />
                )}
            </main>
        );
    }
}