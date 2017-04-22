import React, { Component } from 'react';
import Page from '../../templates/page';

/**
 * React component
 * 
 * @class NotFound
 * @classdesc pages/not-found/NotFound
 */
export default class NotFound extends Component {
  render() {
    return (
      <Page>
        { '404: This is not the page you have been looking for' }
      </Page>
    );
  }
}
