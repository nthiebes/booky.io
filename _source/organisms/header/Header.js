import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';
import classNames from 'classnames';
import { FormattedMessage, FormattedHTMLMessage, injectIntl } from 'react-intl';

import Menu from '../../molecules/menu';
import Icon from '../../atoms/icon';
import Link from '../../atoms/link';
import Search from '../../molecules/search';
import { ButtonSmallLight } from '../../atoms/button';

class Header extends Component {
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
      openModal,
      search,
      dashboards,
      intl,
      location
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
    const pathname = location.pathname;
    const menuItems = [
      {
        name: 'home',
        route: '/'
      },
      {
        name: 'about',
        route: '/about'
      },
      {
        name: 'help',
        route: '/help'
      }
    ];

    return (
      <header className={ HEADER_CLASS }>
        { loggedIn && (
          <Icon
            className="booky--hide-desktop"
            icon="menu"
            color="light"
          />
        ) }
        { loggedIn && search && <Search className="booky--hide-desktop" /> }
        { loggedIn && (
          <Icon
            className="booky--hide-desktop"
            icon="add"
            color="light"
            onClick={ () => { openModal('AddBookmark', {
              source: 'header'
            }); } }
          />
        ) }
        { !loggedIn && (
          <Fragment>
            <Link to="/" title={ intl.formatMessage({ id: 'menu.home' }) } className="header__logo" tabIndex="1">
              <img src="../../_assets/logo-primary.png" alt="Logo" height="36" />
            </Link>
            <nav className="header__nav booky--hide-mobile">
              { menuItems.map(({ name, route }, index) => (
                <Link
                  key={ index }
                  className={ classNames('header__nav-item', pathname === route && 'header__nav-item--active') }
                  to={ route }
                  color="light"
                >
                  <Icon icon={ name } color="light" />
                  <FormattedMessage id={ `menu.${name}` } />
                </Link>  
              )) }
            </nav>
            <ButtonSmallLight className="booky--hide-tablet-desktop" onClick={ onMenuClick } tabIndex="2">
              <FormattedHTMLMessage id="header.menu" />
            </ButtonSmallLight>
            <Icon
              className="booky--hide-desktop"
              icon="more"
              color="light"
              tabIndex="2"
              title={ intl.formatMessage({ id: 'header.more' }) }
            />
            <ButtonSmallLight className="booky--hide-mobile-tablet header__login" to="/login">
              <FormattedHTMLMessage id="header.login" />
            </ButtonSmallLight>
            <ButtonSmallLight className="booky--hide-mobile-tablet" to="/join" icon="join" solid>
              <FormattedHTMLMessage id="header.register" />
            </ButtonSmallLight>
          </Fragment>
        ) }
        <Menu menuOpen={ menuOpen } dashboards={ dashboards } />
      </header>
    );
  }
}

export default injectIntl(withRouter(Header));

Header.propTypes = {
  color: PropTypes.number,
  loggedIn: PropTypes.bool.isRequired,
  menuOpen: PropTypes.bool.isRequired,
  onDashboardsClick: PropTypes.func.isRequired,
  onHeaderClick: PropTypes.func.isRequired,
  onMenuClick: PropTypes.func.isRequired,
  onSidebarClick: PropTypes.func.isRequired,
  sidebarOpen: PropTypes.bool.isRequired,
  sticky: PropTypes.bool,
  openModal: PropTypes.func.isRequired,
  search: PropTypes.bool,
  dashboards: PropTypes.bool,
  intl: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired
};

Header.defaultProps = {
  color: 0,
  sticky: true
};
