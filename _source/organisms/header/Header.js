import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
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
    this.onMenuClick = this.onMenuClick.bind(this);
    this.state = {
      bookmarkModalOpen: false
    };
  }

  onBookmarkModalToggle() {
    this.setState({
      bookmarkModalOpen: !this.state.bookmarkModalOpen
    });
  }

  onMenuClick(event) {
    event.stopPropagation();

    this.props.onMenuClick();
  }

  render() {
    const {
      onHeaderClick,
      loggedIn,
      color,
      openModal,
      search,
      intl,
      sidebarOpen
    } = this.props;

    return (
      <header className={ classNames(`header header--color-${color}`, sidebarOpen && 'header--overlay') } onClick={ onHeaderClick }>
        <div className="header__wrapper">
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
              <ButtonSmallLight className="booky--hide-tablet-desktop" onClick={ this.onMenuClick }>
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
        </div>
      </header>
    );
  }
}


Header.propTypes = {
  color: PropTypes.number,
  loggedIn: PropTypes.bool.isRequired,
  onHeaderClick: PropTypes.func.isRequired,
  onMenuClick: PropTypes.func.isRequired,
  sticky: PropTypes.bool,
  openModal: PropTypes.func.isRequired,
  search: PropTypes.bool,
  dashboards: PropTypes.bool,
  intl: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
  sidebarOpen: PropTypes.bool
};

Header.defaultProps = {
  color: 0,
  sticky: true
};

export default injectIntl(withRouter(Header));
