import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from '../../organisms/header';
import Footer from '../../organisms/footer';
import Modal from '../../organisms/modal';
import Toolbar from '../../organisms/toolbar';

export default class Page extends Component {
  render() {
    const { children, toolbar, search, className } = this.props;

    return (
      <div>
        <Header search={ search } />
        { toolbar && <Toolbar document={ document } window={ window } /> }
        <main className={ `page ${className} ${toolbar ? '' : 'page--no-toolbar'}` }>
          { children }
        </main>
        <Footer />
        <Modal />
      </div>
    );
    // <Sidebar />
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
  className: PropTypes.string
};

Page.defaultProps = {
  className: ''
};
