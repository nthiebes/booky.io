/* eslint-disable max-lines */
import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import classNames from 'classnames';
import { FormattedMessage, injectIntl } from 'react-intl';

import { config } from '../../config';
import Logo from '../../atoms/logo';
import Link from '../../atoms/link';
import Icon from '../../atoms/icon';
import { H3 } from '../../atoms/headline';
import { DashboardsList } from '../../organisms/dashboards';

class Sidebar extends PureComponent {
  static propTypes = {
    loggedIn: PropTypes.bool.isRequired,
    open: PropTypes.bool.isRequired,
    closeSidebar: PropTypes.func.isRequired,
    dashboards: PropTypes.bool,
    intl: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    direction: PropTypes.string,
    className: PropTypes.string,
    hasSidebar: PropTypes.bool.isRequired,
    darkMode: PropTypes.bool.isRequired,
    logout: PropTypes.func.isRequired,
    history: PropTypes.object.isRequired,
    color: PropTypes.number.isRequired,
    newsVersion: PropTypes.number.isRequired,
    voted: PropTypes.number.isRequired
  };

  static defaultProps = {
    direction: 'right'
  };

  state = {
    logoutPending: false
  };

  handleLogout = () => {
    const { history, logout, closeSidebar } = this.props;

    this.setState({
      logoutPending: true
    });

    logout({
      onSuccess: () => {
        closeSidebar();
        history.push('/');
      }
    });
  };

