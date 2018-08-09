import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';
import classNames from 'classnames';
import { FormattedMessage, injectIntl } from 'react-intl';

import Icon from '../../atoms/icon';
import Link from '../../atoms/link';

class Menu extends Component {
  render() {
    const { className, location } = this.props;
    const { pathname } = location;
    const menuItems = [
      {
        name: 'about',
        route: '/about'
      },
      {
        name: 'help',
        route: '/help'
      }
    ];

    return (
      <nav className={ classNames('menu', className && className) }>
        { menuItems.map(({ name, route }, index) => (
          <Link
            key={ index }
            className={ classNames('menu__item', pathname === route && 'menu__item--active') }
            to={ route }
            color="light"
          >
            <Icon icon={ name } color="light" />
            <FormattedMessage id={ `menu.${name}` } />
          </Link>  
        )) }
      </nav>
    );
  }
}

export default injectIntl(withRouter(Menu));

Menu.propTypes = {
  intl: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
  className: PropTypes.string
};
