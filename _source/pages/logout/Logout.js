import React, { Component } from 'react';
import Page from '../../templates/page';
import { H1 } from '../../atoms/headline';
import P from '../../atoms/paragraph';

export default class Logout extends Component {
  render() {
    return (
      <Page>
        <H1>{ 'Logout' }</H1>
        <P>{ 'Logout page' }</P>
      </Page>
    );
  }
}
