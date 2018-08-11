import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage, FormattedHTMLMessage, injectIntl } from 'react-intl';

import Page from '../../templates/page';
import { H1 } from '../../atoms/headline';
import P from '../../atoms/paragraph';
import Link from '../../atoms/link';
import Input from '../../atoms/input';
import { ButtonLargeBlue } from '../../atoms/button';
import Form from '../../molecules/form';

import './Join.scss';

class Join extends Component {
  constructor(props) {
    super(props);

    this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      username: '',
      email: '',
      password: ''
    };
  }

  handleUsernameChange(value) {
    this.setState({
      username: value
    });
  }

  handleEmailChange(value) {
    this.setState({
      email: value
    });
  }

  handlePasswordChange(value) {
    this.setState({
      password: value
    });
  }

  handleSubmit(params) {
    console.log(params);
  }

  render() {
    const { intl } = this.props;
    const { username, email, password } = this.state;

    return (
      <Page compact>
        <Form onSubmit={ this.handleSubmit }>
          <H1>
            <FormattedMessage id="join.headline" />
          </H1>
          <Input
            value={ username }
            name="username"
            id="username"
            autoComplete="username"
            label={ intl.formatMessage({ id: 'login.username' }) }
            onChange={ this.handleUsernameChange }
            maxLength="50"
            required
          />
          <Input
            value={ email }
            name="email"
            id="email"
            autoComplete="email"
            label={ intl.formatMessage({ id: 'login.email' }) }
            onChange={ this.handleEmailChange }
            maxLength="150"
            required
            type="email"
            requirements={ intl.formatMessage({ id: 'misc.validEmail' }) }
          />
          <Input
            value={ password }
            name="password"
            id="password"
            autoComplete="current-password"
            label={ intl.formatMessage({ id: 'login.password' }) }
            onChange={ this.handlePasswordChange }
            maxLength="225"
            required
            type="password"
            pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}"
            requirements={ intl.formatMessage({ id: 'misc.validPassword' }) }
          />
          <ButtonLargeBlue icon="join" type="submit" contentBefore>
            <FormattedHTMLMessage id="header.register" />
          </ButtonLargeBlue>
          <P className="join__login">
            <FormattedMessage id="join.registered" />
            { ' ' }
            <Link to="/login">
              <FormattedMessage id="join.login" />
            </Link>
          </P>
        </Form>
      </Page>
    );
  }
}

Join.propTypes = {
  intl: PropTypes.object.isRequired
};

export default injectIntl(Join);
