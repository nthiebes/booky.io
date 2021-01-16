import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { injectIntl } from 'react-intl';

import Base from '../Base';
import CategoriesSorting from '../../categories-sorting';

class SortCategories extends Component {
  static propTypes = {
    onClose: PropTypes.func.isRequired,
    onSave: PropTypes.func.isRequired,
    data: PropTypes.object.isRequired,
    intl: PropTypes.object.isRequired,
    pending: PropTypes.bool,
    darkMode: PropTypes.bool,
    dashboardName: PropTypes.string,
    dashboardId: PropTypes.number
  }

  render() {
    const { intl, pending, dashboardName, dashboardId, ...props } = this.props;

    return (
      <Base { ...props } noCancel pending={ pending } headline={ intl.formatMessage({ id: 'category.sort' }) }>
        <CategoriesSorting dashboardId={ dashboardId } dashboardName={ dashboardName } noTitle />
      </Base>
    );
  }
}

export default injectIntl(SortCategories);
