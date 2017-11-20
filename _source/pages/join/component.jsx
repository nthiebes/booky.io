import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Page from '../../templates/page';
import Headline from '../../atoms/headline';
import P from '../../atoms/paragraph';

/**
 * React component
 * 
 * @class Join
 * @classdesc pages/join/Join
 */
export default class Join extends Component {
  render() {
    return (
      <Page>
        <Headline type={ 1 } text="Join Us" />
        <P>{'Join ...'}</P>
      </Page>
    );
  }
}
