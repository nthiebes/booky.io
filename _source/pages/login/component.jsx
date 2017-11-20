import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Page from '../../templates/page';
import Headline from '../../atoms/headline';
import P from '../../atoms/paragraph';

/**
 * React component
 * 
 * @class Login
 * @classdesc pages/login/Login
 */
export default class Login extends Component {
  render() {
    return (
      <Page>
        <Headline type={ 1 } text="Login" />
        <P>{'Login ...'}</P>
      </Page>
    );
  }
}
