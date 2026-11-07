import React, { Component } from 'react';

import Page from '../../templates/page';
import Section from '../../molecules/section';
import Icon from '../../atoms/icon';
import { ErrorMessage, SuccessIllustration } from '../../atoms/messages';

export default class ConfirmEmail extends Component {
  state = {
    pending: true,
    success: false,
    error: null
  };

  componentDidMount() {
    const { confirmEmail, match } = this.props;

    confirmEmail({
      token: match.params.token,
      onSuccess: () => {
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
  }

  render() {
    const { pending, success, error } = this.state;

    return (
      <Page>
        <Section compact>
          {pending && <Icon icon="spinner" className="login__spinner" />}
          {success && (
            <SuccessIllustration
              message="confirmEmail.success"
              illustration="success"
            />
          )}
          {error && <ErrorMessage message={error} hasIcon />}
        </Section>
      </Page>
    );
  }
}
