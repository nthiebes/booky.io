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
        { '404: Page not found' }
      </Page>
    );
  }
}
