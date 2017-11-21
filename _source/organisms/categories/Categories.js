import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Category from '../../molecules/category';

export default class Categories extends Component {
  render() {
    const { categories } = this.props;
    // const EDIT_MODE_CLASS = PROPS.editMode ? ' o-categories--edit-mode' : '';
    // const MAX_WIDTH_CLASS = PROPS.maxWidth ? ' o-categories--max-width' : '';
    // const SIDEBAR_CLASS = PROPS.dashboardsPosition ? ' o-categories--sidebar' : '';

    return (
      <div className="categories">
        {categories.map((category) =>
          <Category key={ category.id } { ...category } />
        )}
      </div>
    );
  }
}

Categories.propTypes = {
  categories: PropTypes.array.isRequired
  // 'editMode': PropTypes.bool.isRequired,
  // 'maxWidth': PropTypes.bool.isRequired,
  // 'dashboardsPosition': PropTypes.number.isRequired
};
