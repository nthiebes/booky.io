import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import classNames from 'classnames';
import { FormattedMessage, injectIntl } from 'react-intl';

import Logo from '../../atoms/logo';
import Link from '../../atoms/link';
import Icon from '../../atoms/icon';
import { H3 } from '../../atoms/headline';
import { DashboardsList } from '../../organisms/dashboards';

class Sidebar extends Component {
  constructor(props) {
    super(props);

    this.onMenuClick = this.onMenuClick.bind(this);
    this.onCustomizeClick = this.onCustomizeClick.bind(this);
    this.addDashboard = this.addDashboard.bind(this);
  }

  onMenuClick(e) {
    e.stopPropagation();
  }

  onCustomizeClick() {
    this.props.openModal('Customize');
  }

  addDashboard() {
    this.props.openModal('AddDashboard');
  }

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
      dashboardsSidebar,
      darkMode,
      logout
    } = this.props;
    const { pathname } = location;

    return (
      <aside className={ classNames(
        'sidebar',
        open && 'sidebar--open',
        `sidebar--${direction}`,
        darkMode && 'sidebar--dark-mode',
        'booky--hide-desktop',
        className && className
      ) }>
        <header className="sidebar__header">
          <Link
            to="/"
            title={ intl.formatMessage({ id: 'menu.home' }) }
            className="sidebar__logo"
            onClick={ closeSidebar }
            tabIndex={ open ? '0' : '-1' }
          >
            <Logo color="dark" />
          </Link>
          <Icon
            icon={ direction === 'left' ? 'back' : 'forward' }
            onClick={ closeSidebar }
            tabIndex={ open ? '0' : '-1' }
            title={ intl.formatMessage({ id: 'menu.close' }) }
          />
        </header>
        <hr className="sidebar__hr" />
        <div className="sidebar__scroll-wrapper">
          { dashboards && dashboardsSidebar && (
            <DashboardsList useTabIndex={ open } />
          ) }
          { dashboards && dashboardsSidebar && <hr className="sidebar__hr" /> }
          <nav className="sidebar__nav">
            <H3 className="sidebar__headline"><FormattedMessage id="menu.navigation" /></H3>
            <ul className="sidebar__list">
              <li>
                <Link
                  className={ classNames(
                    'sidebar__item',
                    pathname === '/about' && 'sidebar__item--active',
                    darkMode && 'sidebar__item--dark-mode'
                  ) }
                  to="/about"
                  onClick={ closeSidebar }
                  tabIndex={ open ? '0' : '-1' }
                  noUnderline
                >
                  <Icon icon="about" />
                  <span className={ classNames('sidebar__label', darkMode && 'sidebar__label--dark-mode') }>
                    <FormattedMessage id="menu.about" />
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  className={ classNames(
                    'sidebar__item',
                    pathname === '/help' && 'sidebar__item--active',
                    darkMode && 'sidebar__item--dark-mode'
                  ) }
                  to="/help"
                  onClick={ closeSidebar }
                  tabIndex={ open ? '0' : '-1' }
                  noUnderline
                >
                  <Icon icon="help" />
                  <span className={ classNames('sidebar__label', darkMode && 'sidebar__label--dark-mode') }>
                    <FormattedMessage id="menu.help" />
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  className={ classNames(
                    'sidebar__item',
                    pathname === '/feedback' && 'sidebar__item--active',
                    darkMode && 'sidebar__item--dark-mode'
                  ) }
                  to="/feedback"
                  onClick={ closeSidebar }
                  tabIndex={ open ? '0' : '-1' }
                  noUnderline
                >
                  <Icon icon="feedback" />
                  <span className={ classNames('sidebar__label', darkMode && 'sidebar__label--dark-mode') }>
                    <FormattedMessage id="menu.feedback" />
                  </span>
                </Link>
              </li>
              { !loggedIn && (
                <Fragment>
                  <li>
                    <Link
                      className={ classNames(
                        'sidebar__item',
                        pathname === '/login' && 'sidebar__item--active',
                        darkMode && 'sidebar__item--dark-mode'
                      ) }
                      to="/login"
                      onClick={ closeSidebar }
                      tabIndex={ open ? '0' : '-1' }
                      noUnderline
                    >
                      <Icon icon="account" />
                      <span className={ classNames('sidebar__label', darkMode && 'sidebar__label--dark-mode') }>
                        <FormattedMessage id="menu.login" />
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      className={ classNames(
                        'sidebar__item',
                        'sidebar__item--highlighted',
                        pathname === '/join' && 'sidebar__item--active',
                        darkMode && 'sidebar__item--dark-mode'
                      ) }
                      to="/join"
                      onClick={ closeSidebar }
                      tabIndex={ open ? '0' : '-1' }
                      noUnderline
                    >
                      <Icon icon="join" />
                      <span className={ classNames('sidebar__label', darkMode && 'sidebar__label--dark-mode') }>
                        <FormattedMessage id="menu.register" />
                      </span>
                    </Link>
                  </li>
                </Fragment>
              ) }
              { loggedIn && (
                <Fragment>
                  <li>
                    <Link
                      className={ classNames(
                        'sidebar__item',
                        pathname === '/account' && 'sidebar__item--active',
                        darkMode && 'sidebar__item--dark-mode'
                      ) }
                      to="/account"
                      onClick={ closeSidebar }
                      tabIndex={ open ? '0' : '-1' }
                      noUnderline
                    >
                      <Icon icon="account"/>
                      <span className={ classNames('sidebar__label', darkMode && 'sidebar__label--dark-mode') }>
                        <FormattedMessage id="menu.account" />
                      </span>
                    </Link>
                  </li>
                  <li>
                    <button
                      className={ classNames(
                        'sidebar__item',
                        'booky--hide-desktop',
                        pathname === '/customize' && 'sidebar__item--active',
                        darkMode && 'sidebar__item--dark-mode'
                      ) }
                      onClick={ this.onCustomizeClick }
                      tabIndex={ open ? '0' : '-1' }
                    >
                      <Icon icon="settings" />
                      <span className={ classNames('sidebar__label', darkMode && 'sidebar__label--dark-mode') }>
                        <FormattedMessage id="menu.customize" />
                      </span>
                    </button>
                  </li>
                  <li>
                    <button
                      className={ classNames(
                        'sidebar__item',
                        'booky--hide-desktop',
                        darkMode && 'sidebar__item--dark-mode'
                      ) }
                      onClick={ logout }
                      tabIndex={ open ? '0' : '-1' }
                    >
                      <Icon icon="logout" />
                      <span className={ classNames('sidebar__label', darkMode && 'sidebar__label--dark-mode') }>
                        <FormattedMessage id="menu.logout" />
                      </span>
                    </button>
                  </li>
                </Fragment>
              ) }
            </ul>
          </nav>
        </div>
      </aside>
    );
  }
}

export default injectIntl(withRouter(Sidebar));

Sidebar.propTypes = {
  loggedIn: PropTypes.bool.isRequired,
  open: PropTypes.bool.isRequired,
  closeSidebar: PropTypes.func.isRequired,
  dashboards: PropTypes.bool,
  intl: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
  direction: PropTypes.string,
  className: PropTypes.string,
  dashboardsSidebar: PropTypes.bool.isRequired,
  darkMode: PropTypes.bool.isRequired,
  openModal: PropTypes.func.isRequired,
  logout: PropTypes.func.isRequired
};

Sidebar.defaultProps = {
  direction: 'right'
};
