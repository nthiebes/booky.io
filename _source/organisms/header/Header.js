import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Menu from '../../molecules/menu';
import Icon from '../../atoms/icon';
import Link from '../../atoms/link';
import Search from '../../molecules/search';
import Button from '../../atoms/button';

/**
 * React component
 *
 * @class Header
 * @classdesc 03_organisms/header/Header
 */
export default class Header extends Component {
  render() {
    const {
      onHeaderClick,
      onMenuClick,
      loggedIn,
      sticky,
      menuOpen,
      sidebarOpen,
      dashboardsOpen,
      color
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
        { loggedIn && [
          <Search key="0" className="b-hide-desktop" />,
          <Icon key="1" icon="add" color="light" />
        ] || (
          <Link className="header__logo header__logo--small" color="light" href="/" title="Home">
            <Icon icon="heart" color="light" />
          </Link>
        ) }

        { !loggedIn && <Button 
          className="header__join" 
          size="small" 
          color="light" 
          text="Join" 
          buzzword="Booky" 
          href="join"
        /> }
        { !loggedIn && <Button 
          className="header__sign-in" 
          size="small" 
          color="light" 
          text="Sign" 
          buzzword="In" 
          href="login"
        /> }
      </header>
    );
    // <Icon key="1" icon="add-category" color="light" title="New category" className="b-hide-desktop" />,
    // <Icon key="2" icon="edit" title={ 'EDIT_MODE_TITLE' } color="light" className="b-hide-desktop" onClick={ onEditModeClick } />
  }
}

Header.propTypes = {
  'color': PropTypes.number,
  'dashboardsOpen': PropTypes.bool.isRequired,
  'loggedIn': PropTypes.bool.isRequired,
  'menuOpen': PropTypes.bool.isRequired,
  'onDashboardsClick': PropTypes.func.isRequired,
  'onHeaderClick': PropTypes.func.isRequired,
  'onMenuClick': PropTypes.func.isRequired,
  'onSidebarClick': PropTypes.func.isRequired,
  'sidebarOpen': PropTypes.bool.isRequired,
  'sticky': PropTypes.bool
};

Header.defaultProps = {
  'color': 0,
  'sticky': true
};
