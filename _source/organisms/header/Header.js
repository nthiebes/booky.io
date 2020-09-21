import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withRouter } from 'react-router-dom';
import { FormattedMessage, injectIntl } from 'react-intl';

import Menu from '../../molecules/menu';
import Icon from '../../atoms/icon';
import Link from '../../atoms/link';
import Logo from '../../atoms/logo';
import SearchField from '../../molecules/search-field';
import { ButtonSmallLight } from '../../atoms/button';

class Header extends PureComponent {
  static propTypes = {
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
    logout: PropTypes.func.isRequired,
    hasCategories: PropTypes.bool,
    dashboardsPending: PropTypes.bool
  }

  state = {
    bookmarkModalOpen: false,
    logoutPending: false
  }

  onBookmarkModalToggle = () => {
    this.setState({
      bookmarkModalOpen: !this.state.bookmarkModalOpen
    });
  }

  onMenuClick = (event) => {
    event.stopPropagation();

    this.props.toggleSidebar();
  }

  onCustomizeClick = () => {
    this.props.openModal('Customize');
  }

  onAddButtonClick = () => {
    const { hasCategories, openModal } = this.props;
    const modalType = hasCategories ? 'AddBookmark' : 'AddCategory';

    openModal(modalType, {
      source: 'header'
    });
  }

  handleLogout = () => {
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
      sticky,
      hasCategories
      // dashboardsPending
    } = this.props;
    const { logoutPending } = this.state;

    return (
      // eslint-disable-next-line jsx-a11y/no-static-element-interactions, jsx-a11y/click-events-have-key-events
      <header
        className={ classNames(
          'header',
          `header--color${color}`,
          sidebarOpen && 'header--overlay',
          sticky && 'header--sticky',
          className
        ) }
        onClick={ closeSidebar }
        tabIndex="-1"
      >
        <div className={ classNames('header__wrapper', loggedIn && 'header__wrapper--full-width') }>
          <Link className="header__skip-link" href="#main">
            <FormattedMessage id="header.jumpToMain" values={ { b: (msg) => <b>{msg}</b> } } />
          </Link>
          <Link className="header__skip-link" href="#language-switcher-en">
            <FormattedMessage id="header.jumpToLanguage" values={ { b: (msg) => <b>{msg}</b> } } />
          </Link>
          { loggedIn && home && (
            <Fragment>
              <Icon
                className="booky--hide-desktop header__add-icon"
                icon={ hasCategories ? 'add-link' : 'add-category' }
                color="light"
                onClick={ this.onAddButtonClick }
                label={ intl.formatMessage({ id: hasCategories ? 'bookmark.add' : 'category.add' },
                  { b: (msg) => msg }) }
                ignoreDarkMode
                isButton
              />
              <SearchField className="booky--hide-desktop" id="search-mobile" />
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
                icon="logout"
                color="light"
                onClick={ this.handleLogout }
                label={ intl.formatMessage({ id: 'menu.logout' }) }
                ignoreDarkMode
                pending={ logoutPending }
                isButton
              />
              { home && (
                <Icon
                  className="booky--hide-desktop"
                  icon="customize"
                  color="light"
                  onClick={ this.onCustomizeClick }
                  label={ intl.formatMessage({ id: 'menu.customize' }) }
                  ignoreDarkMode
                  isButton
                />
              )}
              <ButtonSmallLight
                className="header__add booky--hide-mobile-tablet"
                onClick={ this.onCustomizeClick }
                icon="customize"
              >
                <FormattedMessage id="menu.customize" values={ { b: (msg) => <b>{msg}</b> } } />
              </ButtonSmallLight>
            </Fragment>
          ) }
          { !loggedIn && (
            <Fragment>
              <ButtonSmallLight className="booky--hide-mobile-tablet header__login" to="/login">
                <FormattedMessage id="header.login" values={ { b: (msg) => <b>{msg}</b> } } />
              </ButtonSmallLight>
              <ButtonSmallLight className="booky--hide-mobile-tablet" to="/join" icon="join" solid>
                <FormattedMessage id="header.register" values={ { b: (msg) => <b>{msg}</b> } } />
              </ButtonSmallLight>
            </Fragment>
          ) }
          <span className="header__mobile-wrapper">
            { !loggedIn && (
              <Icon
                className="booky--hide-desktop"
                icon="account"
                color="light"
                to="/login"
                label={ intl.formatMessage({ id: 'menu.login' }) }
                ignoreDarkMode
              />
            ) }
            <ButtonSmallLight className="booky--hide-desktop header__menu" onClick={ this.onMenuClick }>
              <FormattedMessage id="header.menu" values={ { b: (msg) => <b>{msg}</b> } } />
            </ButtonSmallLight>
          </span>
        </div>
      </header>
    );
  }
}

export default injectIntl(withRouter(Header));
