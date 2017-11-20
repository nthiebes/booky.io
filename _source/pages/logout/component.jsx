import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Page from '../../templates/page';
import Headline from '../../atoms/headline';
import P from '../../atoms/paragraph';

/**
 * React component
 * 
 * @class Logout
 * @classdesc pages/logout/Logout
 */
export default class Help extends Component {
  render() {
    return (
      <Page>
        <Headline type={ 1 } text="Logout" />
        <P>{'Logout ...'}</P>
      </Page>
    );
  }
}
