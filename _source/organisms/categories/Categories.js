import React, { PureComponent } from 'react';
import classNames from 'classnames';
import { FormattedMessage } from 'react-intl';

import Category from '../../molecules/category';
import Empty from '../../molecules/empty';
import { ButtonSmallPrimary } from '../../atoms/button';
import { H1 } from '../../atoms/headline';
import Icon from '../../atoms/icon';

class Categories extends PureComponent {
  onAddClick = () => {
    this.props.openModal('AddCategory');
  };

  // eslint-disable-next-line complexity
  render() {
    const {
      categories,
      dashboardsOpen,
      hasSidebar,
      dashboardName,
      className,
      pending,
      categoriesLayout,
      maxColumnCount,
      viewOnly,
      sharedDashboardName
    } = this.props;
    const Element = pending || !categories.length ? 'section' : 'ul';

    return (
      <>
        {sharedDashboardName && <H1>{sharedDashboardName}</H1>}
        <Element
          className={classNames(
            'categories',
            hasSidebar && 'categories--sidebar',
            hasSidebar && dashboardsOpen && 'categories--shifted',
            !pending &&
              categories.length &&
              categoriesLayout === 'grid' &&
              'categories--grid',
            !pending &&
              categories.length &&
              categoriesLayout === 'column' &&
              'categories--column',
            !pending &&
              categories.length &&
              maxColumnCount > 0 &&
              `categories--max-columns-${maxColumnCount}`,
            className
          )}
        >
          {pending ? (
            <Icon icon="spinner" className="categories__spinner" />
          ) : (
            <>
              {categories.map((category) => (
                <Category key={category.id} {...category} viewOnly={viewOnly} />
              ))}
              {!categories.length && (
                <>
                  <Empty illustration="empty">
                    <FormattedMessage
                      id={
                        viewOnly ? 'category.emptyViewOnly' : 'category.empty'
                      }
                      values={{
                        collection: (
                          <b>{sharedDashboardName || dashboardName}</b>
                        )
                      }}
                    />
                  </Empty>
                  {!viewOnly && (
                    <ButtonSmallPrimary
                      icon="add-category"
                      className="categories__button"
                      onClick={this.onAddClick}
                    >
                      <FormattedMessage
                        id="category.add"
                        values={{ b: (msg) => <b>{msg}</b> }}
                      />
                    </ButtonSmallPrimary>
                  )}
                </>
              )}
            </>
          )}
        </Element>
      </>
    );
  }
}

export default Categories;
