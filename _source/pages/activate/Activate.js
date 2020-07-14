import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Page from '../../templates/page';
// import Link from '../../atoms/link';
import { ErrorMessage, SuccessMessage } from '../../atoms/messages';
import Section from '../../molecules/section';
import Icon from '../../atoms/icon';

import './Activate.scss';

class Activate extends Component {
  static propTypes = {
    activate: PropTypes.func.isRequired
  }

  state = {
    pending: true,
    error: null,
    success: null
  }

  componentDidMount() {
    const { activate, match } = this.props;
    const { token } = match.params;

    activate({
      token,
      onSuccess: () => {
        // console.log('success', data);

        window.scrollTo(0, 0);
        this.setState({
          pending: false,
          success: true
        });
      },
      onError: (error) => {
        // console.log('error', error);

        this.setState({
          pending: false,
          error
        });
      }
    });
  }

  render() {
    const { pending, error, success } = this.state;

    return (
      <Page>
        <Section className="join">
          { pending && (
            <Icon icon="spinner" className="categories__spinner" />
          ) }
          { error && (
            <ErrorMessage message={ error } hasIcon />
          ) }
          { success && (
            <SuccessMessage message="join.success" hasIcon icon="smile" />
          ) }
        </Section>
      </Page>
    );
  }
}

export default Activate;
