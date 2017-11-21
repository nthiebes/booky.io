import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from '../../organisms/header';
import Sidebar from '../../organisms/sidebar';
import Toolbar from '../../organisms/toolbar';

/**
 * React component
 * 
 * @class Page
 * @classdesc templates/page/Page
 */
export default class Page extends Component {
  render() {
    const { children, toolbar } = this.props;

    return (
      <div>
        <Header />
        { toolbar && <Toolbar document={ document } window={ window } /> }
        <Sidebar />
        <main className="t-page">
          { children }
        </main>
      </div>
    );
  }
}

Page.propTypes = {
  'toolbar': PropTypes.bool,
  'children': PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.element,
    PropTypes.string
  ]).isRequired
};

Page.defaultProps = {
  'toolbar': false
};
