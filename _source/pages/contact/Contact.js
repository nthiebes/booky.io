import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage, injectIntl } from 'react-intl';

import fetcher from '../../_utils/fetcher';
import Page from '../../templates/page';
// import { H1 } from '../../atoms/headline';
// import P from '../../atoms/paragraph';
// import Input from '../../atoms/input';
// import { ErrorMessage, SuccessMessage } from '../../atoms/messages';
// import { ButtonLargeBlue } from '../../atoms/button';
// import Textarea from '../../atoms/textarea';
// import Form from '../../molecules/form';
import Section from '../../molecules/section';
import Empty from '../../molecules/empty';

class Contact extends Component {
  constructor(props) {
    super(props);

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      username: props.username,
      email: props.email,
      message: '',
      pending: false,
      error: null,
      success: false
    };
  }

  handleInputChange(value, name) {
    this.setState({
      [name]: value,
      success: false,
      pending: false
    });
  }

  handleSubmit(params) {
    this.setState({
      pending: true,
      error: false
    });

    fetcher({
      url: '/contact',
      method: 'POST',
      params,
      onSuccess: (data) => {
        // console.log('success:', data);

        window.setTimeout(() => {
          this.setState({
            pending: false,
            error: data.error,
            success: true
          });
        }, 300);
      },
      onError: () => {
        window.setTimeout(() => {
          this.setState({
            pending: false,
            error: 'error.default'
          });
        }, 300);
      }
    });
  }

  render() {
    // const { intl } = this.props;
    // const { username, email, message, pending, error, success } = this.state;

    return (
      <Page>
        <Section>
          <Empty illustration="monitor-window">
            <FormattedMessage id="misc.comingSoon" />
          </Empty>
        </Section>
        {/* <Section compact>
          <Form onSubmit={ this.handleSubmit }>
            <H1>
              <FormattedMessage id="contact.headline" />
            </H1>
            <P first>
              <FormattedMessage id="contact.text" />
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
            <Textarea
              value={ message }
              name="message"
              id="message"
              label={ intl.formatMessage({ id: 'contact.message' }) }
              onChange={ this.handleInputChange }
              maxLength="5000"
              required
              disabled={ pending }
              rows={ 5 }
            />
            { error && <ErrorMessage message={ error } hasIcon /> }
            { success && <SuccessMessage message="contact.success" hasIcon /> }
            <ButtonLargeBlue
              icon="message"
              type="submit"
              pending={ pending }
              disabled={ pending }
              contentBefore
            >
              <FormattedMessage id="button.send" values={ { b: (msg) => <b>{msg}</b> } } />
            </ButtonLargeBlue>
          </Form>
        </Section> */}
      </Page>
    );
  }
}

Contact.propTypes = {
  intl: PropTypes.object.isRequired,
  username: PropTypes.string,
  email: PropTypes.string
};

export default injectIntl(Contact);
