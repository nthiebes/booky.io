import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage, FormattedHTMLMessage, injectIntl } from 'react-intl';
import classNames from 'classnames';

import Icon from '../../atoms/icon';
import Link from '../../atoms/link';
import Logo from '../../atoms/logo';
import P from '../../atoms/paragraph';
import { ButtonSmallLight } from '../../atoms/button';
import LanguageSwitcher from '../../molecules/language-switcher';

class Footer extends Component {
  constructor(props) {
    super(props);

    this.scrollToTop = this.scrollToTop.bind(this);
  }
  
  scrollToTop() {
    window.scrollTo(0, 0);
    document.getElementsByTagName('header')[0].focus();
  }

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
                <b>{ '27.349' }</b>
                <FormattedMessage id="footer.people" />
              </li>
              <li className="footer__stats-item">
                <b>{ '10.504.196' }</b>
                <FormattedMessage id="footer.bookmarks" />
              </li>
              <li className="footer__stats-item">
                <b>{ '893.091' }</b>
                <FormattedMessage id="footer.categories" />
              </li>
              <li className="footer__stats-item">
                <b>{ '49.697' }</b>
                <FormattedMessage id="footer.dashboards" />
              </li>
            </ul>
          </section>
        ) }
        <section className={ classNames('footer__social', darkMode && 'footer__social--dark-mode') }>
          <a
            className="footer__social-item"
            target="_blank"
            rel="noopener noreferrer"
            href="https://twitter.com/intent/tweet?text=booky.io%20%7C%20Online%20Bookmark%20manager.%20Your%20bookmarks%20always%20available."
          >
            <Icon className="footer__icon" icon="twitter" color="light" />
            <label className="footer__label">{ 'Twitter' }</label>
          </a>
          <a
            className="footer__social-item"
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.xing.com/spi/shares/new?sc_p=b7910_cb&url=https%3A%2F%2Fbooky.io"
          >
            <Icon className="footer__icon" icon="xing" color="light" />
            <label className="footer__label">{ 'XING' }</label>
          </a>
          <a
            className="footer__social-item"
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fbooky.io"
          >
            <Icon className="footer__icon" icon="facebook" color="light" />
            <label className="footer__label">{ 'Facebook' }</label>
          </a>
        </section>
        <section className="footer__content">
          <div className="footer__wrapper">
            <Link to="/" title={ intl.formatMessage({ id: 'menu.home' }) } className="footer__logo">
              <Logo alt={ intl.formatMessage({ id: 'misc.logo' }) } />
            </Link>
            <ButtonSmallLight className="footer__button" onClick={ this.scrollToTop }>
              <FormattedHTMLMessage id="footer.scroll" />
            </ButtonSmallLight>
          </div>
          <div className="footer__languages">
            <LanguageSwitcher />
          </div>
          <nav className="footer__menu">
            <Link className="footer__menu-item" color="light" to="/about" noUnderline>
              <FormattedMessage id="menu.about" />
            </Link>
            <Link className="footer__menu-item" color="light" to="/help" noUnderline>
              <FormattedMessage id="menu.help" />
            </Link>
            <Link className="footer__menu-item" color="light" to="/contact" noUnderline>
              <FormattedMessage id="menu.contact" />
            </Link>
            <Link className="footer__menu-item" color="light" to="/privacy" noUnderline>
              <FormattedMessage id="menu.privacy" />
            </Link>
            <Link className="footer__menu-item" color="light" to="/legal" noUnderline>
              <FormattedMessage id="menu.legal" />
            </Link>
          </nav>
          <P className="footer__copy" noPadding>
            { `© 2014-${new Date().getFullYear()}` }
            <Link className="footer__copy-link" color="light" to="/about">{ 'booky.io' }</Link>
            { '| ' }
            <FormattedMessage id="footer.copy" />
          </P>
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
