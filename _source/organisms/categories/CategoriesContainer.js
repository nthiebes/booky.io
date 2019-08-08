import { connect } from 'react-redux';
import Component from './Categories';

export const mapStateToProps = (state) => ({
  categories: state.categories,
  maxWidth: state.user.settings.maxWidth,
  dashboardsOpen: state.user.settings.pinned,
  hasSidebar: state.user.settings.dashboardsStyle === 'sidebar',
  dashboard: state.dashboards.items.find((dashboard) => dashboard.id === state.dashboards.active),
  darkMode: state.user.settings.darkMode,
  pending: state.dashboards.pending
});

const Container = connect(
  mapStateToProps
)(Component);

export default Container;
