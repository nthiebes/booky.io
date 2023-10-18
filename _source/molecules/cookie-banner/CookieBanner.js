import React, { PureComponent } from 'react';
import { FormattedMessage } from 'react-intl';
import * as Cookies from 'es-cookie';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { setLanguage } from '../../_utils/language';
// import { loadGoogleAnalytics } from '../../_utils/script';
import { List, ListItem } from '../../atoms/list';
import {
  ButtonSmallPrimary,
  ButtonSmallMedium,
  ButtonSmallLight
} from '../../atoms/button';
import P from '../../atoms/paragraph';
import Link from '../../atoms/link';

export default class CookieBanner extends PureComponent {
  static propTypes = {
    language: PropTypes.string.isRequired,
    darkMode: PropTypes.bool
  };

  state = {
    cookieConsent: Cookies.get('cookieConsent')
  };

  handleDecline = () => {
    Cookies.set('cookieConsent', 'false', {
      expires: 18250,
      secure: process.env.NODE_ENV !== 'development'
    });
    this.setState({
      cookieConsent: true
    });
  };

  handleAccept = () => {
    const { language } = this.props;

    Cookies.set('cookieConsent', 'true', {
      expires: 18250,
      secure: process.env.NODE_ENV !== 'development'
    });
    setLanguage(language);
    // loadGoogleAnalytics();
    this.setState({
      cookieConsent: true
    });
  };

  render() {
    const { darkMode } = this.props;
    const { cookieConsent } = this.state;
    const DeclineButton = darkMode ? ButtonSmallLight : ButtonSmallMedium;

    return cookieConsent ? null : (
      <aside
        className={classNames(
          'cookie-banner',
          darkMode && 'cookie-banner--darkMode'
        )}
      >
        <P>
          <FormattedMessage id="cookie.text" />
        </P>
        <List>
          <ListItem>
            <FormattedMessage id="cookie.item1" />
          </ListItem>
          <ListItem>
            <FormattedMessage id="cookie.item2" />
          </ListItem>
          {/* <ListItem>
            <FormattedMessage id="cookie.item3" />
          </ListItem> */}
        </List>
        <Link to="/privacy">
          <FormattedMessage id="menu.privacy" />
        </Link>
        <ButtonSmallPrimary
          className="cookie-banner__button"
          solid
          onClick={this.handleAccept}
        >
          <FormattedMessage id="button.okay" />
          {' 🍪'}
        </ButtonSmallPrimary>
        <DeclineButton
          className="cookie-banner__button"
          onClick={this.handleDecline}
        >
          <FormattedMessage id="button.no" />
        </DeclineButton>
      </aside>
    );
  }
}
