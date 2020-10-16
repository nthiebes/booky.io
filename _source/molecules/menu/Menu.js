import React, { PureComponent } from 'react';
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

class Menu extends PureComponent {
  static propTypes = {
    intl: PropTypes.object.isRequired,
    className: PropTypes.string,
    voted: PropTypes.bool.isRequired,
    loggedIn: PropTypes.bool
  }

  render() {
    const { className, loggedIn, intl, voted } = this.props;
    const menuItems = loggedIn ? menuItemsLoggedIn : menuItemsLoggedOut;

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
            hasBadge={ !voted && name === 'next' }
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
