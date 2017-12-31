import { connect } from 'react-redux';
import Component from './Category';
import { actions } from '../../_state/modal';

export const mapDispatchToProps = function(dispatch) {
  return {
    openModal: (modal, data) => {
      dispatch(actions.openModal(modal, data));
    }
  };
};

const Container = connect(
  null,
  mapDispatchToProps
)(Component);

export default Container;
