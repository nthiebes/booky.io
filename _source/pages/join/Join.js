import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage, injectIntl } from 'react-intl';
import classNames from 'classnames';

import Page from '../../templates/page';
import { H1 } from '../../atoms/headline';
import P from '../../atoms/paragraph';
import Link from '../../atoms/link';
import Input from '../../atoms/input';
import { ErrorMessage, SuccessMessage } from '../../atoms/messages';
import { ButtonLargeBlue } from '../../atoms/button';
import Checkbox from '../../atoms/checkbox';
import Form from '../../molecules/form';
import Section from '../../molecules/section';
import Illustration from '../../atoms/illustration';

import './Join.scss';

import premium from './premium_13.jpg';

import { Donut } from './donut';

class Join extends Component {
  static propTypes = {
    intl: PropTypes.object.isRequired,
    join: PropTypes.func.isRequired,
    language: PropTypes.string.isRequired
  };

  state = {
    username: '',
    email: '',
    password: '',
    pending: false,
    showPassword: false,
    error: null,
    animation: ''
  };

  handleInputChange = (value, name) => {
    this.setState({
      [name]: value,
      pending: false
    });
  };

  handleCheckboxChange = ({ checked }) => {
    this.setState({
      showPassword: checked
    });
  };

  handleFocus = (event) => {
    this.setState({
      animation: `animate-${event.target.name}`
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
      error: false
    });

    join({
      params,
      onSuccess: () => {
        window.scrollTo(0, 0);
        this.setState({
          pending: false,
          success: true
        });
      },
      onError: (error) => {
        this.setState({
          pending: false,
          error
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
      animation
    } = this.state;

    return (
      <Page>
        <Section className={ classNames('join', animation) }>
          {success ? (
            <SuccessMessage message="join.success" hasIcon icon="smile" />
          ) : (
            <Fragment>
              <Form onSubmit={ this.handleSubmit } className="join__form">
                <H1>
                  <FormattedMessage id="join.headline" />
                </H1>
                <P>
                  <FormattedMessage id="home.promoText" />
                </P>
                <Input
                  value={ username }
                  name="username"
                  id="username"
                  autoComplete="username"
                  label={ intl.formatMessage({ id: 'login.username' }) }
                  onChange={ this.handleInputChange }
                  maxLength="50"
                  required
                  disabled={ pending }
                  onFocus={ this.handleFocus }
                  onBlur={ this.handleBlur }
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
                  requirements={ intl.formatMessage({ id: 'misc.validEmail' }) }
                  disabled={ pending }
                  onFocus={ this.handleFocus }
                  onBlur={ this.handleBlur }
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
              <Illustration
                name="woman"
                width="300"
                height="300"
                className="donut"
              />
              {/* <img
                alt=""
                src={ premium }
                className="donut"
              /> */}
              {/* <Donut /> */}
            </Fragment>
          )}
        </Section>
      </Page>
    );
  }
}

export default injectIntl(Join);
