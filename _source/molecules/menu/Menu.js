import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { FormattedMessage, injectIntl } from 'react-intl';

import Icon from '../../atoms/icon';
import Link from '../../atoms/link';

const menuItemsLoggedOut = [
  {
    name: 'about',
    route: '/about'
  },
  {
    name: 'help',
    route: '/help'
  },
  {
    name: 'feedback',
    route: '/feedback'
  }
];
const menuItemsLoggedIn = [
  ...menuItemsLoggedOut,
  {
    name: 'account',
    route: '/account'
  }
];

class Menu extends Component {
  render() {
    const { className, loggedIn, intl } = this.props;
    const menuItems = loggedIn ? menuItemsLoggedIn : menuItemsLoggedOut;

    return (
      <nav aria-label={ intl.formatMessage({ id: 'menu.title' }) } className={ classNames('menu', className && className) }>
        { menuItems.map(({ name, route }, index) => (
          <Link
            key={ index }
            className="menu__item"
            activeClassName="menu__item--active"
            to={ route }
            color="light"
            isNavLink
            noUnderline
          >
            <Icon className="menu__icon" icon={ name } color="light" />
            <FormattedMessage id={ `menu.${name}` } />
          </Link>  
        )) }
      </nav>
    );
  }
}

export default injectIntl(Menu);

Menu.propTypes = {
  intl: PropTypes.object.isRequired,
  className: PropTypes.string,
  loggedIn: PropTypes.bool
};
