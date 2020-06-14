import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage, injectIntl } from 'react-intl';

import Page from '../../templates/page';
import { H1 } from '../../atoms/headline';
import { TabBar, Tab } from '../../molecules/tab-bar';
import Section from '../../molecules/section';
import {
  AccountData,
  AccountImport,
  AccountExport,
  AccountManage,
  AccountStatistics
} from './tabs';

import './Account.scss';

class Account extends Component {
  constructor(props) {
    super(props);

    this.handleTabClick = this.handleTabClick.bind(this);
    this.state = {
      activeTab: 0
    };
    this.tabs = [{
      name: props.intl.formatMessage({ id: 'account.userData' })
    }, {
      name: props.intl.formatMessage({ id: 'account.import' })
    }, {
      name: props.intl.formatMessage({ id: 'account.export' })
    }, {
      name: props.intl.formatMessage({ id: 'account.statistics' })
    }, {
      name: props.intl.formatMessage({ id: 'account.account' })
    }];
  }

  handleTabClick(tabId) {
    this.setState({
      activeTab: tabId
    });
  }

  render() {
    const { activeTab } = this.state;

    return (
      <Page>
        <Section>
          <H1>
            <FormattedMessage id="account.title" />
          </H1>
          <TabBar title="account.navigation" className="account__tab-bar">
            { this.tabs.map((tab, index) => (
              <Tab
                key={ tab.name }
                tabId={ index }
                active={ activeTab === index }
                onClick={ this.handleTabClick }
              >
                {tab.name}
              </Tab>
            )) }
          </TabBar>
          { activeTab === 0 && (
            <AccountData />
          ) }
          { activeTab === 1 && (
            <AccountImport />
          ) }
          { activeTab === 2 && (
            <AccountExport />
          ) }
          { activeTab === 3 && (
            <AccountStatistics />
          ) }
          { activeTab === 4 && (
            <AccountManage />
          ) }
        </Section>
      </Page>
    );
  }
}

Account.propTypes = {
  intl: PropTypes.object.isRequired
};

export default injectIntl(Account);
