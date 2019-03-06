import { connect } from 'react-redux';

import { actions } from '../../_state/modal';
import Component from './Account';

export const mapDispatchToProps = (dispatch) => ({
  openModal: (modal, data) => {
    dispatch(actions.openModal(modal, data));
  }
});

const Container = connect(
  null,
  mapDispatchToProps
)(Component);

export default Container;
