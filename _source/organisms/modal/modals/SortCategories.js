import React, { Component } from 'react';
import { injectIntl } from 'react-intl';

import Base from '../Base';
import CategoriesSorting from '../../categories-sorting';

class SortCategories extends Component {
  render() {
    const { intl, pending, dashboardName, dashboardId, ...props } = this.props;

    return (
      <Base
        {...props}
        noCancel
        pending={pending}
        headline={intl.formatMessage({ id: 'category.sort' })}
      >
        <CategoriesSorting
          dashboardId={dashboardId}
          dashboardName={dashboardName}
          noTitle
        />
      </Base>
    );
  }
}

export default injectIntl(SortCategories);
