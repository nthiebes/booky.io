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
  {
    name: 'about',
    route: '/about'
  },
  {
    name: 'help',
    route: '/help'
  },
  {
    name: 'account',
    route: '/account'
  },
  {
    name: 'next',
    route: '/next'
  },
  {
    name: 'feedback',
    route: '/feedback'
  }
];

class Menu extends Component {
  static propTypes = {
    intl: PropTypes.object.isRequired,
    className: PropTypes.string,
    loggedIn: PropTypes.bool,
    isBeta: PropTypes.bool.isRequired
  }

  render() {
    const { className, loggedIn, intl, isBeta } = this.props;
    let menuItems = loggedIn ? menuItemsLoggedIn : menuItemsLoggedOut;

    menuItems = menuItems.filter((item) => {
      if (item.name === 'feedback' && !isBeta) {
        return false;
      } 
      return true;
    });

    return (
      <nav aria-label={ intl.formatMessage({ id: 'menu.title' }) } className={ classNames('menu', className) }>
        { menuItems.map(({ name, route }) => (
          <Link
            key={ name }
            className="menu__item"
            activeClassName="menu__item--active"
            to={ route }
            color="light"
            isNavLink
            noUnderline
          >
            <Icon icon={ name } color="light" />
            <FormattedMessage id={ `menu.${name}` } />
          </Link>  
        )) }
      </nav>
    );
  }
}

export default injectIntl(Menu);
