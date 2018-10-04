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
      intl,
      sidebarOpen,
      home,
      className,
      router
    } = this.props;

    return (
      <header className={ classNames(`header header--color-${color}`, sidebarOpen && 'header--overlay', className && className) } onClick={ onHeaderClick }>
        <div className="header__wrapper">
          { loggedIn && home && (
            <Fragment>
              <Icon
                className="booky--hide-desktop header__add-icon"
                icon="add"
                color="light"
                onClick={ () => { openModal('AddBookmark', {
                  source: 'header'
                }); } }
                tabIndex="0"
              />
              <Search className="booky--hide-desktop" />
            </Fragment>
          ) }
          <Link
            to="/"
            title={ intl.formatMessage({ id: 'menu.home' }) }
            className={ classNames('header__logo', loggedIn && home && 'booky--hide-mobile-tablet') }
          >
            <img src="../../_assets/logo-primary.png" alt="Logo" height="36" />
          </Link>
          <Menu loggedIn={ loggedIn } className="booky--hide-mobile-tablet" />
          { loggedIn && (
            <Fragment>
              <Icon
                className="booky--hide-mobile-tablet"
                icon="settings"
                color="light"
                onClick={ () => { router.push('/customize'); } }
                title={ intl.formatMessage({ id: 'menu.customize' }) }
                tabIndex="0"
              />
              <Icon
                className="booky--hide-mobile-tablet"
                icon="logout"
                color="light"
                onClick={ () => { router.push('/logout'); } }
                title={ intl.formatMessage({ id: 'menu.logout' }) }
                tabIndex="0"
              />
              <ButtonSmallLight
                className="header__add booky--hide-mobile-tablet"
                onClick={ () => { openModal('AddBookmark', {
                  source: 'header'
                }); } }
                icon="add"
                solid
              >
                <FormattedHTMLMessage id="bookmark.add" />
              </ButtonSmallLight>
            </Fragment>
          ) }
          { !loggedIn && (
            <Fragment>
              <ButtonSmallLight className="booky--hide-mobile-tablet header__login" to="/login">
                <FormattedHTMLMessage id="header.login" />
              </ButtonSmallLight>
              <ButtonSmallLight className="booky--hide-mobile-tablet" to="/join" icon="join" solid>
                <FormattedHTMLMessage id="header.register" />
              </ButtonSmallLight>
            </Fragment>
          ) }
          <ButtonSmallLight className="booky--hide-desktop" onClick={ this.onMenuClick }>
            <FormattedHTMLMessage id="header.menu" />
          </ButtonSmallLight>
        </div>
      </header>
    );
  }
}


Header.propTypes = {
  color: PropTypes.string.isRequired,
  loggedIn: PropTypes.bool.isRequired,
  onHeaderClick: PropTypes.func.isRequired,
  onMenuClick: PropTypes.func.isRequired,
  sticky: PropTypes.bool,
  openModal: PropTypes.func.isRequired,
  dashboards: PropTypes.bool,
  intl: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
  sidebarOpen: PropTypes.bool,
  home: PropTypes.bool,
  className: PropTypes.string,
  router: PropTypes.object.isRequired
};

Header.defaultProps = {
  sticky: true
};

export default injectIntl(withRouter(Header));
