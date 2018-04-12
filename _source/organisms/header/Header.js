import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { FormattedHTMLMessage, injectIntl } from 'react-intl';

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
      intl
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
        <Link
          className="header__logo header__logo--large booky--hide-mobile-tablet"
          color="light"
          to="/"
          title={ intl.formatMessage({ id: 'menu.home' }) }
        />
        <Menu menuOpen={ menuOpen } dashboards={ dashboards } />
        { loggedIn && search && <Search className="booky--hide-desktop" /> }
        { !search && (
          <Link className="header__logo header__logo--small booky--hide-desktop" color="light" to="/" title={ intl.formatMessage({ id: 'menu.home' }) }>
            <Icon icon="heart" color="light" />
          </Link>) }
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
            <Icon icon="login" color="light" className="header__login-icon booky--hide-desktop" />
            <ButtonSmallLight className="booky--hide-mobile-tablet" to="/join">
              <FormattedHTMLMessage id="header.register" />
            </ButtonSmallLight>
            <ButtonSmallLight className="booky--hide-mobile-tablet header__login" to="/login">
              <FormattedHTMLMessage id="header.login" />
            </ButtonSmallLight>
          </Fragment>
        ) }
      </header>
    );
  }
}

export default injectIntl(Header);

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
  openModal: PropTypes.func.isRequired,
  search: PropTypes.bool,
  dashboards: PropTypes.bool,
  intl: PropTypes.object.isRequired
};

Header.defaultProps = {
  'color': 0,
  'sticky': true
};
