import { connect } from 'react-redux';

import Component from './DashboardsTabs';
import { openModal } from '../../../_state/modal/actions';
import { changeDashboard } from '../../../_state/dashboards/actions';

export const mapStateToProps = (state) => ({
  dashboards: state.dashboards.items || [],
  activeId: state.user.settings.defaultDashboardId,
  darkMode: state.user.settings.darkMode,
  closeEditMode: state.user.settings.closeEditMode
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
