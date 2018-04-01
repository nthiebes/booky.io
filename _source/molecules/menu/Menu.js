import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Link from '../../atoms/link';
import Icon from '../../atoms/icon';
import { H3 } from '../../atoms/headline';
import Dashboards from '../../organisms/dashboards';

export default class Menu extends Component {
  constructor(props) {
    super(props);

    this.onMenuClick = this.onMenuClick.bind(this);
  }

  onMenuClick(e) {
    e.stopPropagation();
  }

  render() {
    const { loggedIn, menuOpen, closeMenu, dashboards } = this.props;

    return (
      <aside className={ `menu ${menuOpen ? 'menu--open' : ''}` } onClick={ this.onMenuClick }>
        <header className="menu__header">
          <Icon icon="menu" onClick={ closeMenu } />
          <Link href="/" className="menu__logo" onClick={ closeMenu }>{ 'booky.io (logo)' }</Link>
        </header>
        <hr className="menu__hr" />
        <div className="menu__scroll-wrapper">
          { dashboards && <Dashboards /> }
          { dashboards && <hr className="menu__hr" /> }
          <H3 className="menu__headline">{ 'Navigation' }</H3>
          <ul className="menu__nav">
            <Link className="menu__item" href="/" onClick={ closeMenu }>
              <Icon icon="heart-border" />
              <label className="menu__label">{ 'Home' }</label>
            </Link>
            <Link className="menu__item" href="/about" onClick={ closeMenu }>
              <Icon icon="about" />
              <label className="menu__label">{ 'About' }</label>
            </Link>
            <Link className="menu__item" href="/help" onClick={ closeMenu }>
              <Icon icon="help" />
              <label className="menu__label">{ 'Help' }</label>
            </Link>
            { loggedIn && [
              <Link key="0" className="menu__item" href="/account" onClick={ closeMenu }>
                <Icon icon="account"/>
                <label className="menu__label">{ 'Account' }</label>
              </Link>,
              <Link key="1" className="menu__item" href="/next" onClick={ closeMenu }>
                <Icon icon="next" />
                <label className="menu__label">{ 'Next' }</label>
              </Link>,
              <Link key="2" className="menu__item booky--hide-desktop" href="" onClick={ closeMenu }>
                <Icon icon="settings" />
                <label className="menu__label">{ 'Customize' }</label>
              </Link>,
              <Link key="3" className="menu__item booky--hide-desktop" href="/logout" onClick={ closeMenu }>
                <Icon icon="logout" />
                <label className="menu__label">{ 'Sign Out' }</label>
              </Link>
            ] }
          </ul>
          <Icon className="menu__item booky--hide-mobile-tablet" icon="settings" title="Customize" color="light" />
          <Link className="menu__item booky--hide-mobile-tablet" href="/logout">
            <Icon icon="logout" title="Sign Out" />
          </Link>
        </div>
      </aside>
    );
  }
}

Menu.propTypes = {
  loggedIn: PropTypes.bool.isRequired,
  menuOpen: PropTypes.bool.isRequired,
  closeMenu: PropTypes.func.isRequired,
  dashboards: PropTypes.bool
};
