import { connect } from 'react-redux';

import Component from './DashboardsList';
import { openModal } from '../../../_state/modal/actions';
import { changeDashboard } from '../../../_state/dashboards/actions';

export const mapStateToProps = (state) => ({
  dashboards: state.dashboards.items,
  activeId: state.user.settings.defaultDashboardId,
  pinned: state.user.settings.pinned,
  darkMode: state.user.settings.darkMode
});

export const mapDispatchToProps = {
  openModal,
  changeDashboard
};

const Container = connect(
  mapStateToProps,
  mapDispatchToProps
)(Component);

export default Container;
