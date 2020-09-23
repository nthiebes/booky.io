import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage, injectIntl } from 'react-intl';
import classNames from 'classnames';

import Page from '../../templates/page';
import { H1, H2 } from '../../atoms/headline';
import P from '../../atoms/paragraph';
import Link from '../../atoms/link';
import Input from '../../atoms/input';
import { ErrorMessage, SuccessIllustration } from '../../atoms/messages';
import { ButtonLargeBlue } from '../../atoms/button';
import Checkbox from '../../atoms/checkbox';
import Form from '../../molecules/form';
import Section from '../../molecules/section';

import { Monster } from './Monster';

class Join extends Component {
  static propTypes = {
    intl: PropTypes.object.isRequired,
    join: PropTypes.func.isRequired,
    validate: PropTypes.func.isRequired,
    language: PropTypes.string.isRequired
  };

  state = {
    username: '',
    usernamePending: false,
    usernameError: null,
    email: '',
    emailPending: false,
    emailError: null,
    password: '',
    pending: false,
    showPassword: false,
    error: null,
    animation: ''
  };

  fetchTimeout;

  // eslint-disable-next-line max-statements
  getAnimation = (value, name) => {
    let valid;

    if (name === 'username') {
      valid = Boolean(value);
    }

    if (name === 'password') {
      valid = Boolean(value.match(/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/ig));
    }

    if (name === 'email') {
      valid = Boolean(value.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/ig));
    }

    if (valid === true) {
      return `${name}-focus ${name}-valid`;
    }
    
    if (!value) { 
      return `${name}-focus`;
    }
    
    return `${name}-focus ${name}-invalid`;
  }

  handleInputChange = (value, name) => {
    const { validate } = this.props;
    const animation = this.getAnimation(value, name);

    this.setState({
      [name]: value,
      pending: false,
      error: null,
      animation
    });

    const validateField = () => {
      this.setState({
        [`${name}Pending`]: true
      });

      validate({
        params: {
          name,
          value
        },
        onSuccess: ({ reason }) => {
          this.setState({
            [`${name}Error`]: reason,
            [`${name}Pending`]: false
          });
        },
        onError: (error) => {
          this.setState({
            [`${name}Pending`]: false,
            error
          });
        }
      });
    };

    if (name !== 'password') {
      clearTimeout(this.fetchTimeout);

      if (value === '') {
        this.setState({
          [`${name}Error`]: null,
          [`${name}Pending`]: false
        });
      } else {
        this.fetchTimeout = setTimeout(() => {
          validateField();
        }, 500);
      }
    }
  };

  handleCheckboxChange = ({ checked }) => {
    this.setState({
      showPassword: checked
    });
  };

  handleFocus = (event) => {
    const animation = this.getAnimation(event.target.value, event.target.name);

    this.setState({
      animation
    });
  }

  handleBlur = () => {
    this.setState({
      animation: ''
    });
  }

  handleSubmit = (params) => {
    const { join } = this.props;

    this.setState({
      pending: true,
      error: false,
      animation: ''
    });

    join({
      params,
      onSuccess: () => {
        window.scrollTo(0, 0);
        this.setState({
          pending: false,
          success: true,
          animation: 'username-valid'
        });
      },
      onError: (error) => {
        this.setState({
          pending: false,
          error,
          animation: 'username-invalid'
        });
      }
    });
  };

  render() {
    const { intl, language } = this.props;
    const {
      username,
      email,
      password,
      pending,
      showPassword,
      error,
      success,
      animation,
      usernamePending,
      usernameError,
      emailPending,
      emailError
    } = this.state;

    return (
      <Page>
        <Section className="join">
          {success ? (
            <SuccessIllustration message="join.success" illustration="join-success" width="400" />
          ) : (
            <Fragment>
              <Form onSubmit={ this.handleSubmit }>
                <H1>
                  <FormattedMessage id="join.headline" />
                </H1>
                <H2 className="join__subheadline">
                  <FormattedMessage id="home.promoText" />
                </H2>
                <Input
                  value={ username }
                  name="username"
                  id="username"
                  label={ intl.formatMessage({ id: 'login.username' }) }
                  onChange={ this.handleInputChange }
                  maxLength="50"
                  required
                  disabled={ pending }
                  pending={ usernamePending }
                  onFocus={ this.handleFocus }
                  onBlur={ this.handleBlur }
                  error={ usernameError }
                />
                <Input
                  value={ email }
                  name="email"
                  id="email"
                  autoComplete="email"
                  label={ intl.formatMessage({ id: 'login.email' }) }
                  onChange={ this.handleInputChange }
                  maxLength="150"
                  required
                  type="email"
                  // requirements={ intl.formatMessage({ id: 'misc.validEmail' }) }
                  disabled={ pending }
                  pending={ emailPending }
                  onFocus={ this.handleFocus }
                  onBlur={ this.handleBlur }
                  error={ emailError }
                />
                <Input
                  value={ password }
                  name="password"
                  id="password"
                  autoComplete="new-password"
                  label={ intl.formatMessage({ id: 'login.password' }) }
                  onChange={ this.handleInputChange }
                  maxLength="225"
                  required
                  type={ showPassword ? 'text' : 'password' }
                  pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}"
                  requirements={ intl.formatMessage({
                    id: 'misc.validPassword'
                  }) }
                  disabled={ pending }
                  onFocus={ this.handleFocus }
                  onBlur={ this.handleBlur }
                />
                <input value={ language } name="language" type="hidden" />
                <input
                  className="join__website"
                  name="website"
                  autoComplete="off"
                  tabIndex="-1"
                />
                <Checkbox
                  label={ intl.formatMessage({ id: 'login.showPassword' }) }
                  id="show-password"
                  onChange={ this.handleCheckboxChange }
                />
                <ButtonLargeBlue
                  icon="join"
                  type="submit"
                  pending={ pending }
                  disabled={ pending }
                  contentBefore
                >
                  <FormattedMessage id="join.button" values={ { b: (msg) => <b>{msg}</b> } } />
                </ButtonLargeBlue>
                {error && <ErrorMessage message={ error } hasIcon />}
                <P className="join__login">
                  <FormattedMessage id="join.registered" />{' '}
                  <Link to="/login">
                    <FormattedMessage id="join.login" />
                  </Link>
                </P>
              </Form>
              <Monster className={ classNames(animation, showPassword && 'monster--show-password') } />
            </Fragment>
          )}
        </Section>
      </Page>
    );
  }
}

export default injectIntl(Join);
