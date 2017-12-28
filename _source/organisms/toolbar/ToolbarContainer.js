import { connect } from 'react-redux';
import Component from './Toolbar';
import { actions as toolbarActions } from '../../_state/toolbar';
import { actions as dashboardsActions } from '../../_state/dashboards';
import { actions as modalActions } from '../../_state/modal';

export const mapStateToProps = function(state) {
  return {
    'currentlySticky': state.toolbar.currentlySticky,
    'editMode': state.toolbar.editMode,
    'headerSticky': state.sidebar.stickyHeader,
    'searchFocused': state.toolbar.searchFocused,
    'searchOpen': state.toolbar.searchOpen,
    'sticky': state.sidebar.stickyToolbar,
    dashboards: state.dashboards,
    dashboard: state.dashboards.items[state.dashboards.active]
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
    toggleStructureView: () => {
      dispatch(dashboardsActions.toggleStructureView());
    },
    openModal: (type) => {
      dispatch(modalActions.openModal(type));
    }
  };
};

const Container = connect(
  mapStateToProps,
  mapDispatchToProps
)(Component);

export default Container;
