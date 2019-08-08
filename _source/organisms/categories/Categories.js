import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { FormattedMessage } from 'react-intl';

import Category from '../../molecules/category';
import Empty from '../../molecules/empty';
import Icon from '../../atoms/icon';

class Categories extends Component {
  render() {
    const { categories, dashboardsOpen, hasSidebar, maxWidth, dashboard, className, pending } = this.props;

    return (
      <ul className={ classNames(
        'categories',
        hasSidebar && 'categories--sidebar',
        hasSidebar && dashboardsOpen && 'categories--shifted',
        maxWidth && 'categories--max-width',
        className && className
      ) }>
        { pending ? (
          <Icon icon="spinner" className="categories__spinner" />
        ) : (
          <Fragment>
            { categories.map((category) =>
              <Category key={ category.id } { ...category } />
            ) }
            { !categories.length && (
              <Empty illustration="write-paper-ink">
                <FormattedMessage id="category.empty" values={ { collection: <b>{ dashboard && dashboard.name }</b> } } />
              </Empty>
            ) }
          </Fragment>
        ) }
      </ul>
    );
  }
}

Categories.propTypes = {
  categories: PropTypes.array.isRequired,
  dashboardsOpen: PropTypes.bool.isRequired,
  hasSidebar: PropTypes.bool.isRequired,
  maxWidth: PropTypes.bool.isRequired,
  dashboard: PropTypes.object,
  className: PropTypes.string,
  pending: PropTypes.bool
};

export default Categories;
