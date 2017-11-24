import React, { Component } from 'react';
import Icon from '../../atoms/icon';
import Link from '../../atoms/link';
import Button from '../../atoms/button';

export default class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <section className="footer__social">
          <div className="footer__social-item">
            <Icon icon="twitter" color="light" />
            <label className="footer__label">{ 'Twitter' }</label>
          </div>
          <div className="footer__social-item">
            <Icon icon="google-plus" color="light" />
            <label className="footer__label">{ 'Google+' }</label>
          </div>
          <div className="footer__social-item">
            <Icon icon="facebook" color="light" />
            <label className="footer__label">{ 'Facebook' }</label>
          </div>
        </section>
        <section className="footer__content">
          
        </section>
      </footer>
    );
  }
}
