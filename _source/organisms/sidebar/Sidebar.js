import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
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
    const { loggedIn, open, closeMenu, dashboards, intl } = this.props;

    return (
      <aside className={ classNames('sidebar', open && 'sidebar--open') }>
        <header className="sidebar__header">
          <Icon icon="back" onClick={ closeMenu } tabIndex="0" />
          <Link to="/" className="sidebar__logo" onClick={ closeMenu }>{ 'booky.io (logo)' }</Link>
        </header>
        <hr className="sidebar__hr" />
        <div className="sidebar__scroll-wrapper">
          { dashboards && <Dashboards /> }
          { dashboards && <hr className="sidebar__hr" /> }
          <H3 className="sidebar__headline"><FormattedMessage id="menu.navigation" /></H3>
          <ul className="sidebar__nav">
            <Link className="sidebar__item" to="/about" onClick={ closeMenu }>
              <Icon icon="about" />
              <label className="sidebar__label"><FormattedMessage id="menu.about" /></label>
            </Link>
            <Link className="sidebar__item" to="/help" onClick={ closeMenu }>
              <Icon icon="help" />
              <label className="sidebar__label"><FormattedMessage id="menu.help" /></label>
            </Link>
            { loggedIn && [
              <Link key="0" className="sidebar__item" to="/account" onClick={ closeMenu }>
                <Icon icon="account"/>
                <label className="sidebar__label"><FormattedMessage id="menu.account" /></label>
              </Link>,
              <Link key="1" className="sidebar__item" to="/next" onClick={ closeMenu }>
                <Icon icon="next" />
                <label className="sidebar__label"><FormattedMessage id="menu.next" /></label>
              </Link>,
              <Link key="2" className="sidebar__item booky--hide-desktop" to="" onClick={ closeMenu }>
                <Icon icon="settings" />
                <label className="sidebar__label"><FormattedMessage id="menu.customize" /></label>
              </Link>,
              <Link key="3" className="sidebar__item booky--hide-desktop" to="/logout" onClick={ closeMenu }>
                <Icon icon="logout" />
                <label className="sidebar__label"><FormattedMessage id="menu.logout" /></label>
              </Link>
            ] }
          </ul>
          { loggedIn && (
            <Fragment>
              <Icon className="sidebar__item booky--hide-mobile-tablet" icon="settings" title={ intl.formatMessage({ id: 'menu.customize' }) } color="light" />
              <Link className="sidebar__item booky--hide-mobile-tablet" to="/logout">
                <Icon icon="logout" title={ intl.formatMessage({ id: 'menu.logout' }) } />
              </Link>
            </Fragment>
          ) }
        </div>
      </aside>
    );
  }
}

export default injectIntl(Sidebar);

Sidebar.propTypes = {
  loggedIn: PropTypes.bool.isRequired,
  open: PropTypes.bool.isRequired,
  closeMenu: PropTypes.func.isRequired,
  dashboards: PropTypes.bool,
  intl: PropTypes.object.isRequired
};
