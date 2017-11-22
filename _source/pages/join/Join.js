import React, { Component } from 'react';
import Page from '../../templates/page';
import { H1 } from '../../atoms/headline';
import P from '../../atoms/paragraph';

export default class Join extends Component {
  render() {
    return (
      <Page>
        <H1>{ 'Join' }</H1>
        <P>{ 'Join page' }</P>
      </Page>
    );
  }
}
