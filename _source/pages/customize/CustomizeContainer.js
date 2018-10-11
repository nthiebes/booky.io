import { connect } from 'react-redux';

import Component from './Customize';
import { updateUser } from '../../_state/user/actions';

export const mapStateToProps = (state) => ({
  navColor: state.user.navColor,
  newtab: state.user.newtab,
  maxWidth: state.user.maxWidth,
  preserveEditMode: state.user.preserveEditMode,
  dashboards: state.user.dashboards,
  blurEffect: state.user.blurEffect
});

export const mapDispatchToProps = {
  updateUser
};

const CustomizeContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Component);

export default CustomizeContainer;
