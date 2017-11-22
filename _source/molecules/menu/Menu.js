import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Link from '../../atoms/link';
import Icon from '../../atoms/icon';
import { H3 } from '../../atoms/headline';

export default class Menu extends Component {
  constructor(props) {
    super(props);

    this.onMenuClick = this.onMenuClick.bind(this);
  }

  // componentWillReceiveProps(nextProps) {
  //     nextProps.document.body.classList.toggle('booky--no-scrolling-mobile-tablet', nextProps.menuOpen);
  // }

  onMenuClick(event) {
    event.stopPropagation();
  }

  render() {
    const { loggedIn, menuOpen, closeMenu, dashboards } = this.props;

    return (
      <aside className={ `menu ${menuOpen && 'menu--open'}` } onClick={ this.onMenuClick }>
        <header className="menu__header">
          <Icon icon="menu" onClick={ closeMenu } />
          <div className="menu__logo">{ 'booky.io (logo)' }</div>
        </header>
        <hr className="menu__hr" />
        <div className="menu__scroll-wrapper">
          <div className="menu__headline-wrapper">
            <H3 className="menu__headline">{ 'Dashboards' }</H3>
            <Icon icon="edit-mode" color="medium" />
          </div>
          <ul className="menu__dashboards">
            { dashboards.items.map((item, index) => (
              <li key={ index } className={ `menu__item ${index === dashboards.active && 'menu__item--active'}` }>
                <label className="menu__label">{ item.name }</label>
              </li>
            )) }
          </ul>
          <hr className="menu__hr" />
          <H3 className="menu__headline-wrapper">{ 'Navigation' }</H3>
          <ul className="menu__nav">
            <Link className="menu__item" href="/">
              <Icon icon="heart-border" />
              <label className="menu__label">{ 'Home' }</label>
            </Link>
            <Link className="menu__item" href="/about">
              <Icon icon="about" />
              <label className="menu__label">{ 'About' }</label>
            </Link>
            <Link className="menu__item" href="/help">
              <Icon icon="help" />
              <label className="menu__label">{ 'Help' }</label>
            </Link>
            { loggedIn && [
              <Link key="0" className="menu__item" href="/account">
                <Icon icon="account"/>
                <label className="menu__label">{ 'Account' }</label>
              </Link>,
              <Link key="1" className="menu__item" href="/next">
                <Icon icon="next" />
                <label className="menu__label">{ 'Next' }</label>
              </Link>,
              <Link key="2" className="menu__item" href="/logout">
                <Icon icon="sign-out" />
                <label className="menu__label">{ 'Sign Out' }</label>
              </Link>
            ] }
          </ul>
        </div>
      </aside>
    );
  }
}

Menu.propTypes = {
  loggedIn: PropTypes.bool.isRequired,
  menuOpen: PropTypes.bool.isRequired,
  closeMenu: PropTypes.func.isRequired,
  dashboards: PropTypes.object
};

Menu.defaultProps = {
  dashboards: []
};
