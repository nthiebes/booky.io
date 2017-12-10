import { connect } from 'react-redux';
import Component from './Toolbar';
import { actions as toolbarActions } from '../../_state/toolbar';
import { actions as dashboardsActions } from '../../_state/dashboards';

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
    }
  };
};

const Container = connect(
  mapStateToProps,
  mapDispatchToProps
)(Component);

export default Container;
