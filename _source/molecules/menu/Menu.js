import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { IndexLink } from 'react-router';
import Link from '../../atoms/link';
import Icon from '../../atoms/icon';
import { H3 } from '../../atoms/headline';
import { ButtonSmallMedium } from '../../atoms/button';

export default class Menu extends Component {
  constructor(props) {
    super(props);

    this.onMenuClick = this.onMenuClick.bind(this);
    this.toggleEditMode = this.toggleEditMode.bind(this);
    this.state = {
      editMode: false
    };
  }

  onMenuClick(e) {
    e.stopPropagation();
  }

  toggleEditMode() {
    this.setState({
      editMode: !this.state.editMode
    });
  }

  render() {
    const { loggedIn, menuOpen, closeMenu, dashboards, openModal, changeDashboard } = this.props;
    const { editMode } = this.state;

    return (
      <aside className={ `menu ${menuOpen ? 'menu--open' : ''}` } onClick={ this.onMenuClick }>
        <header className="menu__header">
          <Icon icon="menu" onClick={ closeMenu } />
          <Link href="/" className="menu__logo" onClick={ closeMenu }>{ 'booky.io (logo)' }</Link>
        </header>
        <hr className="menu__hr" />
        <div className="menu__scroll-wrapper">
          <div className="menu__headline-wrapper">
            <H3 className="menu__headline">{ 'Dashboards' }</H3>
            <Icon
              className={ editMode ? '' : 'menu__edit-icon--hide' }
              icon="close"
              title="Quit edit mode"
              onClick={ this.toggleEditMode }
            />
            <Icon
              className={ editMode ? 'menu__edit-icon--hide' : '' }
              icon="more-horiz"
              title="Edit mode"
              onClick={ this.toggleEditMode }
            />
          </div>
          <ul className={ classNames('menu__dashboards', editMode && 'menu__dashboards--edit-mode') }>
            { dashboards.items.map((dashboard, index) => (
              <IndexLink
                key={ index }
                className={ `menu__item ${dashboard.id === dashboards.active ? 'menu__item--active' : ''}` }
                onClick={ () => { changeDashboard(dashboard.id); } } to="/">
                <label className="menu__label">{ dashboard.name }</label>
                <Icon
                  className="menu__icon"
                  icon="edit"
                  title="Edit dashboard"
                  stopPropagation
                  onClick={ () => { openModal('EditDashboard', {
                    id: dashboard.id,
                    name: dashboard.name
                  }); } }
                />
                <Icon
                  className="menu__icon"
                  icon="delete"
                  title="Delete dashboard"
                  stopPropagation
                  onClick={ () => { openModal('DeleteDashboard', {
                    id: dashboard.id,
                    name: dashboard.name
                  }); } }
                />
              </IndexLink>
            )) }
            <ButtonSmallMedium
              className="menu__button"
              onClick={ () => { openModal('AddDashboard'); } }>
              { 'Add ' }<b>{ 'dashboard' }</b>
            </ButtonSmallMedium>
          </ul>
          <hr className="menu__hr" />
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
              <Link key="2" className="menu__item" href="/logout" onClick={ closeMenu }>
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
  openModal: PropTypes.func.isRequired,
  changeDashboard: PropTypes.func.isRequired,
  dashboards: PropTypes.object
};

Menu.defaultProps = {
  dashboards: []
};
