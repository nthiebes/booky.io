import React, { PropTypes, Component } from 'react';

import Category from '../../02_molecules/category/Category.jsx';

/**
 * React component
 *
 * @class Categories
 * @classdesc 03_organisms/categories/Categories
 * 
 * @requires 02_molecules/category/Category
 *
 * @prop {array} categories A list of categories
 */
export default class Categories extends Component {
    render() {
        const PROPS = this.props;
        const CATEGORIES = PROPS.categories;
        const CLASS = 'o-categories' + (PROPS.editMode ? ' o-categories--edit-mode' : '');

        return (
            <main className={ CLASS }>
                {CATEGORIES.map((category) =>
                    <Category key={ category.id } { ...category } />
                )}
            </main>
        );
    }
}

Categories.propTypes = {
    'categories': PropTypes.array.isRequired,
    'editMode': PropTypes.bool.isRequired
};
