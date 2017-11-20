import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Category from '../../molecules/category';

/**
 * React component
 *
 * @class Categories
 * @classdesc organisms/categories/Categories
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
