import { connect } from 'react-redux';
import Component from './Footer';

export const mapStateToProps = function(state) {
  return {
    dashboardsOpen: state.dashboards.open,
    hasSidebar: state.dashboards.sidebar
  };
};

const Container = connect(
  mapStateToProps
)(Component);

export default Container;
