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
    const { children, toolbar, search, className, dashboards } = this.props;

    return (
      <Fragment>
        <Header search={ search } dashboards={ dashboards } />
        <Sidebar />
        <main className={ classNames('page', className) }>
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
  search: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.element,
    PropTypes.string
  ]).isRequired,
  className: PropTypes.string,
  dashboards: PropTypes.bool
};

Page.defaultProps = {
  className: ''
};
