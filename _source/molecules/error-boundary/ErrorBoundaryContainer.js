import { connect } from 'react-redux';
import Component from './ErrorBoundary';

export const mapStateToProps = (state) => ({
  dashboardsError: state.dashboards.error
});

const Container = connect(mapStateToProps)(Component);

export default Container;
