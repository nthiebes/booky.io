import { connect } from 'react-redux';
import Component from './Page';

export const mapStateToProps = function(state) {
  return {
    blurContent: state.modal.open && state.user.blurEffect
  };
};

const Container = connect(
  mapStateToProps
)(Component);

export default Container;
