import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Category from '../../molecules/category';

export default class Categories extends Component {
  render() {
    const { categories } = this.props;

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
};
