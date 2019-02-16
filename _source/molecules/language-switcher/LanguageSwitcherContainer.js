import { connect } from 'react-redux';
import Component from './LanguageSwitcher';
import { updateIntl } from 'react-intl-redux';
import * as Cookies from 'es-cookie';

export const mapStateToProps = (state) => ({
  locale: state.intl.locale
});

export const mapDispatchToProps = (dispatch) => ({
  updateIntl: (data) => {
    Cookies.set('lang', data.locale, { expires: 365 });
    document.documentElement.setAttribute('lang', data.locale);
    dispatch(updateIntl(data));
  }
});

const Container = connect(
  mapStateToProps,
  mapDispatchToProps
)(Component);

export default Container;
