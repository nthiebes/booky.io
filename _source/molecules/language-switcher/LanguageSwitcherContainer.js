import { connect } from 'react-redux';
import Component from './LanguageSwitcher';
import { updateIntl } from 'react-intl-redux';

export const mapStateToProps = function(state) {
  return {
    locale: state.intl.locale
  };
};

export const mapDispatchToProps = function(dispatch) {
  return {
    updateIntl: (data) => {
      dispatch(updateIntl(data));
    }
  };
};

const Container = connect(
  mapStateToProps,
  mapDispatchToProps
)(Component);

export default Container;
