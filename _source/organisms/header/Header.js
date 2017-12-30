import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Menu from '../../molecules/menu';
import Icon from '../../atoms/icon';
import Link from '../../atoms/link';
import Search from '../../molecules/search';
import { ButtonSmallLight } from '../../atoms/button';

export default class Header extends Component {
  constructor(props) {
    super(props);

    this.onBookmarkModalToggle = this.onBookmarkModalToggle.bind(this);
    this.state = {
      bookmarkModalOpen: false
    };
  }

  onBookmarkModalToggle() {
    this.setState({
      bookmarkModalOpen: !this.state.bookmarkModalOpen
    });
  }

  render() {
    const {
      onHeaderClick,
      onMenuClick,
      loggedIn,
      sticky,
      menuOpen,
      sidebarOpen,
      dashboardsOpen,
      color,
      openModal
    } = this.props;
    const STICKY_CLASS = sticky ? 'header--sticky' : '';
    const OVERLAY_MENU_CLASS = menuOpen ? 'header--overlay-menu' : '';
    const OVERLAY_SIDEBAR_CLASS = sidebarOpen ? 'header--overlay-sidebar' : '';
    const OVERLAY_DASHBOARDS_CLASS = dashboardsOpen ? 'header--overlay-dashboards' : '';
    const HEADER_CLASS = classNames(
      `header header--color-${color}`,
      STICKY_CLASS,
      OVERLAY_MENU_CLASS,
      OVERLAY_SIDEBAR_CLASS,
      OVERLAY_DASHBOARDS_CLASS
    );

    return (
      <header className={ HEADER_CLASS } onClick={ onHeaderClick }>
        <Icon
          icon="menu"
          color="light"
          onClick={ onMenuClick }
          stopPropagation={ true }
          className="header__menu-icon"
        />
        <Link className="header__logo header__logo--large" color="light" href="/" title="Home" />
        <Menu menuOpen={ menuOpen } loggedIn={ loggedIn } />
        { loggedIn ? [
          <Search key="0" className="b-hide-desktop" />,
          <Icon
            key="1"
            icon="add"
            color="light"
            onClick={ () => { openModal('AddBookmark', {
              source: 'header'
            }); } }
          />
        ] : (
          <Link className="header__logo header__logo--small" color="light" href="/" title="Home">
            <Icon icon="heart" color="light" />
          </Link>
        ) }

        { !loggedIn && (
          <ButtonSmallLight className="header__sign-in" href="/join">
            { 'Join ' }<b>{ 'Booky' }</b>
          </ButtonSmallLight>
        ) }
        { !loggedIn && (
          <ButtonSmallLight className="header__sign-in" href="/login">
            { 'Sign ' }<b>{ 'In' }</b>
          </ButtonSmallLight>
        ) }
      </header>
    );
  }
}

Header.propTypes = {
  'color': PropTypes.number,
  'loggedIn': PropTypes.bool.isRequired,
  'menuOpen': PropTypes.bool.isRequired,
  'onDashboardsClick': PropTypes.func.isRequired,
  'onHeaderClick': PropTypes.func.isRequired,
  'onMenuClick': PropTypes.func.isRequired,
  'onSidebarClick': PropTypes.func.isRequired,
  'sidebarOpen': PropTypes.bool.isRequired,
  'sticky': PropTypes.bool,
  openModal: PropTypes.func.isRequired
};

Header.defaultProps = {
  'color': 0,
  'sticky': true
};
