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
      color,
      openModal
    } = this.props;
    const STICKY_CLASS = sticky ? 'header--sticky' : '';
    const OVERLAY_MENU_CLASS = menuOpen ? 'header--overlay-menu' : '';
    const OVERLAY_SIDEBAR_CLASS = sidebarOpen ? 'header--overlay-sidebar' : '';
    const HEADER_CLASS = classNames(
      `header header--color-${color}`,
      STICKY_CLASS,
      OVERLAY_MENU_CLASS,
      OVERLAY_SIDEBAR_CLASS
    );

    return (
      <header className={ HEADER_CLASS } onClick={ onHeaderClick }>
        <Icon
          icon="menu"
          color="light"
          onClick={ onMenuClick }
          stopPropagation={ true }
          className="booky--hide-desktop"
        />
        <Link className="header__logo header__logo--large" color="light" href="/" title="Home" />
        <Menu menuOpen={ menuOpen } />
        { loggedIn ? [
          <Search key="0" className="booky--hide-desktop" />,
          <Icon
            className="booky--hide-desktop"
            key="1"
            icon="add"
            color="light"
            onClick={ () => { openModal('AddBookmark', {
              source: 'header'
            }); } }
          />
        ] : (
          <Link className="header__logo header__logo--small booky--hide-desktop" color="light" href="/" title="Home">
            <Icon icon="heart" color="light" />
          </Link>
        ) }
        { !loggedIn && [
          <Icon key="0" icon="login" color="light" className="header__login-icon booky--hide-desktop" />,
          <ButtonSmallLight key="1" className="booky--hide-mobile-tablet" href="/join">
            { 'Join ' }<b>{ 'Booky' }</b>
          </ButtonSmallLight>,
          <ButtonSmallLight key="2" className="booky--hide-mobile-tablet header__login" href="/login">
            { 'Sign ' }<b>{ 'In' }</b>
          </ButtonSmallLight>
        ] }
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
