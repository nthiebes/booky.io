import { connect } from 'react-redux';
import Component from './Menu';
import { actions as headerActions } from '../../_state/header';

export const mapStateToProps = function(state) {
  return {
    dashboards: state.dashboards
  };
};

export const mapDispatchToProps = function(dispatch) {
  return {
    closeMenu: () => {
      dispatch(headerActions.closeMenu());
    }
  };
};

const Container = connect(
  mapStateToProps,
  mapDispatchToProps
)(Component);

export default Container;
