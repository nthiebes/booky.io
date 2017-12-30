import { connect } from 'react-redux';
import Component from './Menu';
import { actions as headerActions } from '../../_state/header';
import { actions as modalActions } from '../../_state/modal';

export const mapStateToProps = function(state) {
  return {
    dashboards: state.dashboards
  };
};

export const mapDispatchToProps = function(dispatch) {
  return {
    closeMenu: () => {
      dispatch(headerActions.closeMenu());
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
