import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage, injectIntl } from 'react-intl';
import classNames from 'classnames';

import Page from '../../templates/page';
import { Display, H2 } from '../../atoms/headline';
import P from '../../atoms/paragraph';
import Section from '../../molecules/section';
import Bookmarklet from '../../molecules/bookmarklet';
import { javascriptMobile } from '../../molecules/bookmarklet/javascript';
import { TabBar, Tab } from '../../molecules/tab-bar';
import Input from '../../atoms/input';
import { ButtonSmallPrimary, ButtonSmallDark } from '../../atoms/button';
import { List, ListItem } from '../../atoms/list';

import './Bookmarklet.scss';

class BookmarkletPage extends Component {
  static propTypes = {
    intl: PropTypes.object.isRequired,
    language: PropTypes.string.isRequired,
    isMobile: PropTypes.bool.isRequired,
    stickyHeader: PropTypes.bool
  }

  state = {
    activeTab: this.props.isMobile ? 'mobile' : 'desktop',
    copied: false
  }
  
  tabs = [{
    name: this.props.intl.formatMessage({ id: 'misc.mobile' }),
    key: 'mobile'
  }, {
    name: this.props.intl.formatMessage({ id: 'misc.desktop' }),
    key: 'desktop'
  }];

  handleTabClick = (activeTab) => {
    this.setState({
      activeTab
    });
  }

  copy = () => {
    navigator.clipboard.writeText(javascriptMobile);

    this.setState({
      copied: true
    });
  }

  render() {
    const { language, stickyHeader } = this.props;
    const { activeTab, copied } = this.state;

    return (
      <Page className={ classNames('bookmarklet-page', stickyHeader && 'bookmarklet-page--sticky') }>
        <Section color="dark" className="bookmarklet-page__header">
          <Display noMargin centered color="light">
            <FormattedMessage id="bookmarklet.question" />
          </Display>
          <H2 noMargin centered ignoreDarkMode color="light">
            <FormattedMessage id="bookmarklet.info" />
          </H2>
        </Section>
        <Section>
          <div className="bookmarklet-page__screens">
            <img src={ `/_assets/bookmarklet_${language}_1.png` } width="300" height="555" alt="" />
            <img src={ `/_assets/bookmarklet_${language}_2.png` } width="300" height="555" alt="" />
            <img src={ `/_assets/bookmarklet_${language}_3.png` } width="300" height="555" alt="" />
          </div>
          <H2>
            <FormattedMessage id="help.bookmarklet.question" />
          </H2>
          <TabBar title="account.navigation" className="account__tab-bar">
            { this.tabs.map((tab) => (
              <Tab
                key={ tab.key }
                tabId={ tab.key }
                active={ activeTab === tab.key }
                onClick={ this.handleTabClick }
              >
                {tab.name}
              </Tab>
            )) }
          </TabBar>
          { activeTab === 'desktop' && (
            <>
              <P first>
                <FormattedMessage id="bookmarklet.answer" />
              </P>
              <Bookmarklet />
              <div>
                <img src={ `/_assets/bookmarklet_drag_${language}.png` } className="bookmarklet-page__image" width="300" height="103" alt="" />
                <img src={ `/_assets/bookmarklet_${language}.png` } className="bookmarklet-page__image" width="300" height="103" alt="" />
              </div>
            </>
          ) }
          { activeTab === 'mobile' && (
            <>
              <List>
                <ListItem className="bookmarklet-page__list">
                  <FormattedMessage id="bookmarklet.mobile1" />
                </ListItem>
                <ListItem>
                  <FormattedMessage id="bookmarklet.mobile2" />
                  <Input
                    className="bookmarklet-page__input"
                    value={ javascriptMobile }
                    onChange={ () => null }
                    validation={ false }
                  />
                  { copied ? (
                    <ButtonSmallDark icon="check" disabled>
                      <b><FormattedMessage id="misc.copied" /></b>
                    </ButtonSmallDark>
                  ) : (
                    <ButtonSmallPrimary icon="copy" onClick={ this.copy }>
                      <b><FormattedMessage id="misc.copy" /></b>
                    </ButtonSmallPrimary>
                  ) }
                </ListItem>
                <ListItem>
                  <FormattedMessage id="bookmarklet.mobile3" />
                </ListItem>
              </List>
              <P>
                <FormattedMessage id="bookmarklet.mobile4" />
              </P>
            </>
          ) }
        </Section>
      </Page>
    );
  }
}

export default injectIntl(BookmarkletPage);
