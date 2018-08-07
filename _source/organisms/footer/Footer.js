/* eslint-disable max-len */
import React, { Component } from 'react';
import { FormattedMessage, FormattedHTMLMessage } from 'react-intl';

import Icon from '../../atoms/icon';
import Link from '../../atoms/link';
import { ButtonSmallLight } from '../../atoms/button';

export default class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <section className="footer__social">
          <a className="footer__social-item" target="_blank" href="https://twitter.com/intent/tweet?text=booky.io%20%7C%20Online%20Bookmark%20manager.%20Your%20bookmarks%20always%20available.">
            <Icon className="footer__icon" icon="twitter" color="light" />
            <label className="footer__label">{ 'Twitter' }</label>
          </a>
          <a className="footer__social-item" target="_blank" href="https://plus.google.com/share?url=http%3A%2F%2Fbooky.io">
            <Icon className="footer__icon" icon="google-plus" color="light" />
            <label className="footer__label">{ 'Google+' }</label>
          </a>
          <a className="footer__social-item" target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=http%3A%2F%2Fbooky.io">
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
          <ButtonSmallLight className="footer__button" onClick={ () => window.scrollTo(0, 0) }>
            <FormattedHTMLMessage id="footer.scroll" />
          </ButtonSmallLight>
          <Link to="/about" className="footer__logo" color="light">{ 'booky.io (logo)' }</Link>
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

/* eslint-disable max-len */
