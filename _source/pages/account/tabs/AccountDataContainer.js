import { connect } from 'react-redux';

import { updateUser } from '../../../_state/user/actions';
import Component from './AccountData';

export const mapStateToProps = (state) => ({
  name: state.user.name,
  email: state.user.email
});

export const mapDispatchToProps = {
  updateUser
};

const Container = connect(
  mapStateToProps,
  mapDispatchToProps
)(Component);

export default Container;
