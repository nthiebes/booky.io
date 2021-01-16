import { connect } from 'react-redux';
import Component from './SortCategories';

const mapStateToProps = (state) => ({
  dashboardName: (state.dashboards.items.find((dashboard) => dashboard.id === state.user.settings.defaultDashboardId) || {}).name,
  dashboardId: state.user.settings.defaultDashboardId
});
const Container = connect(
  mapStateToProps
)(Component);

export default Container;
