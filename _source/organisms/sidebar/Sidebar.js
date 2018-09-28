import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';
import classNames from 'classnames';
import { FormattedMessage, injectIntl } from 'react-intl';

import Link from '../../atoms/link';
import Icon from '../../atoms/icon';
import { H3 } from '../../atoms/headline';
import Dashboards from '../../organisms/dashboards';

class Sidebar extends Component {
  constructor(props) {
    super(props);

    this.onMenuClick = this.onMenuClick.bind(this);
  }

  onMenuClick(e) {
    e.stopPropagation();
  }

  render() {
    const { loggedIn, open, closeMenu, dashboards, intl, direction, location, className } = this.props;
    const { pathname } = location;

    return (
      <aside className={ classNames('sidebar', open && 'sidebar--open', `sidebar--${direction}`, 'booky--hide-desktop', className && className) }>
        <header className="sidebar__header">
          <Link
            to="/"
            title={ intl.formatMessage({ id: 'menu.home' }) }
            className="sidebar__logo"
            onClick={ closeMenu }
            tabIndex={ open ? '0' : '-1' }
          >
            <img src="../../_assets/logo-primary.png" alt="Logo" height="36" />
          </Link>
          <Icon
            icon={ direction === 'left' ? 'back' : 'forward' }
            onClick={ closeMenu }
            tabIndex={ open ? '0' : '-1' }
            title={ intl.formatMessage({ id: 'menu.close' }) }
          />
        </header>
        <hr className="sidebar__hr" />
        <div className="sidebar__scroll-wrapper">
          { dashboards && <Dashboards useTabIndex={ open } /> }
          { dashboards && <hr className="sidebar__hr" /> }
          <H3 className="sidebar__headline"><FormattedMessage id="menu.navigation" /></H3>
          <nav className="sidebar__nav">
            <Link
              className={ classNames('sidebar__item', pathname === '/about' && 'sidebar__item--active') }
              to="/about"
              onClick={ closeMenu }
              tabIndex={ open ? '0' : '-1' }
            >
              <Icon icon="about" />
              <label className="sidebar__label"><FormattedMessage id="menu.about" /></label>
            </Link>
            <Link
              className={ classNames('sidebar__item', pathname === '/help' && 'sidebar__item--active') }
              to="/help"
              onClick={ closeMenu }
              tabIndex={ open ? '0' : '-1' }
            >
              <Icon icon="help" />
              <label className="sidebar__label"><FormattedMessage id="menu.help" /></label>
            </Link>
            { !loggedIn && (
              <Fragment>
                <Link
                  className={ classNames('sidebar__item', pathname === '/login' && 'sidebar__item--active') }
                  to="/login"
                  onClick={ closeMenu }
                  tabIndex={ open ? '0' : '-1' }
                >
                  <Icon icon="account" />
                  <label className="sidebar__label"><FormattedMessage id="menu.login" /></label>
                </Link>
                <Link
                  className={ classNames('sidebar__item sidebar__item--highlighted', pathname === '/join' && 'sidebar__item--active') }
                  to="/join"
                  onClick={ closeMenu }
                  tabIndex={ open ? '0' : '-1' }
                >
                  <Icon icon="join" />
                  <label className="sidebar__label"><FormattedMessage id="menu.register" /></label>
                </Link>
              </Fragment>
            ) }
            { loggedIn && (
              <Fragment>
                <Link
                  className={ classNames('sidebar__item', pathname === '/account' && 'sidebar__item--active') }
                  to="/account"
                  onClick={ closeMenu }
                  tabIndex={ open ? '0' : '-1' }
                >
                  <Icon icon="account"/>
                  <label className="sidebar__label"><FormattedMessage id="menu.account" /></label>
                </Link>
                <Link
                  className={ classNames('sidebar__item', pathname === '/next' && 'sidebar__item--active') }
                  to="/next"
                  onClick={ closeMenu }
                  tabIndex={ open ? '0' : '-1' }
                >
                  <Icon icon="next" />
                  <label className="sidebar__label"><FormattedMessage id="menu.next" /></label>
                </Link>
                <Link
                  className={ classNames('sidebar__item', 'booky--hide-desktop', pathname === '/customize' && 'sidebar__item--active') }
                  to="/customize"
                  onClick={ closeMenu }
                  tabIndex={ open ? '0' : '-1' }
                >
                  <Icon icon="settings" />
                  <label className="sidebar__label"><FormattedMessage id="menu.customize" /></label>
                </Link>
                <Link
                  className={ classNames('sidebar__item', 'booky--hide-desktop', pathname === '/logout' && 'sidebar__item--active') }
                  to="/logout"
                  onClick={ closeMenu }
                  tabIndex={ open ? '0' : '-1' }
                >
                  <Icon icon="logout" />
                  <label className="sidebar__label"><FormattedMessage id="menu.logout" /></label>
                </Link>
              </Fragment>
            ) }
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
  closeMenu: PropTypes.func.isRequired,
  dashboards: PropTypes.bool,
  intl: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
  direction: PropTypes.string,
  className: PropTypes.string
};

Sidebar.defaultProps = {
  direction: 'right'
};
