import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Header from '../../organisms/header';
import Sidebar from '../../organisms/sidebar';
import Footer from '../../organisms/footer';
import Modal from '../../organisms/modal';
import Toolbar from '../../organisms/toolbar';

export default class Page extends Component {
  render() {
    const { children, className, dashboards, home, toolbar, blurContent, stickyHeader, darkMode } = this.props;

    return (
      <Fragment>
        <Header
          className={ classNames(
            blurContent && 'page--blur'
          ) }
          home={ home }
        />
        { toolbar && (
          <Toolbar className={ classNames(
            blurContent && 'page--blur'
          ) } />
        ) }
        <Sidebar
          className={ classNames(
            blurContent && 'page--blur'
          ) }
          dashboards={ dashboards }
        />
        <main className={ classNames(
          'page',
          stickyHeader && 'page--sticky-header',
          darkMode && 'page--dark',
          blurContent && 'page--blur',
          className && className
        ) }>
          { children }
        </main>
        <Footer
          className={ classNames(
            blurContent && 'page--blur'
          ) }
          home={ home }
        />
        <Modal />
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
  darkMode: PropTypes.bool.isRequired
};
