import { connect } from 'react-redux';
import Component from './Toolbar';
import { actions as toolbarActions } from '../../_state/toolbar';
import { actions as modalActions } from '../../_state/modal';

export const mapStateToProps = function(state) {
  return {
    currentlySticky: state.toolbar.currentlySticky,
    headerSticky: state.sidebar.stickyHeader,
    sticky: state.sidebar.stickyToolbar,
    dashboards: state.dashboards,
    dashboard: state.dashboards.items.find((dashboard) => dashboard.id === state.dashboards.active)
  };
};

export const mapDispatchToProps = function(dispatch) {
  return {
    onSearchClick: () => {
      dispatch(toolbarActions.toggleSearch());
    },
    onEditModeClick: () => {
      dispatch(toolbarActions.toggleEditMode());
    },
    updateCurrentlySticky: (sticky) => {
      dispatch(toolbarActions.updateCurrentlySticky(sticky));
    },
    openModal: (modal, data) => {
      dispatch(modalActions.openModal(modal, data));
    }
  };
};

const Container = connect(
  mapStateToProps,
  mapDispatchToProps
)(Component);

export default Container;
