import { connect } from 'react-redux';
import Component from './component.jsx';
import { actions as sidebarActions } from '../../_state/sidebar';

export const mapStateToProps = function(state) {
  return {
    'open': state.sidebar.open,
    'notes': state.sidebar.notes,
    'autofill': state.sidebar.autofill,
    'newtab': state.sidebar.newtab,
    'stickyHeader': state.sidebar.stickyHeader,
    'stickyToolbar': state.sidebar.stickyToolbar,
    'globalColor': state.sidebar.globalColor,
    'headerColor': state.sidebar.headerColor,
    'maxWidth': state.sidebar.maxWidth,
    'dashboard': state.sidebar.dashboard
  };
};

export const mapDispatchToProps = function(dispatch) {
  return {
    'onNotesClick': () => {
      dispatch(sidebarActions.toggleNotes());
    },
    'onAutofillClick': () => {
      dispatch(sidebarActions.toggleAutofill());
    },
    'onNewtabClick': () => {
      dispatch(sidebarActions.toggleNewtab());
    },
    'onStickyHeaderClick': () => {
      dispatch(sidebarActions.toggleStickyHeader());
    },
    'onStickyToolbarClick': () => {
      dispatch(sidebarActions.toggleStickyToolbar());
    },
    'onGlobalColorChange': (key) => {
      dispatch(sidebarActions.updateGlobalColor(key));
    },
    'onHeaderColorChange': (key) => {
      dispatch(sidebarActions.updateHeaderColor(key));
    },
    'onDoneClick': () => {
      dispatch(sidebarActions.closeSidebar());
    },
    'onMaxWidthClick': () => {
      dispatch(sidebarActions.toggleMaxWidth());
    },
    'onDashboardChange': (key) => {
      dispatch(sidebarActions.updateDashboardType(key));
    }
  };
};

const Container = connect(
  mapStateToProps,
  mapDispatchToProps
)(Component);

export default Container;
