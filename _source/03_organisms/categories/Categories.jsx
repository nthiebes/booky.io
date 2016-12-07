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
 * @prop {array}   categories A list of categories
 * @prop {boolean} editMode   Edit mode enabled/disabled
 * @prop {boolean} maxWidth   Max-width enabled/disabled
 */
export default class Categories extends Component {
    render() {
        const PROPS = this.props;
        const CATEGORIES = PROPS.categories;
        const EDIT_MODE_CLASS = PROPS.editMode ? ' o-categories--edit-mode' : '';
        const MAX_WIDTH_CLASS = PROPS.maxWidth ? ' o-categories--max-width' : '';
        const CLASS = 'o-categories' + EDIT_MODE_CLASS + MAX_WIDTH_CLASS;

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
    'editMode': PropTypes.bool.isRequired,
    'maxWidth': PropTypes.bool.isRequired
};
