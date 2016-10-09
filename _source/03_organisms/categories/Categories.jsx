import React, { PropTypes, Component } from 'react';

import Category from '../../02_molecules/category/Category.jsx';

/**
 * React component
 * A wrapper for all categories
 * @class 03_organisms/categories/Categories
 * 
 * @requires 02_molecules/category/Category
 *
 * @prop {array} categories A list of categories
 */
export default class Categories extends Component {
    render() {
        const PROPS = this.props;
        const CATEGORIES = PROPS.categories;

        return (
            <main className="o-categories">
                {CATEGORIES.map((category) =>
                    <Category key={ category.id } { ...category } />
                )}
            </main>
        );
    }
}

Categories.propTypes = {
    'categories': PropTypes.array.isRequired
};
