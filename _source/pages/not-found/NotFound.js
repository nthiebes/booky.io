import React, { Component } from 'react';
import Page from '../../templates/page';
import { H1 } from '../../atoms/headline';
import P from '../../atoms/paragraph';

export default class NotFound extends Component {
  render() {
    return (
      <Page>
        <H1>{ 'Page not found' }</H1>
        <P>{ '404: This is not the page you have been looking for' }</P>
      </Page>
    );
  }
}
