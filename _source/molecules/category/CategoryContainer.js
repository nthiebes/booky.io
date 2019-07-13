import { connect } from 'react-redux';

import Component from './Category';
import { openModal } from '../../_state/modal/actions';
import { toggleCategory } from '../../_state/categories/actions';

export const mapStateToProps = (state) => ({
  darkMode: state.user.settings.darkMode
});

export const mapDispatchToProps = {
  openModal,
  toggleCategory
};

const Container = connect(
  mapStateToProps,
  mapDispatchToProps
)(Component);

export default Container;
