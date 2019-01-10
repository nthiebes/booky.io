import { connect } from 'react-redux';
import Component from './Category';
import { actions } from '../../_state/modal';

export const mapStateToProps = (state) => ({
  darkMode: state.user.darkMode
});

export const mapDispatchToProps = (dispatch) => ({
  openModal: (modal, data) => {
    dispatch(actions.openModal(modal, data));
  }
});

const Container = connect(
  mapStateToProps,
  mapDispatchToProps
)(Component);

export default Container;
