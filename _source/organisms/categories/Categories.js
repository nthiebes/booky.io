import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { FormattedMessage, FormattedHTMLMessage, injectIntl } from 'react-intl';

import Category from '../../molecules/category';
import Empty from '../../molecules/empty';
import { ButtonSmallPrimary } from '../../atoms/button';
import Icon from '../../atoms/icon';

class Categories extends Component {
  constructor(props) {
    super(props);

    this.onAddClick = this.onAddClick.bind(this);
  }

  onAddClick() {
    this.props.openModal('AddCategory');
  }

  render() {
    const { categories, dashboardsOpen, hasSidebar, maxWidth, intl, dashboard, className, pending } = this.props;

    return (
      <div className={ classNames(
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
            <ButtonSmallPrimary
              icon="add"
              className="categories__button"
              onClick={ this.onAddClick }
            >
              <FormattedHTMLMessage id="category.add" />
            </ButtonSmallPrimary>
            { categories.map((category) =>
              <Category key={ category.id } { ...category } />
            ) }
            { !categories.length && (
              <Empty imageAlt={ intl.formatMessage({ id: 'category.emptyImage' }) } imageUrl="_assets/empty.svg">
                <FormattedMessage id="category.empty" values={ { collection: <b>{ dashboard && dashboard.name }</b> } } />
              </Empty>
            ) }
          </Fragment>
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
  dashboard: PropTypes.object,
  className: PropTypes.string,
  pending: PropTypes.bool
};

export default injectIntl(Categories);
