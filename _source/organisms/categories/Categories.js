import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { FormattedHTMLMessage } from 'react-intl';

import Category from '../../molecules/category';
import { ButtonSmallPrimary } from '../../atoms/button';

export default class Categories extends Component {
  render() {
    const { categories, openModal, dashboardsOpen, hasSidebar } = this.props;

    return (
      <div className={ classNames('categories', hasSidebar && 'categories--sidebar', hasSidebar && dashboardsOpen && 'categories--shifted') }>
        <ButtonSmallPrimary
          icon="add"
          className="categories__button"
          onClick={ () => { openModal('AddCategory'); } }
        >
          <FormattedHTMLMessage id="category.add" />
        </ButtonSmallPrimary>
        {categories.map((category) =>
          <Category key={ category.id } { ...category } />
        )}
        { categories.length && (
          <ButtonSmallPrimary
            icon="add"
            className="categories__button categories__button--bottom"
            onClick={ () => { openModal('AddCategory'); } }
          >
            <FormattedHTMLMessage id="category.add" />
          </ButtonSmallPrimary>
        ) }
      </div>
    );
  }
}

Categories.propTypes = {
  categories: PropTypes.array.isRequired,
  openModal: PropTypes.func.isRequired,
  dashboardsOpen: PropTypes.bool,
  hasSidebar: PropTypes.bool
};
