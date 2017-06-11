import React, { Component } from 'react';
import Page from '../../templates/page';
import Headline from '../../atoms/headline';
import P from '../../atoms/paragraph';

/**
 * React component
 * 
 * @class Account
 * @classdesc pages/account/Account
 */
export default class Account extends Component {
  render() {
    return (
      <Page>
        <Headline type={ 1 } text="Account" />
        <P>{'Account ...'}</P>
      </Page>
    );
  }
}
