import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage, injectIntl } from 'react-intl';

import { postMessage } from '../../_utils/extension';
import Extension from '../../templates/extension';
import Section from '../../molecules/section';
import CustomizeComponent from '../../organisms/customize';
import LanguageSwitcher from '../../molecules/language-switcher';
import { H3 } from '../../atoms/headline';
import { ButtonSmallPrimary } from '../../atoms/button';

class Customize extends Component {
  static propTypes = {
    history: PropTypes.object.isRequired,
    logout: PropTypes.func.isRequired
  };

  state = {
    logoutPending: false
  };

  handleLogout = () => {
    const { history, logout } = this.props;

    this.setState({
      logoutPending: true
    });

    logout({
      onSuccess: () => {
        postMessage({
          darkMode: false
        });

        history.push('/extension/login');
      }
    });
  };

  render() {
    const { logoutPending } = this.state;

    return (
      <Extension>
        <Section noMargin className="customize--extension">
          <CustomizeComponent />
          <H3>
            <FormattedMessage id="customize.language" />
          </H3>
          <LanguageSwitcher />
          <ButtonSmallPrimary
            className="customize__logout"
            contentBefore
            onClick={this.handleLogout}
            icon="logout"
            pending={logoutPending}
          >
            <FormattedMessage id="menu.logout" />
          </ButtonSmallPrimary>
        </Section>
      </Extension>
    );
  }
}

export default injectIntl(Customize);
