import { connect } from 'react-redux';

import Component from './Add';

export const mapStateToProps = (state) => ({
  title: state.extension.page.title,
  url: state.extension.page.url,
  description: state.extension.page.description,
  favicon: state.extension.page.favicon
});

const AddContainer = connect(
  mapStateToProps
)(Component);

export default AddContainer;
