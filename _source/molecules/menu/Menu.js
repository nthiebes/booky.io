import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage, injectIntl } from 'react-intl';

import Link from '../../atoms/link';
import Icon from '../../atoms/icon';
import { H3 } from '../../atoms/headline';
import Dashboards from '../../organisms/dashboards';

class Menu extends Component {
  constructor(props) {
    super(props);

    this.onMenuClick = this.onMenuClick.bind(this);
  }

  onMenuClick(e) {
    e.stopPropagation();
  }

  render() {
    const { loggedIn, menuOpen, closeMenu, dashboards, intl } = this.props;

    return (
      <aside className={ `menu ${menuOpen ? 'menu--open' : ''}` } onClick={ this.onMenuClick }>
        <header className="menu__header">
          <Icon icon="back" onClick={ closeMenu } />
          <Link to="/" className="menu__logo" onClick={ closeMenu }>{ 'booky.io (logo)' }</Link>
        </header>
        <hr className="menu__hr" />
        <div className="menu__scroll-wrapper">
          { dashboards && <Dashboards /> }
          { dashboards && <hr className="menu__hr" /> }
          <H3 className="menu__headline"><FormattedMessage id="menu.navigation" /></H3>
          <ul className="menu__nav">
            <Link className="menu__item" to="/" onClick={ closeMenu }>
              <Icon icon="heart-border" />
              <label className="menu__label"><FormattedMessage id="menu.home" /></label>
            </Link>
            <Link className="menu__item" to="/about" onClick={ closeMenu }>
              <Icon icon="about" />
              <label className="menu__label"><FormattedMessage id="menu.about" /></label>
            </Link>
            <Link className="menu__item" to="/help" onClick={ closeMenu }>
              <Icon icon="help" />
              <label className="menu__label"><FormattedMessage id="menu.help" /></label>
            </Link>
            { loggedIn && [
              <Link key="0" className="menu__item" to="/account" onClick={ closeMenu }>
                <Icon icon="account"/>
                <label className="menu__label"><FormattedMessage id="menu.account" /></label>
              </Link>,
              <Link key="1" className="menu__item" to="/next" onClick={ closeMenu }>
                <Icon icon="next" />
                <label className="menu__label"><FormattedMessage id="menu.next" /></label>
              </Link>,
              <Link key="2" className="menu__item booky--hide-desktop" to="" onClick={ closeMenu }>
                <Icon icon="settings" />
                <label className="menu__label"><FormattedMessage id="menu.customize" /></label>
              </Link>,
              <Link key="3" className="menu__item booky--hide-desktop" to="/logout" onClick={ closeMenu }>
                <Icon icon="logout" />
                <label className="menu__label"><FormattedMessage id="menu.logout" /></label>
              </Link>
            ] }
          </ul>
          { loggedIn && (
            <Fragment>
              <Icon className="menu__item booky--hide-mobile-tablet" icon="settings" title={ intl.formatMessage({ id: 'menu.customize' }) } color="light" />
              <Link className="menu__item booky--hide-mobile-tablet" to="/logout">
                <Icon icon="logout" title={ intl.formatMessage({ id: 'menu.logout' }) } />
              </Link>
            </Fragment>
          ) }
        </div>
      </aside>
    );
  }
}

export default injectIntl(Menu);

Menu.propTypes = {
  loggedIn: PropTypes.bool.isRequired,
  menuOpen: PropTypes.bool.isRequired,
  closeMenu: PropTypes.func.isRequired,
  dashboards: PropTypes.bool,
  intl: PropTypes.object.isRequired
};
