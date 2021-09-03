import { connect } from 'react-redux';

import Component from './Shared';
import { getDashboard } from '../../_state/dashboards/actions';

const mapDispatchToProps = {
  getDashboard
};
const SharedContainer = connect(null, mapDispatchToProps)(Component);

export default SharedContainer;
