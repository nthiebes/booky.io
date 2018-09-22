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
import Testimonials from '../../molecules/testimonials';

class Home extends Component {
  render() {
    const { loggedIn, intl } = this.props;

    return loggedIn ? (
      <Page toolbar={ loggedIn } dashboards home>
        <Dashboards className="dashboards--sidebar" />
        <Categories />
      </Page>
    ) : (
      <Page className="home" home>
        <section className="home__header">
          <div className="home__image-wrapper">
            <img className="home__image" src="../../_assets/header.svg" />
          </div>
          <div className="home__header-content">
            <Display color="light" noMargin>
              <FormattedMessage id="home.display" />
            </Display>
            <H2 color="light">
              <FormattedMessage id="home.display2" />
            </H2>
            <ButtonLargeLight icon="about" contentBefore className="header__learn-more" to="/about">
              <FormattedHTMLMessage id="header.learnMore" />
            </ButtonLargeLight>
            <ButtonLargeBlue icon="join" to="/join">
              <FormattedHTMLMessage id="header.register" />
            </ButtonLargeBlue>
            <img className="home__header-image--desktop booky--hide-mobile-tablet" src="../../_assets/desktop.svg" />
            <img className="home__header-image--mobile booky--hide-mobile-tablet" src="../../_assets/mobile.svg" />
          </div>
        </section>
        <Section noPadding>
          <nav className="home__navigation">
            <a className="home__nav-item" href="#private">
              <Icon icon="lock" />
              <FormattedMessage id="home.private" />
            </a>
            <a className="home__nav-item" href="#customizable">
              <Icon icon="settings" />
              <FormattedMessage id="home.customizable" />
            </a>
            <a className="home__nav-item" href="#mobile">
              <Icon icon="phone" />
              <FormattedMessage id="home.mobile" />
            </a>
            <a className="home__nav-item" href="#performant">
              <Icon icon="performance" />
              <FormattedMessage id="home.performant" />
            </a>
          </nav>
        </Section>
        <Section color="light" noPadding>
          <Testimonials />
        </Section>
        <Section>
          <H2 id="private">
            { intl.formatMessage({ id: 'home.privateHeadline' }) }
          </H2>
          <P>
            <FormattedMessage id="home.privateText" />
          </P>
          <H2 id="performant">
            { intl.formatMessage({ id: 'home.performantHeadline' }) }
          </H2>
          <P>
            <FormattedMessage id="home.performantText" />
          </P>
        </Section>
        <Section color="primary" className="home__bookmarklet">
          <Icon icon="extension" color="light" className="home__bookmarklet-icon" />
          <H2 noMargin className="home__bookmarklet-headline">
            { 'Quickly add links to booky with our bookmarklet or Chrome extension.' }
          </H2>
        </Section>
        <Section>
          <H2 id="mobile">
            { intl.formatMessage({ id: 'home.mobileHeadline' }) }
          </H2>
          <P>
            <FormattedMessage id="home.mobileText" />
          </P>
          <H2 id="customizable">
            { intl.formatMessage({ id: 'home.customizableHeadline' }) }
          </H2>
          <P>
            <FormattedMessage id="home.customizableText" />
          </P>
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
