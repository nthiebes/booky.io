import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';
import { FormattedHTMLMessage, injectIntl } from 'react-intl';

import Menu from '../../molecules/menu';
import Icon from '../../atoms/icon';
import Link from '../../atoms/link';
import Search from '../../molecules/search';
import { ButtonSmallLight } from '../../atoms/button';

class Header extends Component {
  constructor(props) {
    super(props);

    this.onBookmarkModalToggle = this.onBookmarkModalToggle.bind(this);
    this.state = {
      bookmarkModalOpen: false
    };
  }

  onBookmarkModalToggle() {
    this.setState({
      bookmarkModalOpen: !this.state.bookmarkModalOpen
    });
  }

  render() {
    const {
      onMenuClick,
      loggedIn,
      color,
      openModal,
      search,
      intl
    } = this.props;

    return (
      <header className={ `header header--color-${color}` }>
        { loggedIn && (
          <Icon
            className="booky--hide-desktop"
            icon="menu"
            color="light"
          />
        ) }
        { loggedIn && search && <Search className="booky--hide-desktop" /> }
        { loggedIn && (
          <Icon
            className="booky--hide-desktop"
            icon="add"
            color="light"
            onClick={ () => { openModal('AddBookmark', {
              source: 'header'
            }); } }
          />
        ) }
        { !loggedIn && (
          <Fragment>
            <Link to="/" title={ intl.formatMessage({ id: 'menu.home' }) } className="header__logo">
              <img src="../../_assets/logo-primary.png" alt="Logo" height="36" />
            </Link>
            <Menu className="booky--hide-mobile" />
            <ButtonSmallLight className="booky--hide-tablet-desktop" onClick={ onMenuClick }>
              <FormattedHTMLMessage id="header.menu" />
            </ButtonSmallLight>
            <ButtonSmallLight className="booky--hide-mobile header__login" to="/login">
              <FormattedHTMLMessage id="header.login" />
            </ButtonSmallLight>
            <ButtonSmallLight className="booky--hide-mobile-tablet" to="/join" icon="join" solid>
              <FormattedHTMLMessage id="header.register" />
            </ButtonSmallLight>
          </Fragment>
        ) }
      </header>
    );
  }
}

export default injectIntl(withRouter(Header));

Header.propTypes = {
  color: PropTypes.number,
  loggedIn: PropTypes.bool.isRequired,
  onDashboardsClick: PropTypes.func.isRequired,
  onHeaderClick: PropTypes.func.isRequired,
  onMenuClick: PropTypes.func.isRequired,
  sticky: PropTypes.bool,
  openModal: PropTypes.func.isRequired,
  search: PropTypes.bool,
  dashboards: PropTypes.bool,
  intl: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired
};

Header.defaultProps = {
  color: 0,
  sticky: true
};
