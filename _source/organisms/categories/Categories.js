import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Category from '../../molecules/category';
import { ButtonSmallMedium } from '../../atoms/button';

export default class Categories extends Component {
  render() {
    const { categories, openModal } = this.props;

    return (
      <div className="categories">
        <ButtonSmallMedium
          className="categories__button"
          onClick={ () => { openModal('AddCategory'); } }>
          { 'Add ' }<b>{ 'category' }</b>
        </ButtonSmallMedium>
        {categories.map((category) =>
          <Category key={ category.id } { ...category } />
        )}
        { categories.length && <ButtonSmallMedium
          className="categories__button"
          onClick={ () => { openModal('AddCategory'); } }>
          { 'Add ' }<b>{ 'category' }</b>
        </ButtonSmallMedium> }
      </div>
    );
  }
}

Categories.propTypes = {
  categories: PropTypes.array.isRequired,
  openModal: PropTypes.func.isRequired
};
