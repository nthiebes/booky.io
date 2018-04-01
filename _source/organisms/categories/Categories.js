import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Category from '../../molecules/category';
import { ButtonSmallMedium } from '../../atoms/button';

export default class Categories extends Component {
  render() {
    const { categories, openModal, dashboards } = this.props;

    return (
      <div className={ classNames('categories', dashboards && 'categories--dashboards') }>
        <ButtonSmallMedium
          className="categories__button"
          onClick={ () => { openModal('AddCategory'); } }>
          { 'New ' }<b>{ 'category' }</b>
        </ButtonSmallMedium>
        {categories.map((category) =>
          <Category key={ category.id } { ...category } />
        )}
        { categories.length && <ButtonSmallMedium
          className="categories__button"
          onClick={ () => { openModal('AddCategory'); } }>
          { 'New ' }<b>{ 'category' }</b>
        </ButtonSmallMedium> }
      </div>
    );
  }
}

Categories.propTypes = {
  categories: PropTypes.array.isRequired,
  openModal: PropTypes.func.isRequired,
  dashboards: PropTypes.bool
};
