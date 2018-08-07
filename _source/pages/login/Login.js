import React, { Component } from 'react';
import Page from '../../templates/page';
import { H1 } from '../../atoms/headline';
import P from '../../atoms/paragraph';

export default class Login extends Component {
  render() {
    return (
      <Page>
        <H1>{ 'Login' }</H1>
        <P>{ 'Login page' }</P>
      </Page>
    );
  }
}
