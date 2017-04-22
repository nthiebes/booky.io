import React, { Component, PropTypes } from 'react';
import Header from '../../organisms/header';
import Sidebar from '../../organisms/sidebar';
import './styles.scss';

/**
 * React component
 * 
 * @class Page
 * @classdesc templates/page/Page
 */
export default class Page extends Component {
  render() {
    return (
      <div>
        <Header />
        <Sidebar />
        <main className="t-page">
          { this.props.children }
        </main>
      </div>
    );
  }
}

Page.propTypes = {
  'children': PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.element,
    PropTypes.string
  ]).isRequired
};
