import React, { Component } from 'react';
import Page from '../../templates/page';
import { H1 } from '../../atoms/headline';
import P from '../../atoms/paragraph';

export default class Help extends Component {
  render() {
    return (
      <Page>
        <H1>{ 'Help' }</H1>
        <P>{ 'Help page' }</P>
      </Page>
    );
  }
}
