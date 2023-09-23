import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { FormattedMessage } from 'react-intl';

import P from '../../atoms/paragraph';
import Header from '../../organisms/header';
import Sidebar from '../../organisms/sidebar';
import Footer from '../../organisms/footer';
import Modal from '../../organisms/modal';
import Toolbar from '../../organisms/toolbar';
import ErrorBoundary from '../../molecules/error-boundary';
import CookieBanner from '../../molecules/cookie-banner';
import { config } from '../../config';

export default class Page extends Component {
  render() {
    const {
      children,
      className,
      dashboards,
      home,
      toolbar,
      blurContent,
      stickyHeader,
      darkMode,
      showStats
    } = this.props;

    if (config.updateInProgress) {
      return (
        <div className="page--update">
          <P>
            <FormattedMessage id="misc.updateInProgress" />
          </P>
        </div>
      );
    }

    return (
      <Fragment>
        <CookieBanner />
        <Modal />
        <Header
          className={classNames(blurContent && 'page--blur')}
          home={home}
        />
        {toolbar && (
          <Toolbar className={classNames(blurContent && 'page--blur')} />
        )}
        <Sidebar
          className={classNames(blurContent && 'page--blur')}
          dashboards={dashboards}
        />
        <main
          id="main"
          className={classNames(
            'page',
            stickyHeader && 'page--sticky-header',
            darkMode && 'page--dark',
            blurContent && 'page--blur',
            className
          )}
        >
          <ErrorBoundary>{children}</ErrorBoundary>
        </main>
        <Footer
          className={classNames(blurContent && 'page--blur')}
          home={home}
          showStats={showStats}
        />
      </Fragment>
    );
  }
}

Page.propTypes = {
  toolbar: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.element,
    PropTypes.string
  ]).isRequired,
  className: PropTypes.string,
  dashboards: PropTypes.bool,
  home: PropTypes.bool,
  blurContent: PropTypes.bool,
  stickyHeader: PropTypes.bool.isRequired,
  darkMode: PropTypes.bool.isRequired,
  showStats: PropTypes.bool
};
