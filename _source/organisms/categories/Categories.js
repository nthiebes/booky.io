import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { FormattedMessage, FormattedHTMLMessage } from 'react-intl';

import Category from '../../molecules/category';
import Empty from '../../molecules/empty';
import { ButtonSmallPrimary } from '../../atoms/button';
import Icon from '../../atoms/icon';

class Categories extends PureComponent {
  static propTypes = {
    categories: PropTypes.array.isRequired,
    dashboardsOpen: PropTypes.bool.isRequired,
    hasSidebar: PropTypes.bool.isRequired,
    maxWidth: PropTypes.bool.isRequired,
    dashboardName: PropTypes.string,
    className: PropTypes.string,
    pending: PropTypes.bool,
    openModal: PropTypes.func.isRequired
  }

  onAddClick = () => {
    this.props.openModal('AddCategory');
  }

  render() {
    const { categories, dashboardsOpen, hasSidebar, maxWidth, dashboardName, className, pending } = this.props;

    return (
      <ul className={ classNames(
        'categories',
        hasSidebar && 'categories--sidebar',
        hasSidebar && dashboardsOpen && 'categories--shifted',
        !pending && categories.length && 'categories--grid',
        maxWidth && 'categories--max-width',
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
                <Empty illustration="write-paper-ink">
                  <FormattedMessage id="category.empty" values={ { collection: <b>{ dashboardName }</b> } } />
                </Empty>
                <ButtonSmallPrimary
                  icon="add"
                  className="categories__button"
                  onClick={ this.onAddClick }
                >
                  <FormattedHTMLMessage id="category.add" />
                </ButtonSmallPrimary>
              </Fragment>
            ) }
          </Fragment>
        ) }
      </ul>
    );
  }
}

export default Categories;
