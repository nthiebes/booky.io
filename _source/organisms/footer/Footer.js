/* eslint-disable max-len */

import React, { Component } from 'react';
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
          <ul className="footer__menu">
            <Link className="footer__menu-item" color="light" href="/about">{ 'About' }</Link>
            <Link className="footer__menu-item" color="light" href="/help">{ 'Help' }</Link>
            <Link className="footer__menu-item" color="light" href="mailto:hello@booky.io">{ 'Contact' }</Link>
            <Link className="footer__menu-item" color="light" href="/privacy">{ 'Privacy Policy' }</Link>
            <Link className="footer__menu-item" color="light" href="/legal">{ 'Legal Notice' }</Link>
          </ul>
          <ButtonSmallLight className="footer__button" onClick={ () => window.scrollTo(0, 0) }>
            <b>{ 'Back' }</b>{ ' to ' }<b>{ 'top' }</b>
          </ButtonSmallLight>
          <div className="footer__logo">{ 'booky.io (logo)' }</div>
          <div className="footer__copy">
            { '© 2014-2018' }
            <Link className="footer__copy-link" color="light" href="/about">{ 'booky.io' }</Link>
            { '| All Rights Reserved.' }
          </div>
        </section>
      </footer>
    );
  }
}

/* eslint-disable max-len */
