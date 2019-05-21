import React from 'react';
import { connect } from 'react-redux';

import Component from './Login';
import { login } from '../../_state/user/actions';

const mapDispatchToProps = {
  login
};

const PageLogin = (props) => (<Component { ...props } />);
const ExtensionLogin = (props) => (<Component { ...props } isExtension />);

const PageLoginContainer = connect(
  null,
  mapDispatchToProps
)(PageLogin);

const ExtensionLoginContainer = connect(
  null,
  mapDispatchToProps
)(ExtensionLogin);

export {
  PageLoginContainer,
  ExtensionLoginContainer
};
