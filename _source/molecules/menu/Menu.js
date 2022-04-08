import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { FormattedMessage, injectIntl } from 'react-intl';

import { config } from '../../config';
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
  },
  {
    name: 'new',
    route: '/about#new'
  }
];

class Menu extends PureComponent {
  static propTypes = {
    intl: PropTypes.object.isRequired,
    className: PropTypes.string,
    loggedIn: PropTypes.bool,
    isBeta: PropTypes.bool.isRequired,
    newsVersion: PropTypes.number.isRequired,
    voted: PropTypes.number.isRequired
  };

  render() {
    const {
      className,
      loggedIn,
      intl,
      isBeta,
      newsVersion
      // voted
    } = this.props;
    let menuItems = loggedIn ? menuItemsLoggedIn : menuItemsLoggedOut;

    menuItems = menuItems.filter((item) => {
      if (item.name === 'feedback' && !isBeta) {
        return false;
      }
      if (item.name === 'new' && newsVersion >= config.NEWS_VERSION) {
        return false;
      }
      return true;
    });

    return (
      <nav
        aria-label={intl.formatMessage({ id: 'menu.title' })}
        className={classNames('menu', className)}
      >
        {menuItems.map(({ name, route }) => (
          <Link
            key={name}
            className="menu__item"
            activeClassName={classNames(name !== 'new' && 'menu__item--active')}
            to={route}
            color="light"
            isNavLink
            noUnderline
            hasBadge={name === 'new'}
            // hasBadge={
            //   (voted < config.POLL_VERSION && name === 'next') || name === 'new'
            // }
          >
            <Icon icon={name} color="light" />
            <FormattedMessage id={`menu.${name}`} />
          </Link>
        ))}
      </nav>
    );
  }
}

export default injectIntl(Menu);