  // eslint-disable-next-line complexity
  render() {
    const {
      loggedIn,
      open,
      closeSidebar,
      dashboards,
      intl,
      direction,
      location,
      className,
      hasSidebar,
      darkMode,
      newsVersion,
      voted
    } = this.props;
    const { pathname } = location;
    const { logoutPending } = this.state;

    return (
      <aside
        className={classNames(
          'sidebar',
          open && 'sidebar--open',
          `sidebar--${direction}`,
          darkMode && 'sidebar--dark-mode',
          'booky--hide-desktop',
          className
        )}
      >
        <header className="sidebar__header">
          <Link
            to="/"
            title={intl.formatMessage({ id: 'menu.home' })}
            className="sidebar__logo"
            onClick={closeSidebar}
            tabIndex={open ? '0' : '-1'}
          >
            <Logo color={darkMode ? 'normal' : 'dark'} />
          </Link>
          <Icon
            icon={direction === 'left' ? 'back' : 'forward'}
            onClick={closeSidebar}
            tabIndex={open ? '0' : '-1'}
            label={intl.formatMessage({ id: 'menu.close' })}
            isButton
          />
        </header>
        <div className="sidebar__scroll-wrapper">
          {dashboards && hasSidebar && (
            <DashboardsList useTabIndex={open} droppableIdSuffix="mobile" />
          )}
          {dashboards && hasSidebar && <hr className="sidebar__hr" />}
          <nav
            title={intl.formatMessage({ id: 'menu.title' })}
            className="sidebar__nav"
          >
            <H3 className="sidebar__headline">
              <FormattedMessage id="menu.navigation" />
            </H3>
            <ul className="sidebar__list">
              {!loggedIn && (
                <li>
                  <Link
                    className={classNames(
                      'sidebar__item',
                      pathname === '/features' && 'sidebar__item--active',
                      darkMode && 'sidebar__item--dark-mode'
                    )}
                    to="/features"
                    onClick={closeSidebar}
                    tabIndex={open ? '0' : '-1'}
                    noUnderline
                  >
                    <Icon icon="star" />
                    <span
                      className={classNames(
                        'sidebar__label',
                        darkMode && 'sidebar__label--dark-mode'
                      )}
                    >
                      <FormattedMessage id="menu.features" />
                    </span>
                  </Link>
                </li>
              )}
              {loggedIn && (
                <li>
                  <Link
                    className={classNames(
                      'sidebar__item',
                      pathname === '/account' && 'sidebar__item--active',
                      darkMode && 'sidebar__item--dark-mode'
                    )}
                    to="/account"
                    onClick={closeSidebar}
                    tabIndex={open ? '0' : '-1'}
                    noUnderline
                  >
                    <Icon icon="account" />
                    <span
                      className={classNames(
                        'sidebar__label',
                        darkMode && 'sidebar__label--dark-mode'
                      )}
                    >
                      <FormattedMessage id="menu.account" />
                    </span>
                  </Link>
                </li>
              )}
              <li>
                <Link
                  className={classNames(
                    'sidebar__item',
                    pathname === '/supporter' && 'sidebar__item--active',
                    darkMode && 'sidebar__item--dark-mode'
                  )}
                  to="/supporter"
                  onClick={closeSidebar}
                  tabIndex={open ? '0' : '-1'}
                  noUnderline
                >
                  <Icon icon="heart" />
                  <span
                    className={classNames(
                      'sidebar__label',
                      darkMode && 'sidebar__label--dark-mode'
                    )}
                  >
                    <FormattedMessage id="menu.supporter" />
                  </span>
                </Link>
              </li>
              {!loggedIn && (
                <li>
                  <Link
                    className={classNames(
                      'sidebar__item',
                      pathname === '/about' && 'sidebar__item--active',
                      darkMode && 'sidebar__item--dark-mode'
                    )}
                    to="/about"
                    onClick={closeSidebar}
                    tabIndex={open ? '0' : '-1'}
                    noUnderline
                  >
                    <Icon icon="about" />
                    <span
                      className={classNames(
                        'sidebar__label',
                        darkMode && 'sidebar__label--dark-mode'
                      )}
                    >
                      <FormattedMessage id="menu.about" />
                    </span>
                  </Link>
                </li>
              )}
              <li>
                <Link
                  className={classNames(
                    'sidebar__item',
                    pathname === '/help' && 'sidebar__item--active',
                    darkMode && 'sidebar__item--dark-mode'
                  )}
                  to="/help"
                  onClick={closeSidebar}
                  tabIndex={open ? '0' : '-1'}
                  noUnderline
                >
                  <Icon icon="help" />
                  <span
                    className={classNames(
                      'sidebar__label',
                      darkMode && 'sidebar__label--dark-mode'
                    )}
                  >
                    <FormattedMessage id="menu.help" />
                  </span>
                </Link>
              </li>
              {!loggedIn && (
                <>
                  <li>
                    <Link
                      className={classNames(
                        'sidebar__item',
                        pathname === '/login' && 'sidebar__item--active',
                        darkMode && 'sidebar__item--dark-mode'
                      )}
                      to="/login"
                      onClick={closeSidebar}
                      tabIndex={open ? '0' : '-1'}
                      noUnderline
                    >
                      <Icon icon="account" />
                      <span
                        className={classNames(
                          'sidebar__label',
                          darkMode && 'sidebar__label--dark-mode'
                        )}
                      >
                        <FormattedMessage id="menu.login" />
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      className={classNames(
                        'sidebar__item',
                        'sidebar__item--highlighted',
                        pathname === '/join' && 'sidebar__item--active',
                        darkMode && 'sidebar__item--dark-mode'
                      )}
                      to="/join"
                      onClick={closeSidebar}
                      tabIndex={open ? '0' : '-1'}
                      noUnderline
                    >
                      <Icon icon="join" />
                      <span
                        className={classNames(
                          'sidebar__label',
                          darkMode && 'sidebar__label--dark-mode'
                        )}
                      >
                        <FormattedMessage id="menu.register" />
                      </span>
                    </Link>
                  </li>
                </>
              )}
              {loggedIn && (
                <li>
                  <Link
                    className={classNames(
                      'sidebar__item',
                      pathname === '/next' && 'sidebar__item--active',
                      darkMode && 'sidebar__item--dark-mode'
                    )}
                    to="/next"
                    onClick={closeSidebar}
                    tabIndex={open ? '0' : '-1'}
                    noUnderline
                    hasBadge={voted < config.POLL_VERSION}
                  >
                    <Icon icon="next" />
                    <span
                      className={classNames(
                        'sidebar__label',
                        darkMode && 'sidebar__label--dark-mode'
                      )}
                    >
                      <FormattedMessage id="menu.next" />
                    </span>
                  </Link>
                </li>
              )}
              {loggedIn && newsVersion < config.NEWS_VERSION && (
                <li>
                  <Link
                    className={classNames(
                      'sidebar__item',
                      darkMode && 'sidebar__item--dark-mode'
                    )}
                    to="/about#new"
                    onClick={closeSidebar}
                    tabIndex={open ? '0' : '-1'}
                    noUnderline
                    hasBadge
                  >
                    <Icon icon="new" />
                    <span
                      className={classNames(
                        'sidebar__label',
                        darkMode && 'sidebar__label--dark-mode'
                      )}
                    >
                      <FormattedMessage id="menu.new" />
                    </span>
                  </Link>
                </li>
              )}
              {loggedIn && (
                <li>
                  <button
                    className={classNames(
                      'sidebar__item',
                      'booky--hide-desktop',
                      darkMode && 'sidebar__item--dark-mode'
                    )}
                    onClick={this.handleLogout}
                    tabIndex={open ? '0' : '-1'}
                  >
                    <Icon icon="logout" pending={logoutPending} />
                    <span
                      className={classNames(
                        'sidebar__label',
                        darkMode && 'sidebar__label--dark-mode'
                      )}
                    >
                      <FormattedMessage id="menu.logout" />
                    </span>
                  </button>
                </li>
              )}
            </ul>
          </nav>
        </div>
      </aside>
    );
  }
}

export default injectIntl(withRouter(Sidebar));
