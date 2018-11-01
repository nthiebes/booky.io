import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage, FormattedHTMLMessage, injectIntl } from 'react-intl';
import classNames from 'classnames';

import Icon from '../../atoms/icon';
import Link from '../../atoms/link';
import { ButtonSmallLight } from '../../atoms/button';
import LanguageSwitcher from '../../molecules/language-switcher';

class Footer extends Component {
  render() {
    const { intl, dashboardsOpen, hasSidebar, className, home, loggedIn, toolbarSticky, darkMode } = this.props;

    return (
      <footer className={ classNames(
        'footer',
        hasSidebar && home && loggedIn && toolbarSticky && 'footer--sidebar',
        hasSidebar && home && loggedIn && dashboardsOpen && toolbarSticky && 'footer--shifted',
        className && className
      ) }>
        { home && !loggedIn && (
          <section>
            <ul className="footer__stats">
              <li className="footer__stats-item">
                <b>{ '19.512' }</b>
                <FormattedMessage id="footer.people" />
              </li>
              <li className="footer__stats-item">
                <b>{ '7.557.503' }</b>
                <FormattedMessage id="footer.bookmarks" />
              </li>
              <li className="footer__stats-item">
                <b>{ '636.803' }</b>
                <FormattedMessage id="footer.categories" />
              </li>
              <li className="footer__stats-item">
                <b>{ '35.209' }</b>
                <FormattedMessage id="footer.dashboards" />
              </li>
            </ul>
          </section>
        ) }
        <section className={ classNames('footer__social', darkMode && 'footer__social--dark-mode') }>
          <a
            className="footer__social-item"
            target="_blank"
            href="https://twitter.com/intent/tweet?text=booky.io%20%7C%20Online%20Bookmark%20manager.%20Your%20bookmarks%20always%20available."
          >
            <Icon className="footer__icon" icon="twitter" color="light" />
            <label className="footer__label">{ 'Twitter' }</label>
          </a>
          <a className="footer__social-item" target="_blank" href="https://www.xing.com/spi/shares/new?sc_p=b7910_cb&url=https%3A%2F%2Fbooky.io">
            <Icon className="footer__icon" icon="xing" color="light" />
            <label className="footer__label">{ 'XING' }</label>
          </a>
          <a className="footer__social-item" target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fbooky.io">
            <Icon className="footer__icon" icon="facebook" color="light" />
            <label className="footer__label">{ 'Facebook' }</label>
          </a>
        </section>
        <section className="footer__content">
          <nav className="footer__menu">
            <Link className="footer__menu-item" color="light" to="/about">
              <FormattedMessage id="menu.about" />
            </Link>
            <Link className="footer__menu-item" color="light" to="/help">
              <FormattedMessage id="menu.help" />
            </Link>
            <Link className="footer__menu-item" color="light" href="mailto:hello@booky.io">
              <FormattedMessage id="menu.contact" />
            </Link>
            <Link className="footer__menu-item" color="light" to="/privacy">
              <FormattedMessage id="menu.privacy" />
            </Link>
            <Link className="footer__menu-item" color="light" to="/legal">
              <FormattedMessage id="menu.legal" />
            </Link>
          </nav>
          <div className="footer__wrapper">
            <LanguageSwitcher className="footer__language" />
            <ButtonSmallLight className="footer__button" onClick={ () => window.scrollTo(0, 0) }>
              <FormattedHTMLMessage id="footer.scroll" />
            </ButtonSmallLight>
          </div>
          <Link to="/" title={ intl.formatMessage({ id: 'menu.home' }) } className="footer__logo">
            <img src="../../_assets/logo-primary.png" alt="Logo" height="36" />
          </Link>
          <div className="footer__copy">
            { '© 2014-2018' }
            <Link className="footer__copy-link" color="light" to="/about">{ 'booky.io' }</Link>
            { '| ' }
            <FormattedMessage id="footer.copy" />
          </div>
        </section>
      </footer>
    );
  }
}

Footer.propTypes = {
  intl: PropTypes.object.isRequired,
  dashboardsOpen: PropTypes.bool,
  hasSidebar: PropTypes.bool,
  className: PropTypes.string,
  home: PropTypes.bool,
  loggedIn: PropTypes.bool.isRequired,
  toolbarSticky: PropTypes.bool.isRequired,
  darkMode: PropTypes.bool.isRequired
};

export default injectIntl(Footer);

/* eslint-disable max-len */
