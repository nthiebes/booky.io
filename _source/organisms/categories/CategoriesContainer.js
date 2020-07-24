import { connect } from 'react-redux';

import { openModal } from '../../_state/modal/actions';
import Component from './Categories';

export const mapStateToProps = (state) => ({
  categories: state.categories,
  dashboardsOpen: state.user.settings.pinned,
  hasSidebar: state.user.settings.dashboardsStyle === 'sidebar',
  dashboardName: (state.dashboards.items.find((dashboard) => dashboard.id === state.dashboards.active) || {}).name,
  darkMode: state.user.settings.darkMode,
  pending: state.dashboards.pending
});

export const mapDispatchToProps = {
  openModal
};

const Container = connect(
  mapStateToProps,
  mapDispatchToProps
)(Component);

export default Container;
