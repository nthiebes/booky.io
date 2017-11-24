import React, { Component } from 'react';
import Page from '../../templates/page';
import { H1 } from '../../atoms/headline';
import P from '../../atoms/paragraph';

export default class Next extends Component {
  render() {
    return (
      <Page>
        <H1>{ 'Next' }</H1>
        <P>{ 'Next page' }</P>
      </Page>
    );
  }
}
