import { connect } from 'react-redux';
import Component from './Booky';
import { dragDashboard, dragCategory } from '../../_state/dashboards/actions';
import { dragBookmark } from '../../_state/categories/actions';

export const mapDispatchToProps = (dispatch) => ({
  dragDashboard,
  dragCategory,
  dragBookmark
});

const Container = connect(
  null,
  mapDispatchToProps
)(Component);

export default Container;
