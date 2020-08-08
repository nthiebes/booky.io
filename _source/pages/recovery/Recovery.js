import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import Page from '../../templates/page';
import { ErrorMessage, SuccessMessage } from '../../atoms/messages';
import Section from '../../molecules/section';
import Icon from '../../atoms/icon';

class Recovery extends Component {
  static propTypes = {
    confirm: PropTypes.func.isRequired,
    deny: PropTypes.func.isRequired,
    match: PropTypes.object.isRequired
  }

  state = {
    pending: true,
    error: null,
    success: false
  }

  componentDidMount = () => {
    const { match, confirm, deny } = this.props;
    const { action, params } = match.params;
    const decodedParams = JSON.parse(atob(params));

    if (action === 'confirm') {
      confirm({
        params: decodedParams,
        onSuccess: () => {
          window.scrollTo(0, 0);
          this.setState({
            pending: false,
            success: true
          });
        },
        onError: (error) => {
          window.scrollTo(0, 0);
          this.setState({
            pending: false,
            error
          });
        }
      });
    }

    if (action === 'deny') {
      deny({
        params: decodedParams,
        onSuccess: () => {
          window.scrollTo(0, 0);
          this.setState({
            pending: false,
            success: true
          });
        },
        onError: (error) => {
          window.scrollTo(0, 0);
          this.setState({
            pending: false,
            error
          });
        }
      });
    }
  }

  render() {
    const { match } = this.props;
    const { action } = match.params;
    const { pending, error, success } = this.state;

    return (
      <Page>
        <Section compact>
          { pending && (
            <Icon icon="spinner" className="categories__spinner" />
          ) }
          { error && (
            <ErrorMessage message={ error } hasIcon />
          ) }
          { success && action === 'deny' && (
            <ErrorMessage message="recovery.deny" hasIcon />
          ) }
          { success && action === 'confirm' && (
            <SuccessMessage message="recovery.confirm" hasIcon icon="smile" />
          ) }
        </Section>
      </Page>
    );
  }
}

export default withRouter(Recovery);
