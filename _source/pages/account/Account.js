import React, { Component } from 'react';
import Page from '../../templates/page';
import { H1 } from '../../atoms/headline';
import P from '../../atoms/paragraph';

export default class Account extends Component {
  render() {
    return (
      <Page>
        <H1>{ 'Account' }</H1>
        <P>{ 'Account page' }</P>
      </Page>
    );
  }
}
