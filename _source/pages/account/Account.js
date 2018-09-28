import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage, FormattedHTMLMessage, injectIntl } from 'react-intl';

import Page from '../../templates/page';
import { H1 } from '../../atoms/headline';
import P from '../../atoms/paragraph';
import Input from '../../atoms/input';
import { ButtonLargeBlue } from '../../atoms/button';
import { TabBar, Tab } from '../../molecules/tab-bar';
import Section from '../../molecules/section';
import Form from '../../molecules/form';

class Account extends Component {
  constructor(props) {
    super(props);

    this.onTabClick = this.onTabClick.bind(this);
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
      name: props.intl.formatMessage({ id: 'account.account' })
    }];
  }

  onTabClick(tabId) {
    this.setState({
      activeTab: tabId
    });
  }

  render() {
    const { intl } = this.props;
    const { activeTab } = this.state;

    return (
      <Page>
        <Section>
          <H1>
            <FormattedMessage id="account.title" />
          </H1>
          <TabBar>
            { this.tabs.map((tab, index) => (
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
            <Form>
              <Input
                name="username"
                id="username"
                label={ intl.formatMessage({ id: 'login.username' }) }
                maxLength="50"
                required
                autoComplete="username"
              />
              <Input
                name="email"
                id="email"
                label={ intl.formatMessage({ id: 'login.email' }) }
                maxLength="150"
                required
                type="email"
                requirements={ intl.formatMessage({ id: 'misc.validEmail' }) }
                autoComplete="email"
              />
              <Input
                name="password"
                id="password"
                label={ intl.formatMessage({ id: 'login.password' }) }
                maxLength="225"
                required
                type="password"
                autoComplete="current-password"
                pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}"
              />
              <Input
                name="new-password"
                id="new-password"
                label={ intl.formatMessage({ id: 'account.newPassword' }) }
                maxLength="225"
                type="password"
                pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}"
                requirements={ intl.formatMessage({ id: 'misc.validPassword' }) }
              />
              <ButtonLargeBlue 
                icon="save"
                className="account__button"
                contentBefore
              >
                <FormattedMessage id="button.save" />
              </ButtonLargeBlue>
            </Form>
          ) }
          { activeTab === 1 && (
            <Fragment>
              <P first>
                <FormattedHTMLMessage id="account.importText" />
              </P>
            </Fragment>
          ) }
          { activeTab === 2 && (
            <Fragment>
              <P first>
                <FormattedHTMLMessage id="account.exportText" />
              </P>
              <ButtonLargeBlue icon="download">{ 'Download' }</ButtonLargeBlue>
            </Fragment>
          ) }
          { activeTab === 3 && (
            <Fragment>
              <P first>
                <FormattedMessage id="account.deleteText" />
              </P>
              <ButtonLargeBlue icon="delete">
                <FormattedHTMLMessage id="account.deleteButton" />
              </ButtonLargeBlue>
            </Fragment>
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
