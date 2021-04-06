import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage, injectIntl } from 'react-intl';
import { withRouter } from 'react-router-dom';

import Page from '../../templates/page';
import { H1 } from '../../atoms/headline';
import { TabBar, Tab } from '../../molecules/tab-bar';
import Section from '../../molecules/section';
import {
  AccountData,
  AccountImport,
  AccountExport,
  AccountManage
} from './tabs';

class Account extends Component {
  static propTypes = {
    intl: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
  };

  state = {
    activeTab: document.location.hash
      ? document.location.hash.replace('#', '')
      : 'data'
  };

  tabs = [
    {
      name: this.props.intl.formatMessage({ id: 'account.userData' }),
      key: 'data'
    },
    {
      name: this.props.intl.formatMessage({ id: 'account.import' }),
      key: 'import'
    },
    {
      name: this.props.intl.formatMessage({ id: 'account.export' }),
      key: 'export'
    }
  ];
  // name: props.intl.formatMessage({ id: 'account.account' })

  handleTabClick = (activeTab) => {
    const { history } = this.props;

    history.push(`/account#${activeTab}`);

    this.setState({
      activeTab
    });
  };

  render() {
    const { activeTab } = this.state;

    return (
      <Page>
        <Section>
          <H1>
            <FormattedMessage id="account.title" />
          </H1>
          <TabBar title="account.navigation" className="account__tab-bar">
            {this.tabs.map((tab) => (
              <Tab
                key={tab.key}
                tabId={tab.key}
                active={activeTab === tab.key}
                onClick={this.handleTabClick}
              >
                {tab.name}
              </Tab>
            ))}
          </TabBar>
          {activeTab === 'data' && <AccountData />}
          {activeTab === 'import' && <AccountImport />}
          {activeTab === 'export' && <AccountExport />}
          {activeTab === 'manage' && <AccountManage />}
        </Section>
      </Page>
    );
  }
}

export default injectIntl(withRouter(Account));
