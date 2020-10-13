import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage, injectIntl } from 'react-intl';
import { withRouter } from 'react-router-dom';

import Page from '../../templates/page';
import Fullscreen from '../../templates/fullscreen';
import { H1 } from '../../atoms/headline';
import P from '../../atoms/paragraph';
import Link from '../../atoms/link';
import Input from '../../atoms/input';
import { ErrorMessage, SuccessIllustration } from '../../atoms/messages';
import { ButtonLargeBlue } from '../../atoms/button';
import Checkbox from '../../atoms/checkbox';
import Icon from '../../atoms/icon';
import Form from '../../molecules/form';
import Section from '../../molecules/section';

class Login extends Component {
  static propTypes = {
    intl: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired,
    login: PropTypes.func.isRequired,
    isExtension: PropTypes.bool.isRequired,
    match: PropTypes.object.isRequired,
    activate: PropTypes.func.isRequired,
    confirm: PropTypes.func.isRequired,
    deny: PropTypes.func.isRequired
  }

  state = {
    username: '',
    password: '',
    pending: false,
    showPassword: false,
    error: null,
    actionPending: true,
    actionError: null,
    actionSuccess: false
  }

  // eslint-disable-next-line max-statements
  componentDidMount() {
    const { activate, confirm, deny, match } = this.props;
    const { token, action, params } = match.params;
    let decodedParams;

    if (action) {
      decodedParams = JSON.parse(atob(params));
    }

    // Account activation
    if (token) {
      activate({
        token,
        onSuccess: () => {
          window.scrollTo(0, 0);
          this.setState({
            actionPending: false,
            actionSuccess: true
          });
        },
        onError: (actionError) => {
          window.scrollTo(0, 0);
          this.setState({
            actionPending: false,
            actionError
          });
        }
      });
    }

    // Confirm password reset
    if (action === 'confirm') {
      confirm({
        params: decodedParams,
        onSuccess: () => {
          window.scrollTo(0, 0);
          this.setState({
            actionPending: false,
            actionSuccess: true
          });
        },
        onError: (actionError) => {
          window.scrollTo(0, 0);
          this.setState({
            actionPending: false,
            actionError
          });
        }
      });
    }

    // Deny password reset
    if (action === 'deny') {
      deny({
        params: decodedParams,
        onSuccess: () => {
          window.scrollTo(0, 0);
          this.setState({
            actionPending: false,
            actionSuccess: true
          });
        },
        onError: (actionError) => {
          window.scrollTo(0, 0);
          this.setState({
            actionPending: false,
            actionError
          });
        }
      });
    }
  }

  handleInputChange = (value, name) => {
    this.setState({
      [name]: value,
      pending: false
    });
  }

  handleCheckboxChange = ({ checked }) => {
    this.setState({
      showPassword: checked
    });
  }

  handleSubmit = (params) => {
    const { history, login, match, isExtension } = this.props;
    const { action } = match.params;

    this.setState({
      pending: true,
      error: null
    });

    login({
      params,
      onSuccess: () => {
        document.title = 'booky';

        if (action) {
          history.push('/account');
        } else {
          history.push(isExtension ? '/extension/add' : '/');
        }
      },
      onError: (error) => {
        this.setState({
          pending: false,
          error
        });
      }
    });
  }

  render() {
    const { intl, match, isExtension } = this.props;
    const { token, action } = match.params;
    const TemplateComponent = isExtension ? Fullscreen : Page;
    const {
      username,
      password,
      pending,
      showPassword,
      error,
      actionPending,
      actionSuccess,
      actionError
    } = this.state;

    return (
      <TemplateComponent className={ isExtension ? 'login--extension' : '' }>
        <Section compact>
          { (token || action) && actionPending && (
            <Icon icon="spinner" className="login__spinner" />
          ) }
          { token && actionSuccess && (
            <SuccessIllustration message="join.success.login" illustration="success" />
          ) }
          { action === 'confirm' && actionSuccess && (
            <SuccessIllustration message="recovery.confirm" illustration="success" />
          ) }
          { action === 'deny' && actionSuccess && (
            <SuccessIllustration message="recovery.deny" illustration="deny" width="220" />
          ) }
          { actionError && (
            <ErrorMessage message={ actionError } hasIcon />
          ) }
          { ((!actionPending && actionSuccess) || (!token && !action)) && (
            <Form onSubmit={ this.handleSubmit }>
              <H1 noMargin={ isExtension }>
                <FormattedMessage id="login.headline" />
              </H1>
              <Input
                value={ username }
                name="username"
                id="username"
                autoComplete="username"
                label={ intl.formatMessage({ id: 'login.usernameEmail' }) }
                onChange={ this.handleInputChange }
                maxLength="50"
                required
                disabled={ pending }
                inputMode="email"
              />
              <Input
                value={ password }
                name="password"
                id="password"
                autoComplete="current-password"
                label={ intl.formatMessage({ id: 'login.password' }) }
                onChange={ this.handleInputChange }
                maxLength="225"
                required
                type={ showPassword ? 'text' : 'password' }
                disabled={ pending }
              />
              <Checkbox
                label={ intl.formatMessage({ id: 'login.showPassword'}) }
                id="show-password"
                onChange={ this.handleCheckboxChange }
              />
              <ButtonLargeBlue
                icon="account"
                type="submit"
                pending={ pending }
                disabled={ pending }
                contentBefore
              >
                <FormattedMessage id="header.login" values={ { b: (msg) => <b>{msg}</b> } } />
              </ButtonLargeBlue>
              { error && <ErrorMessage message={ error } hasIcon /> }
              { isExtension ? (
                <>
                  <Link className="login__forgot" href="/forgot" target="_blank">
                    <FormattedMessage id="login.forgot" />
                  </Link>
                  <P className="login__join">
                    <FormattedMessage id="login.new" />
                    { ' ' }
                    <Link href="/join" target="_blank">
                      <FormattedMessage id="login.join" />
                    </Link>
                  </P>
                </>
              ) : (
                <>
                  <Link className="login__forgot" to="/forgot">
                    <FormattedMessage id="login.forgot" />
                  </Link>
                  <P className="login__join">
                    <FormattedMessage id="login.new" />
                    { ' ' }
                    <Link to="/join">
                      <FormattedMessage id="login.join" />
                    </Link>
                  </P>
                </>
              ) }
            </Form>
          ) }
        </Section>
      </TemplateComponent>
    );
  }
}

export default injectIntl(withRouter(Login));
