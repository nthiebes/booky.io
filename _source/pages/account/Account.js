import React, { Component, Fragment } from 'react';
import Page from '../../templates/page';
import { H1 } from '../../atoms/headline';
import P from '../../atoms/paragraph';
import Input from '../../atoms/input';
import { ButtonLargePrimary } from '../../atoms/button';
import { TabBar, Tab } from '../../molecules/tab-bar';

const tabs = [{
  name: 'Account data'
}, {
  name: 'Import'
}, {
  name: 'Backup'
}];

export default class Account extends Component {
  constructor(props) {
    super(props);

    this.onTabClick = this.onTabClick.bind(this);
    this.state = {
      activeTab: 0
    };
  }

  onTabClick(tabId) {
    this.setState({
      activeTab: tabId
    });
  }

  render() {
    const { activeTab } = this.state;

    return (
      <Page>
        <H1>{ 'Account' }</H1>
        <TabBar>
          { tabs.map((tab, index) => (
            <Tab
              key={ index }
              tabId={ index }
              active={ activeTab === index }
              name={ tab.name }
              onClick={ this.onTabClick }
            />
          )) }
        </TabBar>
        { activeTab === 0 && (
          <Fragment>
            <P first>{ 'Update your account data.' }</P>
            <Input id="account-email" value={ 'nico@is.awesome' } required maxLength="150" label="Email:" />
            <Input id="account-password" value="" type="password" required maxLength="225" label="New password:" />
            <Input id="account-password-confirm" value="" type="password" required maxLength="225" label="Confirm new password:" />
            <Input id="account-password-old" value="" type="password" required maxLength="225" label="Current password:" />
            <ButtonLargePrimary icon="save">{ 'Confirm' }</ButtonLargePrimary>
          </Fragment>
        ) }
        { activeTab === 1 && (
          <Fragment>
            <P first>{ 'Import new bookmarks.' }</P>
          </Fragment>
        ) }
        { activeTab === 2 && (
          <Fragment>
            <P first>{ 'Export all your bookmarks as ' }<b>{ '.html' }</b>{ ' file:' }</P>
            <ButtonLargePrimary icon="download">{ 'Download' }</ButtonLargePrimary>
          </Fragment>
        ) }
      </Page>
    );
  }
}
