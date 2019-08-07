import { connect } from 'react-redux';
import Component from './Structure';

export const mapStateToProps = (state) => ({
  dashboards: state.dashboards.items,
  darkMode: state.user.settings.darkMode
});

const Container = connect(
  mapStateToProps
)(Component);

export default Container;
