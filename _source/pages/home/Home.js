import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage, injectIntl } from 'react-intl';
import classNames from 'classnames';

import Page from '../../templates/page';
import Categories from '../../organisms/categories';
import Search from '../../organisms/search';
import { DashboardsSidebar } from '../../organisms/dashboards';
import { H2, H3, Display } from '../../atoms/headline';
import Link from '../../atoms/link';
import { ButtonLargeBlue, ButtonLargeLight } from '../../atoms/button';
import Illustration from '../../atoms/illustration';
import Section from '../../molecules/section';
import Testimonials from '../../molecules/testimonials';
import Feature from '../../molecules/feature';
import Features from '../../molecules/features';

class Home extends Component {
  static propTypes = {
    loggedIn: PropTypes.bool.isRequired,
    blurContent: PropTypes.bool.isRequired,
    hasSidebar: PropTypes.bool.isRequired,
    getDashboards: PropTypes.func.isRequired,
    intl: PropTypes.object.isRequired,
    categoriesPending: PropTypes.bool,
    hasCategories: PropTypes.bool,
    dashboardsOpen: PropTypes.bool,
    keywordExists: PropTypes.bool
  };

  componentDidMount() {
    const { loggedIn, getDashboards } = this.props;

    loggedIn && getDashboards();
  }

  render() {
    const { loggedIn, blurContent, hasSidebar, intl, keywordExists } = this.props;

    return loggedIn ? (
      <Page toolbar={ loggedIn } dashboards home>
        { hasSidebar && (
          <DashboardsSidebar className={ classNames(blurContent && 'page--blur') } />
        ) }
        { keywordExists ? (
          <Search />
        ) : (
          <Categories className={ classNames(blurContent && 'page--blur') } />
        ) }
      </Page>
    ) : (
      <Page home className="home">
        <section className="home__header">
          <div className="home__header-wrapper">
            <Display noMargin centered>
              <FormattedMessage id="home.display" />
            </Display>
            <H2 noMargin centered>
              <FormattedMessage id="home.display2" />
            </H2>
            <ButtonLargeBlue icon="join" to="/join" className="home__join">
              <FormattedMessage id="header.register" values={ { b: (msg) => <b>{msg}</b> } } />
            </ButtonLargeBlue>
            <ButtonLargeLight icon="about" to="/about">
              <FormattedMessage id="header.learnMore" values={ { b: (msg) => <b>{msg}</b> } } />
            </ButtonLargeLight>
          </div>
          <Illustration
            name="devices"
            className="home__header-illustration"
          />
        </section>
        <Section color="light" noPadding contentClassName="home__testimonials">
          <Testimonials />
        </Section>
        <Section>
          <Feature
            headline={ intl.formatMessage({ id: 'home.privateHeadline' }) }
            text={ intl.formatMessage({ id: 'home.privateText' }) }
            illustration="protection"
          />
        </Section>
        <Section>
          <Feature
            headline={ intl.formatMessage({ id: 'home.customizableHeadline' }) }
            text={ intl.formatMessage({ id: 'home.customizableText' }) }
            illustration="customize"
            direction="right"
          />
        </Section>
        <Section color="dark" contentClassName="home__bookmarklet">
          <Illustration
            className="home__plant booky--hide-mobile"
            name="plant"
          />
          <Illustration
            className="home__trees booky--hide-mobile-tablet"
            name="trees"
          />
          <H2 style="h1" color="light" noMargin centered>
            <FormattedMessage id="misc.feature1" />
          </H2>
          <H3 style="h2" color="light" noMargin centered>
            <FormattedMessage id="home.extensionText" />
          </H3>
          <nav className="home__extension">
            <Link to="/about" color="light" className="home__extension-browser">
              <img
                width="75"
                height="75"
                alt="Chrome browser extension"
                className="home__extension-icon"
                src="../../_assets/browsers/chrome.svg"
              />
              { 'Chrome' }
            </Link>
            <Link to="/about" color="light" className="home__extension-browser">
              <img
                width="75"
                height="75"
                alt="Firefox browser extension"
                className="home__extension-icon"
                src="../../_assets/browsers/firefox.svg"
              />
              { 'Firefox' }
            </Link>
            <Link to="/about" color="light" className="home__extension-browser">
              <img
                width="75"
                height="75"
                alt="Opera browser extension"
                className="home__extension-icon"
                src="../../_assets/browsers/opera.svg"
              />
              { 'Opera' }
            </Link>
            <Link to="/about" color="light" className="home__extension-browser">
              <img
                width="75"
                height="75"
                alt="Edge browser extension"
                className="home__extension-icon"
                src="../../_assets/browsers/edge.svg"
              />
              { 'Edge' }
            </Link>
          </nav>
        </Section>
        <Section>
          <Feature
            headline={ intl.formatMessage({ id: 'home.performantHeadline' }) }
            text={ intl.formatMessage({ id: 'home.performantText' }) }
            illustration="speed"
          />
        </Section>
        <Section>
          <Feature
            headline={ intl.formatMessage({ id: 'home.mobileHeadline' }) }
            text={ intl.formatMessage({ id: 'home.mobileText' }) }
            illustration="mobile"
            direction="right"
          />
        </Section>
        <Section color="light" contentClassName="home__features">
          <H2 style="h1" noMargin centered className="home__features-headline">
            <FormattedMessage id="misc.features" />
          </H2>
          <Features />
        </Section>
        <Section className="home__not-a-member">
          <Illustration
            className="home__heart"
            name="heart"
          />
          <H2 style="h1" centered noMargin>
            <FormattedMessage id="home.notAMember" />
          </H2>
          <H3 style="h2" noMargin centered>
            <FormattedMessage id="home.promoText" />
          </H3>
          <ButtonLargeBlue icon="join" to="/join" contentBefore className="home__join">
            <FormattedMessage id="header.register" values={ { b: (msg) => <b>{msg}</b> } } />
          </ButtonLargeBlue>
          <ButtonLargeLight icon="about" to="/about">
            <FormattedMessage id="header.learnMore" values={ { b: (msg) => <b>{msg}</b> } } />
          </ButtonLargeLight>
        </Section>
      </Page>
    );
  }
}

export default injectIntl(Home);
