import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage, FormattedHTMLMessage, injectIntl } from 'react-intl';
import classNames from 'classnames';

import Page from '../../templates/page';
import Categories from '../../organisms/categories';
import { DashboardsSidebar } from '../../organisms/dashboards';
import { H2, Display } from '../../atoms/headline';
import Icon from '../../atoms/icon';
import P from '../../atoms/paragraph';
import { ButtonLargeBlue, ButtonLargeLight } from '../../atoms/button';
import Illustration from '../../atoms/illustration';
import Section from '../../molecules/section';
import Testimonials from '../../molecules/testimonials';
import Feature from '../../molecules/feature';

class Home extends Component {
  static propTypes = {
    loggedIn: PropTypes.bool.isRequired,
    blurContent: PropTypes.bool.isRequired,
    hasSidebar: PropTypes.bool.isRequired,
    getDashboards: PropTypes.func.isRequired,
    intl: PropTypes.object.isRequired,
    categoriesPending: PropTypes.bool,
    hasCategories: PropTypes.bool,
    dashboardsOpen: PropTypes.bool
  };

  componentDidMount() {
    const { loggedIn, getDashboards } = this.props;

    loggedIn && getDashboards();
  }

  render() {
    const { loggedIn, blurContent, hasSidebar, intl } = this.props;

    return loggedIn ? (
      <Page toolbar={ loggedIn } dashboards home>
        { hasSidebar && (
          <DashboardsSidebar className={ classNames(blurContent && 'page--blur') } />
        ) }
        <Categories className={ classNames(blurContent && 'page--blur') } />
      </Page>
    ) : (
      <Page home className="home">
        <Section noMargin className="home__header">
          <Display noMargin className="home__headline">
            <FormattedMessage id="home.display" />
          </Display>
          <H2 noMargin>
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
        <Section color="light" noPadding contentClassName="home__testimonials">
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
        <Section color="light" contentClassName="home__bookmarklet">
          <H2 style="h1" noMargin centered>
            <FormattedMessage id="home.extensionText" />
          </H2>
          <div className="home__extension">
            <img
              width="75"
              height="75"
              alt="Chrome browser extension"
              className="home__extension-icon"
              src="../../_assets/browsers/chrome.svg"
            />
            <img
              width="75"
              height="75"
              alt="Firefox browser extension"
              className="home__extension-icon"
              src="../../_assets/browsers/firefox.svg"
            />
            <img
              width="75"
              height="75"
              alt="Opera browser extension"
              className="home__extension-icon"
              src="../../_assets/browsers/opera.svg"
            />
            <img
              width="75"
              height="75"
              alt="Edge browser extension"
              className="home__extension-icon"
              src="../../_assets/browsers/edge.svg"
            />
          </div>
          <ButtonLargeBlue icon="extension" to="/about" contentBefore>
            <FormattedHTMLMessage id="home.extensionButton" />
          </ButtonLargeBlue>
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
        <Section color="light" contentClassName="home__features">
          <H2 style="h1" noMargin centered>
            <FormattedMessage id="home.features" />
          </H2>
          <ul className="home__features-list">
            <li className="home__feature">
              <Icon icon="close" />
              <FormattedMessage id="home.feature1" />
            </li>
            <li className="home__feature">
              <Icon icon="close" />
              <FormattedMessage id="home.feature2" />
            </li>
            <li className="home__feature">
              <Icon icon="close" />
              <FormattedMessage id="home.feature3" />
            </li>
            <li className="home__feature">
              <Icon icon="close" />
              <FormattedMessage id="home.feature4" />
            </li>
            <li className="home__feature">
              <Icon icon="close" />
              <FormattedMessage id="home.feature5" />
            </li>
            <li className="home__feature">
              <Icon icon="close" />
              <FormattedMessage id="home.feature6" />
            </li>
          </ul>
        </Section>
        <Section className="home__not-a-member">
          <Illustration
            className="home__globe"
            name="monitor-window"
            height="300"
            width="300"
          />
          <H2 style="h1" centered noMargin>
            <FormattedMessage id="home.notAMember" />
          </H2>
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
