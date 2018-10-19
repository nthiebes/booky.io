import { connect } from 'react-redux';
import Component from './Bookmark';
import { actions } from '../../_state/modal';

export const mapStateToProps = (state) => ({
  newtab: state.user.newtab,
  darkMode: state.user.darkMode
});

export const mapDispatchToProps = (dispatch) => ({
  openModal: (type, data) => {
    dispatch(actions.openModal(type, data));
  }
});

const Container = connect(
  mapStateToProps,
  mapDispatchToProps
)(Component);

export default Container;
