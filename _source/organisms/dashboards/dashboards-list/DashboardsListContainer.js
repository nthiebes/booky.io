import { connect } from 'react-redux';

import Component from './DashboardsList';
import { openModal } from '../../../_state/modal/actions';
import { changeDashboard } from '../../../_state/dashboards/actions';
import { getActiveDashboardId } from '../../../_state/dashboards/selectors';

export const mapStateToProps = (state) => ({
  dashboards: state.dashboards.items || [],
  activeId: getActiveDashboardId(state),
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
