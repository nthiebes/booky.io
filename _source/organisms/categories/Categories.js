import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { FormattedMessage } from 'react-intl';

import Category from '../../molecules/category';
import Empty from '../../molecules/empty';
import { ButtonSmallPrimary } from '../../atoms/button';
import Icon from '../../atoms/icon';

class Categories extends PureComponent {
  static propTypes = {
    categories: PropTypes.array.isRequired,
    dashboardsOpen: PropTypes.bool.isRequired,
    hasSidebar: PropTypes.bool.isRequired,
    dashboardName: PropTypes.string,
    className: PropTypes.string,
    pending: PropTypes.bool,
    openModal: PropTypes.func.isRequired,
    categoriesLayout: PropTypes.string.isRequired
  }

  onAddClick = () => {
    this.props.openModal('AddCategory');
  }

  render() {
    const {
      categories,
      dashboardsOpen,
      hasSidebar,
      dashboardName,
      className,
      pending,
      categoriesLayout
    } = this.props;
    const Element = pending || !categories.length ? 'section' : 'ul';

    return (
      <Element className={ classNames(
        'categories',
        hasSidebar && 'categories--sidebar',
        hasSidebar && dashboardsOpen && 'categories--shifted',
        !pending && categories.length && categoriesLayout === 'grid' && 'categories--grid',
        !pending && categories.length && categoriesLayout === 'column' && 'categories--column',
        className
      ) }>
        { pending ? (
          <Icon icon="spinner" className="categories__spinner" />
        ) : (
          <Fragment>
            { categories.map((category) =>
              <Category key={ category.id } { ...category } />
            ) }
            { !categories.length && (
              <Fragment>
                <Empty illustration="empty_opt">
                  <FormattedMessage id="category.empty" values={ { collection: <b>{ dashboardName }</b> } } />
                </Empty>
                <ButtonSmallPrimary
                  icon="add-category"
                  className="categories__button"
                  onClick={ this.onAddClick }
                >
                  <FormattedMessage id="category.add" values={ { b: (msg) => <b>{msg}</b> } } />
                </ButtonSmallPrimary>
              </Fragment>
            ) }
          </Fragment>
        ) }
      </Element>
    );
  }
}

export default Categories;
