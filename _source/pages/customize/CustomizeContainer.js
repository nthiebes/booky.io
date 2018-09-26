import { connect } from 'react-redux';

import Component from './Customize';
import { updateUser } from '../../_state/user/actions';

export const mapStateToProps = function(state) {
  return {
    navColor: state.user.navColor,
    newtab: state.user.newtab
  };
};

export const mapDispatchToProps = {
  updateUser
};

const CustomizeContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Component);

export default CustomizeContainer;
