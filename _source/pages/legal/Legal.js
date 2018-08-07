import React, { Component } from 'react';
import Page from '../../templates/page';
import { H1 } from '../../atoms/headline';
import P from '../../atoms/paragraph';

export default class Legal extends Component {
  render() {
    return (
      <Page>
        <H1>{ 'Legal' }</H1>
        <P>{ 'Legal page' }</P>
      </Page>
    );
  }
}
