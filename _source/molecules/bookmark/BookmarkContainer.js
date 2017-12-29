import { connect } from 'react-redux';
import Component from './Bookmark';
import { actions } from '../../_state/modal';

export const mapDispatchToProps = function(dispatch) {
  return {
    openModal: (type, data) => {
      dispatch(actions.openModal(type, data));
    }
  };
};

const Container = connect(
  null,
  mapDispatchToProps
)(Component);

export default Container;
