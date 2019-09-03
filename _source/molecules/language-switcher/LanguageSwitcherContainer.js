import { connect } from 'react-redux';
import { updateIntl } from 'react-intl-redux';
import { addLocaleData } from 'react-intl';
import deLocaleData from 'react-intl/locale-data/de';
import * as Cookies from 'es-cookie';

import Component from './LanguageSwitcher';

export const mapStateToProps = (state) => ({
  locale: state.intl.locale
});

export const mapDispatchToProps = (dispatch) => ({
  updateIntl: (data) => {
    switch (data.locale) {
      case 'de': {
        addLocaleData(deLocaleData);
        break;
      }

      default:
    }

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
