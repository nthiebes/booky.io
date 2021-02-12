import { connect } from 'react-redux';

import { openModal } from '../../_state/modal/actions';
import Component from './Categories';

export const mapStateToProps = (state) => ({
  categories: state.categories,
  dashboardsOpen: state.user.settings.pinned,
  hasSidebar: state.user.settings.dashboardsStyle === 'sidebar',
  dashboardName: (
    state.dashboards.items.find(
      (dashboard) => dashboard.id === state.user.settings.defaultDashboardId
    ) || {}
  ).name,
  darkMode: state.user.settings.darkMode,
  pending: state.dashboards.pending,
  categoriesLayout: state.user.settings.categoriesLayout,
  maxColumnCount: state.user.settings.maxColumnCount
});

export const mapDispatchToProps = {
  openModal
};

const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export default Container;
