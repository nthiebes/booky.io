import { connect } from 'react-redux';
import Component from './Structure';

export const mapStateToProps = function(state) {
  return {
    dashboards: state.dashboards.items,
    darkMode: state.user.settings.darkMode
  };
};

const Container = connect(
  mapStateToProps
)(Component);

export default Container;
