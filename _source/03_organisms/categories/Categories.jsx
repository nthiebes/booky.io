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
 * @prop {array}   categories         A list of categories
 * @prop {boolean} editMode           Edit mode enabled/disabled
 * @prop {boolean} maxWidth           Max-width enabled/disabled
 * @prop {number}  dashboardsPosition 0 for sidebar, 1 for dropdown
 */
export default class Categories extends Component {
    render() {
        const PROPS = this.props;
        const CATEGORIES = PROPS.categories;
        const EDIT_MODE_CLASS = PROPS.editMode ? ' o-categories--edit-mode' : '';
        const MAX_WIDTH_CLASS = PROPS.maxWidth ? ' o-categories--max-width' : '';
        const SIDEBAR_CLASS = PROPS.dashboardsPosition ? ' o-categories--sidebar' : '';
        const CLASS = 'o-categories' + EDIT_MODE_CLASS + MAX_WIDTH_CLASS + SIDEBAR_CLASS;

        return (
            <div className={ CLASS }>
                {CATEGORIES.map((category) =>
                    <Category key={ category.id } { ...category } />
                )}
            </div>
        );
    }
}

Categories.propTypes = {
    'categories': PropTypes.array.isRequired,
    'editMode': PropTypes.bool.isRequired,
    'maxWidth': PropTypes.bool.isRequired,
    'dashboardsPosition': PropTypes.number.isRequired
};
