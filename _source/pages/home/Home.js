import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage, FormattedHTMLMessage, injectIntl } from 'react-intl';
import classNames from 'classnames';

import Page from '../../templates/page';
import Categories from '../../organisms/categories';
import { DashboardsSidebar } from '../../organisms/dashboards';
import { H2, Display1, Display2 } from '../../atoms/headline';
import P from '../../atoms/paragraph';
import { ButtonLargeLight, ButtonLargeBlue, ButtonSmallPrimary } from '../../atoms/button';
import Illustration from '../../atoms/illustration';
import Section from '../../molecules/section';
import Testimonials from '../../molecules/testimonials';
import Feature from '../../molecules/feature';

class Home extends Component {
  componentDidMount() {
    const { loggedIn, getDashboards } = this.props;

    loggedIn && getDashboards();
  }

  render() {
    const { loggedIn, blurContent, hasSidebar, intl } = this.props;

    return loggedIn ? (
      <Page toolbar={ loggedIn } dashboards home>
        { hasSidebar && <DashboardsSidebar className={ classNames(blurContent && 'page--blur') } /> }
        <Categories className={ classNames(blurContent && 'page--blur') } />
      </Page>
    ) : (
      <Page className="home" home>
        <Section className="home__header">
          <Display1 color="medium" noMargin className="home__headline">
            <FormattedMessage id="home.display" />
          </Display1>
          <H2>
            <FormattedMessage id="home.display2" />
          </H2>
          <ButtonLargeBlue icon="join" to="/join" className="home__join">
            <FormattedHTMLMessage id="header.register" />
          </ButtonLargeBlue>
          <ButtonLargeLight icon="about" to="/about">
            <FormattedHTMLMessage id="header.learnMore" />
          </ButtonLargeLight>
          <Illustration
            name="monitor-window"
            className="home__header-illustration"
          />
        </Section>
        <Section color="light" noPadding>
          <Testimonials />
        </Section>
        <Section>
          <Feature
            headline={ intl.formatMessage({ id: 'home.privateHeadline' }) }
            text={ intl.formatMessage({ id: 'home.privateText' }) }
            illustration="stamp-document"
          />
        </Section>
        <Section>
          <Feature
            headline={ intl.formatMessage({ id: 'home.performantHeadline' }) }
            text={ intl.formatMessage({ id: 'home.performantText' }) }
            illustration="monitor-loading-progress"
            direction="right"
          />
        </Section>
        <Section color="light" className="home__bookmarklet">
          <div>
            <img
              width="50"
              height="50"
              alt="Chrome browser extension"
              className="home__bookmarklet-icon"
              src="../../_assets/browsers/chrome.svg"
            />
            <img
              width="50"
              height="50"
              alt="Firefox browser extension"
              className="home__bookmarklet-icon"
              src="../../_assets/browsers/firefox.svg"
            />
            <img
              width="50"
              height="50"
              alt="Opera browser extension"
              className="home__bookmarklet-icon"
              src="../../_assets/browsers/opera.svg"
            />
            <img
              width="50"
              height="50"
              alt="Edge browser extension"
              className="home__bookmarklet-icon"
              src="../../_assets/browsers/edge.svg"
            />
          </div>
          <H2 noMargin centered className="home__bookmarklet-headline">
            <FormattedMessage id="home.extensionText" />
          </H2>
          <ButtonSmallPrimary icon="extension" to="/about" contentBefore>
            <FormattedHTMLMessage id="home.extensionButton" />
          </ButtonSmallPrimary>
        </Section>
        <Section>
          <Feature
            headline={ intl.formatMessage({ id: 'home.mobileHeadline' }) }
            text={ intl.formatMessage({ id: 'home.mobileText' }) }
            illustration="android-phone"
          />
        </Section>
        <Section>
          <Feature
            headline={ intl.formatMessage({ id: 'home.customizableHeadline' }) }
            text={ intl.formatMessage({ id: 'home.customizableText' }) }
            illustration="color-palette"
            direction="right"
          />
        </Section>
        <Section color="light" className="home__not-a-member">
          { 'muh' }
        </Section>
        <Section className="home__not-a-member">
          <Illustration
            name="ecology-globe"
            height="300"
            width="300"
          />
          <Display2 centered noMargin>
            <FormattedMessage id="home.notAMember" />
          </Display2>
          <P>
            <FormattedMessage id="home.promoText" />
          </P>
          <ButtonLargeBlue icon="join" to="/join" contentBefore className="home__join">
            <FormattedHTMLMessage id="header.register" />
          </ButtonLargeBlue>
          <ButtonLargeLight icon="about" to="/about">
            <FormattedHTMLMessage id="header.learnMore" />
          </ButtonLargeLight>
        </Section>
      </Page>
    );
  }
}

export default injectIntl(Home);

Home.propTypes = {
  loggedIn: PropTypes.bool.isRequired,
  blurContent: PropTypes.bool.isRequired,
  hasSidebar: PropTypes.bool.isRequired,
  getDashboards: PropTypes.func.isRequired,
  intl: PropTypes.object.isRequired
};
