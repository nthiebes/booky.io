import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage, injectIntl } from 'react-intl';
import classNames from 'classnames';

import Icon from '../../atoms/icon';
import Link from '../../atoms/link';
import Logo from '../../atoms/logo';
import P from '../../atoms/paragraph';
import { ButtonSmallLight } from '../../atoms/button';
import Illustration from '../../atoms/illustration';
import LanguageSwitcher from '../../molecules/language-switcher';
import Donate from '../../molecules/donate';

class Footer extends PureComponent {
  static propTypes = {
    intl: PropTypes.object.isRequired,
    dashboardsOpen: PropTypes.bool,
    hasSidebar: PropTypes.bool,
    className: PropTypes.string,
    home: PropTypes.bool,
    loggedIn: PropTypes.bool.isRequired,
    toolbarSticky: PropTypes.bool.isRequired,
    darkMode: PropTypes.bool.isRequired,
    locale: PropTypes.string
  }

  scrollToTop() {
    window.scrollTo(0, 0);
    document.getElementsByTagName('header')[0].focus();
  }

  render() {
    const {
      intl,
      dashboardsOpen,
      hasSidebar,
      className,
      home,
      loggedIn,
      toolbarSticky,
      darkMode,
      locale
    } = this.props;

    return (
      <footer className={ classNames(
        'footer',
        hasSidebar && home && loggedIn && toolbarSticky && 'footer--sidebar',
        hasSidebar && home && loggedIn && dashboardsOpen && toolbarSticky && 'footer--shifted',
        className
      ) }>
        { home && !loggedIn && (
          <section>
            <ul className="footer__stats">
              <li className="footer__stats-item">
                <b>{new Intl.NumberFormat(locale).format(38620)}</b>
                <FormattedMessage id="footer.people" />
              </li>
              <li className="footer__stats-item">
                <b>{new Intl.NumberFormat(locale).format(15836921)}</b>
                <FormattedMessage id="footer.bookmarks" />
              </li>
              <li className="footer__stats-item">
                <b>{new Intl.NumberFormat(locale).format(1282303)}</b>
                <FormattedMessage id="footer.categories" />
              </li>
              <li className="footer__stats-item">
                <b>{new Intl.NumberFormat(locale).format(70305)}</b>
                <FormattedMessage id="footer.dashboards" />
              </li>
            </ul>
          </section>
        ) }
        <section className={ classNames('footer__social', darkMode && 'footer__social--dark-mode') }>
          <Illustration
            className="footer__illustration"
            name="share"
            width="100"
            height="100"
          />
          <a
            className="footer__social-item"
            target="_blank"
            rel="noopener noreferrer"
            href={ `https://twitter.com/intent/tweet?url=https://booky.io&via=booky_io&text=booky.io - ${intl.formatMessage({ id: 'footer.twitterText' })}` }
          >
            <Icon className="footer__icon" icon="twitter" color="light" />
            <span className="footer__label">{ 'Twitter' }</span>
          </a>
          <a
            className="footer__social-item"
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.xing.com/spi/shares/new?sc_p=b7910_cb&url=https%3A%2F%2Fbooky.io"
          >
            <Icon className="footer__icon" icon="xing" color="light" />
            <span className="footer__label">{ 'XING' }</span>
          </a>
          <a
            className="footer__social-item"
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fbooky.io"
          >
            <Icon className="footer__icon" icon="facebook" color="light" />
            <span className="footer__label">{ 'Facebook' }</span>
          </a>
        </section>
        <section className="footer__content">
          <div className="footer__wrapper">
            <Link to="/" title={ intl.formatMessage({ id: 'menu.home' }) } className="footer__logo">
              <Logo />
            </Link>
            <Donate color="light" className="footer__donate" />
            <ButtonSmallLight className="footer__button" onClick={ this.scrollToTop }>
              <FormattedMessage id="footer.scroll" values={ { b: (msg) => <b>{msg}</b> } } />
            </ButtonSmallLight>
          </div>
          <div className="footer__languages">
            <LanguageSwitcher ignoreDarkMode />
          </div>
          <nav className="footer__menu">
            <Link className="footer__menu-item" color="light" to="/about">
              <FormattedMessage id="menu.about" />
            </Link>
            <Link className="footer__menu-item" color="light" to="/help">
              <FormattedMessage id="menu.help" />
            </Link>
            <Link className="footer__menu-item" color="light" to="/contact">
              <FormattedMessage id="menu.contact" />
            </Link>
            <Link className="footer__menu-item" color="light" to="/privacy">
              <FormattedMessage id="menu.privacy" />
            </Link>
            <Link className="footer__menu-item" color="light" to="/legal">
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

export default injectIntl(Footer);
