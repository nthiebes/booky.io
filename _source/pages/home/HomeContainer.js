import { connect } from 'react-redux';

import Component from './Home';
import { getDashboards } from '../../_state/dashboards/actions';
import { openModal } from '../../_state/modal/actions';

export const mapStateToProps = (state) => ({
  loggedIn: state.user.loggedIn,
  blurContent: state.modal.open && state.user.settings.blurEffect,
  hasSidebar: state.user.settings.dashboardsStyle === 'sidebar'
});

export const mapDispatchToProps = {
  getDashboards,
  openModal
};

const HomeContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Component);

export default HomeContainer;
