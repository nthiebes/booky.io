import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Component from './Duplicates';

import { loadMoreDuplicates } from '../../_state/duplicates/actions';
import { changeDashboard } from '../../_state/dashboards/actions';

const mapStateToProps = (state) => ({
  groups: state.duplicates.groups,
  total: state.duplicates.total,
  pending: state.duplicates.pending,
  error: state.duplicates.error,
  darkMode: state.user.settings.darkMode
});
const mapDispatchToProps = {
  loadMoreDuplicates,
  changeDashboard
};
const Container = connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Component));

export default Container;
