import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { injectIntl } from 'react-intl';
import { withRouter } from 'react-router-dom';

import Page from '../../templates/page';
import Section from '../../molecules/section';

class Shared extends Component {
  static propTypes = {
    intl: PropTypes.object.isRequired,
    match: PropTypes.object.isRequired,
    getDashboard: PropTypes.func.isRequired
  };

  state = {
    username: '',
    email: '',
    pending: false,
    error: null
  };

  componentDidMount() {
    const { getDashboard, match } = this.props;
    const { id } = match.params;

    getDashboard(id);
  }

  render() {
    // const { intl } = this.props;
    // const { username, email, pending, error, success } = this.state;

    return (
      <Page>
        <Section className="share">{'share'}</Section>
      </Page>
    );
  }
}

export default injectIntl(withRouter(Shared));
