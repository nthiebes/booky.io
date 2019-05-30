import { connect } from 'react-redux';
import Component from './Dashboards';
import { openModal } from '../../_state/modal/actions';
import { changeDashboard } from '../../_state/dashboards/actions';
import { updateSettings } from '../../_state/user/actions';

export const mapStateToProps = (state) => ({
  dashboards: state.dashboards.items,
  activeId: state.dashboards.active,
  pinned: state.user.settings.pinned,
  currentlySticky: state.toolbar.currentlySticky,
  headerSticky: state.user.settings.stickyHeader,
  toolbarSticky: state.user.settings.stickyToolbar,
  darkMode: state.user.settings.darkMode
});

export const mapDispatchToProps = {
  openModal,
  changeDashboard,
  updateSettings
};

const Container = connect(
  mapStateToProps,
  mapDispatchToProps
)(Component);

export default Container;
