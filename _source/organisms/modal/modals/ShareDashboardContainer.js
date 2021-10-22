import { connect } from 'react-redux';
import Component from './ShareDashboard';
import { shareDashboard } from '../../../_state/dashboards/actions';

const mapDispatchToProps = {
  shareDashboard
};
const Container = connect(null, mapDispatchToProps)(Component);

export default Container;
