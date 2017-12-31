import { connect } from 'react-redux';
import Component from './Structure';
// import { actions as dashboardsActions } from '../../_state/dashboards';

export const mapStateToProps = function(state) {
  return {
    dashboards: state.dashboards.items
  };
};

// export const mapDispatchToProps = function(dispatch) {
//   return {
//     toggleStructureView: () => {
//       dispatch(dashboardsActions.toggleStructureView());
//     }
//   };
// };

const Container = connect(
  mapStateToProps
)(Component);

export default Container;
