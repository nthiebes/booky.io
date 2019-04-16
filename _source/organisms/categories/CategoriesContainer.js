import { connect } from 'react-redux';
import Component from './Categories';
import { actions } from '../../_state/modal';

export const mapStateToProps = function(state) {
  return {
    categories: state.categories,
    maxWidth: state.user.settings.maxWidth,
    dashboardsOpen: state.user.settings.pinned,
    hasSidebar: state.user.settings.dashboardsStyle === 'sidebar',
    dashboard: state.dashboards.items.find((dashboard) => dashboard.id === state.dashboards.active),
    darkMode: state.user.settings.darkMode
  };
};

export const mapDispatchToProps = function(dispatch) {
  return {
    openModal: (modal) => {
      dispatch(actions.openModal(modal));
    }
  };
};

const Container = connect(
  mapStateToProps,
  mapDispatchToProps
)(Component);

export default Container;
