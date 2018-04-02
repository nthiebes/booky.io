import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import Header from '../../organisms/header';
import Footer from '../../organisms/footer';
import Modal from '../../organisms/modal';
import Toolbar from '../../organisms/toolbar';

export default class Page extends Component {
  render() {
    const { children, toolbar, search, className, dashboards } = this.props;

    return (
      <Fragment>
        <Header search={ search } dashboards={ dashboards } />
        { toolbar && <Toolbar document={ document } window={ window } /> }
        <main className={ `page ${className} ${toolbar ? '' : 'page--no-toolbar'}` }>
          { children }
        </main>
        <Footer />
        <Modal />
      </Fragment>
    );
  }
}

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
