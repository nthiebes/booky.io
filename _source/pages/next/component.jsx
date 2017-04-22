import React, { Component } from 'react';
import Page from '../../templates/page';
import Headline from '../../atoms/headline';
import P from '../../atoms/paragraph';

/**
 * React component
 * 
 * @class Next
 * @classdesc pages/next/Next
 */
export default class Next extends Component {
  render() {
    return (
      <Page>
        <Headline type={ 1 } text="Next" />
        <P>{'Next ...'}</P>
      </Page>
    );
  }
}
