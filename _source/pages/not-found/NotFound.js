import React, { Component } from 'react';
import Page from '../../templates/page';
import { H1 } from '../../atoms/headline';
import P from '../../atoms/paragraph';

export default class NotFound extends Component {
  render() {
    return (
      <Page>
        <H1>{ '404' }</H1>
        <P>{ 'This is not the web page you are looking for.' }</P>
      </Page>
    );
  }
}
