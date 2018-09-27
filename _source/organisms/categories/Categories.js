import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { FormattedMessage, FormattedHTMLMessage, injectIntl } from 'react-intl';

import Category from '../../molecules/category';
import { ButtonSmallPrimary } from '../../atoms/button';

class Categories extends Component {
  render() {
    const { categories, openModal, dashboardsOpen, hasSidebar, maxWidth, intl, dashboard } = this.props;

    return (
      <div className={ classNames(
        'categories',
        hasSidebar && 'categories--sidebar',
        hasSidebar && dashboardsOpen && 'categories--shifted',
        maxWidth && 'categories--max-width'
      ) }>
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
        { categories.length ? (
          <ButtonSmallPrimary
            icon="add"
            className="categories__button categories__button--bottom"
            onClick={ () => { openModal('AddCategory'); } }
          >
            <FormattedHTMLMessage id="category.add" />
          </ButtonSmallPrimary>
        ) : (
          <section className="categories__empty">
            <img
              src="_assets/empty.svg"
              alt={ intl.formatMessage({ id: 'category.emptyImage' }) }
              width="150"
              height="150"
              className="categories__empty-image"
            />
            <i><FormattedMessage id="category.empty" values={ { collection: <b>{ dashboard && dashboard.name }</b> } } /></i>
          </section>
        ) }
      </div>
    );
  }
}

Categories.propTypes = {
  categories: PropTypes.array.isRequired,
  openModal: PropTypes.func.isRequired,
  dashboardsOpen: PropTypes.bool.isRequired,
  hasSidebar: PropTypes.bool.isRequired,
  maxWidth: PropTypes.bool.isRequired,
  intl: PropTypes.object.isRequired,
  dashboard: PropTypes.object
};

export default injectIntl(Categories);
