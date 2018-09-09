import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Header from '../../organisms/header';
import Sidebar from '../../organisms/sidebar';
import Footer from '../../organisms/footer';
// import Modal from '../../organisms/modal';
// import Toolbar from '../../organisms/toolbar';

export default class Page extends Component {
  render() {
    const { children, className, dashboards, compact, fullWidth, home } = this.props;

    return (
      <Fragment>
        <Header dashboards={ dashboards } home={ home } />
        <Sidebar />
        <main className={ classNames('page', compact && 'page--compact', fullWidth && 'page--full-width', className && className) }>
          { children }
        </main>
        <Footer />
      </Fragment>
    );
  }
}

/*
        { toolbar && <Toolbar document={ document } window={ window } /> }
        <main className={ `page ${className} ${toolbar ? '' : 'page--no-toolbar'}` }>
          { children }
        </main>
        <Footer />
        <Modal />
 */

Page.propTypes = {
  toolbar: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.element,
    PropTypes.string
  ]).isRequired,
  className: PropTypes.string,
  dashboards: PropTypes.bool,
  compact: PropTypes.bool,
  fullWidth: PropTypes.bool,
  home: PropTypes.bool
};
