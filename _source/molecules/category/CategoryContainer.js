import { connect } from 'react-redux';
import Component from './Category';
import { actions } from '../../_state/modal';

export const mapDispatchToProps = function(dispatch) {
  return {
    openModal: (type) => {
      dispatch(actions.openModal(type));
    }
  };
};

const Container = connect(
  null,
  mapDispatchToProps
)(Component);

export default Container;
