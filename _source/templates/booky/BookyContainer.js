import { connect } from 'react-redux';
import Component from './Booky';
import { actions as dashboardsActions } from '../../_state/dashboards';
import { actions as categoriesActions } from '../../_state/categories';

export const mapDispatchToProps = function(dispatch) {
  return {
    dragDashboard: (data) => {
      dispatch(dashboardsActions.dragDashboard(data));
    },
    dragCategory: (data) => {
      dispatch(dashboardsActions.dragCategory(data));
    },
    dragBookmark: (data) => {
      dispatch(categoriesActions.dragBookmark(data));
    }
  };
};

const Container = connect(
  null,
  mapDispatchToProps
)(Component);

export default Container;
