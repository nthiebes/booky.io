import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from '../../organisms/header';
import Footer from '../../organisms/footer';
import Sidebar from '../../organisms/sidebar';
import Toolbar from '../../organisms/toolbar';

export default class Page extends Component {
  render() {
    const { children, toolbar, className } = this.props;

    return (
      <div>
        <Header />
        { toolbar && <Toolbar document={ document } window={ window } /> }
        <Sidebar />
        <main className={ `page ${className} ${toolbar ? '' : 'page--no-toolbar'}` }>
          { children }
        </main>
        <Footer />
      </div>
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
  className: PropTypes.string
};

Page.defaultProps = {
  toolbar: false,
  className: ''
};
