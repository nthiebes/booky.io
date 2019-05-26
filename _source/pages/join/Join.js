import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage, FormattedHTMLMessage, injectIntl } from 'react-intl';
import { withRouter } from 'react-router-dom';

import Page from '../../templates/page';
import { H1 } from '../../atoms/headline';
import P from '../../atoms/paragraph';
import Link from '../../atoms/link';
import Input from '../../atoms/input';
import { ErrorMessage } from '../../atoms/messages';
import { ButtonLargeBlue } from '../../atoms/button';
import Checkbox from '../../atoms/checkbox';
import Form from '../../molecules/form';
import Section from '../../molecules/section';
import Illustration from '../../atoms/illustration';

class Join extends Component {
  constructor(props) {
    super(props);

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleCheckboxChange = this.handleCheckboxChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      username: '',
      email: '',
      password: '',
      pending: false,
      showPassword: false,
      error: null
    };
  }

  handleInputChange(value, name) {
    this.setState({
      [name]: value,
      pending: false
    });
  }

  handleCheckboxChange({ checked }) {
    this.setState({
      showPassword: checked
    });
  }

  handleSubmit(params) {
    const { history, join } = this.props;

    this.setState({
      pending: true,
      error: false
    });

    join({
      params,
      onSuccess: () => {
        history.push('/');
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
    const { intl } = this.props;
    const { username, email, password, pending, showPassword, error } = this.state;

    return (
      <Page>
        <Section className="join">
          <Form onSubmit={ this.handleSubmit } className="join__form">
            <H1>
              <FormattedMessage id="join.headline" />
            </H1>
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
              pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}"
              requirements={ intl.formatMessage({ id: 'misc.validPassword' }) }
              disabled={ pending }
            />
            <Checkbox
              label={ intl.formatMessage({ id: 'login.showPassword'}) }
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
              <FormattedHTMLMessage id="join.joinNow" />
            </ButtonLargeBlue>
            { error && <ErrorMessage hasIcon /> }
            <P className="join__login">
              <FormattedMessage id="join.registered" />
              { ' ' }
              <Link to="/login">
                <FormattedMessage id="join.login" />
              </Link>
            </P>
          </Form>
          <Illustration
            name="monitor-window"
            width="300"
            height="300"
            className="join__illustration"
          />
        </Section>
      </Page>
    );
  }
}

Join.propTypes = {
  intl: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
  join: PropTypes.func.isRequired
};

export default injectIntl(withRouter(Join));
