import { connect } from 'react-redux';

import Component from './Extension';
import { updateExtensionData } from '../../_state/extension/actions';

export const mapStateToProps = (state) => ({
  darkMode: state.user.settings.darkMode
});

export const mapDispatchToProps = {
  updateExtensionData
};

const Container = connect(
  mapStateToProps,
  mapDispatchToProps
)(Component);

export default Container;
