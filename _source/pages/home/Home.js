import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage, FormattedHTMLMessage, injectIntl } from 'react-intl';

import Page from '../../templates/page';
import Categories from '../../organisms/categories';
import Dashboards from '../../organisms/dashboards';
import { H2, Display } from '../../atoms/headline';
import P from '../../atoms/paragraph';
import Icon from '../../atoms/icon';
import { ButtonLargeLight, ButtonLargeBlue } from '../../atoms/button';
import Section from '../../molecules/section';

class Home extends Component {
  render() {
    const { loggedIn, intl } = this.props;

    return loggedIn ? (
      <Page toolbar={ loggedIn } search dashboards>
        <Dashboards className="dashboards-sidebar" />
        <Categories dashboards />
      </Page>
    ) : (
      <Page>
        <Section className="home__header">
          <Display>
            <FormattedMessage id="home.display" />
          </Display>
          <H2>
            <FormattedMessage id="home.display2" />
          </H2>
          <ButtonLargeLight icon="about" contentBefore className="header__learn-more" to="/about">
            <FormattedHTMLMessage id="header.learnMore" />
          </ButtonLargeLight>
          <ButtonLargeBlue icon="join" to="/join">
            <FormattedHTMLMessage id="header.register" />
          </ButtonLargeBlue>
        </Section>
        <Section fullWidth>
          <nav className="home__navigation">
            <a className="home__item" href="#performant">
              <Icon icon="performance" />
              <FormattedMessage id="home.performant" />
            </a>
            <a className="home__item" href="#mobile">
              <Icon icon="phone" />
              <FormattedMessage id="home.mobile" />
            </a>
            <a className="home__item" href="#private">
              <Icon icon="lock" />
              <FormattedMessage id="home.private" />
            </a>
            <a className="home__item" href="#customizable">
              <Icon icon="settings" />
              <FormattedMessage id="home.customizable" />
            </a>
          </nav>
        </Section>
        <Section className="home__testimonials">
          <blockquote className="home__quote">{ 'booky is awesome' }</blockquote>
          <blockquote className="home__quote">{ 'booky is awesome' }</blockquote>
          <blockquote className="home__quote">{ 'booky is awesome' }</blockquote>
        </Section>
        <Section>
          <H2 id="performant">
            { intl.formatMessage({ id: 'home.performantHeadline' }) }
          </H2>
          <P>{ 'On the go? No problem with our mobile web app! Your bookmarks can be accessed from anywhere on desktop or mobile.' }</P>
        </Section>
        <Section>
          <H2 id="mobile">
            { intl.formatMessage({ id: 'home.mobileHeadline' }) }
          </H2>
          <P>{ 'On the go? No problem with our mobile web app! Your bookmarks can be accessed from anywhere on desktop or mobile.' }</P>
        </Section>
        <Section>
          <H2 id="private">
            { intl.formatMessage({ id: 'home.privateHeadline' }) }
          </H2>
          <P>{ 'On the go? No problem with our mobile web app! Your bookmarks can be accessed from anywhere on desktop or mobile.' }</P>
        </Section>
        <Section>
          <H2 id="customizable">
            { intl.formatMessage({ id: 'home.customizeHeadline' }) }
          </H2>
          <P>{ 'On the go? No problem with our mobile web app! Your bookmarks can be accessed from anywhere on desktop or mobile.' }</P>
        </Section>
        <Section color="primary" fullWidth>
          <H2 id="customizable">
            { 'Quickly add links to booky with our bookmarklet Chrome extension.' }
          </H2>
        </Section>
      </Page>
    );
  }
}

export default injectIntl(Home);

Home.propTypes = {
  loggedIn: PropTypes.bool.isRequired,
  intl: PropTypes.object.isRequired
};
