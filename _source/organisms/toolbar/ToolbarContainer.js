import { connect } from 'react-redux';
import Component from './Toolbar';
import { updateCurrentlySticky } from '../../_state/toolbar/actions';
import { openModal } from '../../_state/modal/actions';

export const mapStateToProps = (state) => ({
  currentlySticky: state.toolbar.currentlySticky,
  headerSticky: state.user.settings.stickyHeader,
  sticky: state.user.settings.stickyToolbar,
  activeDashboardName: (state.dashboards.items.find((dashboard) => dashboard.id === state.user.settings.defaultDashboardId) || {}).name,
  dashboardsStyle: state.user.settings.dashboardsStyle,
  darkMode: state.user.settings.darkMode,
  categoriesPending: state.dashboards.pending,
  hasCategories: state.categories.length > 0
});

export const mapDispatchToProps = {
  updateCurrentlySticky,
  openModal
};

const Container = connect(
  mapStateToProps,
  mapDispatchToProps
)(Component);

export default Container;
