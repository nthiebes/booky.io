import { connect } from 'react-redux';
import Component from './Customize';
import { logout } from '../../_state/user/actions';

const mapDispatchToProps = {
  logout
};
const Container = connect(null, mapDispatchToProps)(Component);

export default Container;
