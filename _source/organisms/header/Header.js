import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withRouter } from 'react-router-dom';
import { FormattedHTMLMessage, injectIntl } from 'react-intl';

import Menu from '../../molecules/menu';
import Icon from '../../atoms/icon';
import Link from '../../atoms/link';
import Logo from '../../atoms/logo';
import Search from '../../molecules/search';
import { ButtonSmallLight } from '../../atoms/button';

class Header extends Component {
  constructor(props) {
    super(props);

    this.onBookmarkModalToggle = this.onBookmarkModalToggle.bind(this);
    this.onMenuClick = this.onMenuClick.bind(this);
    this.onCustomizeClick = this.onCustomizeClick.bind(this);
    this.onAddBookmarkClick = this.onAddBookmarkClick.bind(this);
    this.onLogoutClick = this.onLogoutClick.bind(this);
    this.state = {
      bookmarkModalOpen: false,
      logoutPending: false
    };
  }

  onBookmarkModalToggle() {
    this.setState({
      bookmarkModalOpen: !this.state.bookmarkModalOpen
    });
  }

  onMenuClick(event) {
    event.stopPropagation();

    this.props.toggleSidebar();
  }

  onCustomizeClick() {
    this.props.openModal('Customize');
  }

  onAddBookmarkClick() {
    this.props.openModal('AddBookmark', {
      source: 'header'
    });
  }

  onLogoutClick() {
    const { history, logout } = this.props;

    this.setState({
      logoutPending: true
    });

    logout({
      onSuccess: () => {
        history.push('/');
      }
    });
  }

  render() {
    const {
      closeSidebar,
      loggedIn,
      color,
      intl,
      sidebarOpen,
      home,
      className,
      sticky
    } = this.props;
    const { logoutPending } = this.state;

    return (
      // eslint-disable-next-line jsx-a11y/no-static-element-interactions, jsx-a11y/click-events-have-key-events
      <header
        className={ classNames(
          `header header--color${color}`,
          sidebarOpen && 'header--overlay',
          sticky && 'header--sticky',
          className && className
        ) }
        onClick={ closeSidebar }
        tabIndex="-1"
      >
        <div className={ classNames('header__wrapper', loggedIn && 'header__wrapper--full-width') }>
          <Link className="header__skip-link" href="#main">
            <FormattedHTMLMessage id="header.jumpToMain" />
          </Link>
          <Link className="header__skip-link" href="#language-switcher-en">
            <FormattedHTMLMessage id="header.jumpToLanguage" />
          </Link>
          { loggedIn && home && (
            <Fragment>
              <Icon
                className="booky--hide-desktop header__add-icon"
                icon="add"
                color="light"
                onClick={ this.onAddBookmarkClick }
                label={ intl.formatMessage({ id: 'bookmark.add' }) }
                ignoreDarkMode
                isButton
              />
              <Search className="booky--hide-desktop" />
            </Fragment>
          ) }
          <Link
            to="/"
            title={ intl.formatMessage({ id: 'menu.home' }) }
            className={ classNames('header__logo', loggedIn && home && 'booky--hide-mobile-tablet') }
          >
            <Logo color="light" />
          </Link>
          <Menu loggedIn={ loggedIn } className="booky--hide-mobile-tablet" />
          { loggedIn && (
            <Fragment>
              <Icon
                className="booky--hide-mobile-tablet"
                icon="settings"
                color="light"
                onClick={ this.onCustomizeClick }
                label={ intl.formatMessage({ id: 'menu.customize' }) }
                ignoreDarkMode
                isButton
              />
              <Icon
                className="booky--hide-mobile-tablet"
                icon={ logoutPending ? 'spinner' : 'logout' }
                color="light"
                onClick={ this.onLogoutClick }
                label={ intl.formatMessage({ id: 'menu.logout' }) }
                ignoreDarkMode
                pending={ logoutPending }
                isButton
              />
              <ButtonSmallLight
                className="header__add booky--hide-mobile-tablet"
                onClick={ this.onAddBookmarkClick }
                icon="add"
                solid
              >
                <FormattedHTMLMessage id="bookmark.add" />
              </ButtonSmallLight>
            </Fragment>
          ) }
          { !loggedIn && (
            <Fragment>
              <ButtonSmallLight className="booky--hide-mobile-tablet header__login" to="/login">
                <FormattedHTMLMessage id="header.login" />
              </ButtonSmallLight>
              <ButtonSmallLight className="booky--hide-mobile-tablet" to="/join" icon="join" solid>
                <FormattedHTMLMessage id="header.register" />
              </ButtonSmallLight>
            </Fragment>
          ) }
          <ButtonSmallLight className="booky--hide-desktop" onClick={ this.onMenuClick }>
            <FormattedHTMLMessage id="header.menu" />
          </ButtonSmallLight>
        </div>
      </header>
    );
  }
}


Header.propTypes = {
  color: PropTypes.number.isRequired,
  loggedIn: PropTypes.bool.isRequired,
  closeSidebar: PropTypes.func.isRequired,
  toggleSidebar: PropTypes.func.isRequired,
  sticky: PropTypes.bool.isRequired,
  openModal: PropTypes.func.isRequired,
  dashboards: PropTypes.bool,
  intl: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
  sidebarOpen: PropTypes.bool,
  home: PropTypes.bool,
  className: PropTypes.string,
  history: PropTypes.object.isRequired,
  logout: PropTypes.func.isRequired
};

export default injectIntl(withRouter(Header));
