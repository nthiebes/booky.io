import { connect } from 'react-redux';
import Component from './Categories';
import { actions } from '../../_state/modal';

export const mapStateToProps = function(state) {
  return {
    categories: state.categories,
    maxWidth: state.sidebar.maxWidth,
    dashboardsOpen: state.user.pinned,
    hasSidebar: state.dashboards.sidebar
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
