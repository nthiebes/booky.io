import { connect } from 'react-redux';

import { updateUser, validate } from '../../../_state/user/actions';
import Component from './AccountData';

const mapStateToProps = (state) => ({
  name: state.user.name,
  email: state.user.email
});
const mapDispatchToProps = {
  updateUser,
  validate
};
const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export default Container;
