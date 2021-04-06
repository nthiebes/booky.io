import { connect } from 'react-redux';
import { updateIntl } from 'react-intl-redux';

import Component from './LanguageSwitcher';

export const mapStateToProps = (state) => ({
  language: state.intl.locale
});

export const mapDispatchToProps = {
  updateIntl
};

const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export default Container;
