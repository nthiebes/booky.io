import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Page from '../../templates/page';
import Headline from '../../atoms/headline';
import P from '../../atoms/paragraph';

/**
 * React component
 * 
 * @class Help
 * @classdesc pages/help/Help
 */
export default class Help extends Component {
  render() {
    return (
      <Page>
        <Headline type={ 1 } text="Help" />
        <P>{'Help ...'}</P>
      </Page>
    );
  }
}
