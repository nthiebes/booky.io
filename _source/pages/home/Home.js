import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage, FormattedHTMLMessage } from 'react-intl';
import classNames from 'classnames';

import Page from '../../templates/page';
import Categories from '../../organisms/categories';
import Dashboards from '../../organisms/dashboards';
import { H2, Display1, Display2 } from '../../atoms/headline';
import P from '../../atoms/paragraph';
import Icon from '../../atoms/icon';
import { ButtonLargeLight, ButtonLargeBlue, ButtonSmallLight } from '../../atoms/button';
import Section from '../../molecules/section';
import Testimonials from '../../molecules/testimonials';

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dashboardsPending: true,
      error: null
    };
  }

  componentDidMount() {
    const { loggedIn, getDashboards } = this.props;

    loggedIn && getDashboards({
      onSuccess: () => {
        this.setState({
          dashboardsPending: false
        });
      },
      onError: (error) => {
        this.setState({
          dashboardsPending: false,
          error
        });
      }
    });
  }

  render() {
    const { loggedIn, blurContent, hasSidebar } = this.props;
    const { dashboardsPending } = this.state;

    return loggedIn ? (
      <Page toolbar={ loggedIn } dashboards home>
        { hasSidebar && <Dashboards isSidebar className={ classNames(blurContent && 'page--blur') } /> }
        { dashboardsPending ? 'pending' : <Categories className={ classNames(blurContent && 'page--blur') } /> }
      </Page>
    ) : (
      <Page className="home" home>
        <section className="home__header">
          <div className="home__image-wrapper">
            <img className="home__image" src="../../_assets/header.svg" />
          </div>
          <div className="home__header-content">
            <Display1 color="light" noMargin>
              <FormattedMessage id="home.display" />
            </Display1>
            <H2 color="light">
              <FormattedMessage id="home.display2" />
            </H2>
            <ButtonLargeBlue icon="join" to="/join" contentBefore className="home__join">
              <FormattedHTMLMessage id="header.register" />
            </ButtonLargeBlue>
            <ButtonLargeLight icon="about" to="/about">
              <FormattedHTMLMessage id="header.learnMore" />
            </ButtonLargeLight>
            <img className="home__header-image--desktop booky--hide-mobile-tablet" src="../../_assets/desktop.svg" />
            <img className="home__header-image--mobile booky--hide-mobile-tablet" src="../../_assets/mobile.svg" />
          </div>
        </section>
        <Section noPadding>
          <nav className="home__navigation">
            <a className="home__nav-item" href="#private">
              <Icon icon="lock" size="medium" />
              <FormattedMessage id="home.private" />
            </a>
            <a className="home__nav-item" href="#customizable">
              <Icon icon="settings" size="medium" />
              <FormattedMessage id="home.customizable" />
            </a>
            <a className="home__nav-item" href="#mobile">
              <Icon icon="phone" size="medium" />
              <FormattedMessage id="home.mobile" />
            </a>
            <a className="home__nav-item" href="#performant">
              <Icon icon="performance" size="medium" />
              <FormattedMessage id="home.performant" />
            </a>
          </nav>
        </Section>
        <Section color="light" noPadding>
          <Testimonials />
        </Section>
        <Section>
          <H2 id="private">
            <Icon icon="lock" />
            <FormattedMessage id="home.privateHeadline" />
          </H2>
          <P>
            <FormattedMessage id="home.privateText" />
          </P>
          <H2 id="performant">
            <Icon icon="performance" />
            <FormattedMessage id="home.performantHeadline" />
          </H2>
          <P>
            <FormattedMessage id="home.performantText" />
          </P>
        </Section>
        <Section color="primary" className="home__bookmarklet">
          <Icon icon="extension" size="medium" color="light" className="home__bookmarklet-icon" />
          <H2 noMargin className="home__bookmarklet-headline">
            { 'Quickly add links to booky with our bookmarklet or Chrome extension.' }
          </H2>
          <ButtonSmallLight className="home__bookmarklet-button" to="/about">
            <FormattedHTMLMessage id="home.bookmarkletButton" />
          </ButtonSmallLight>
        </Section>
        <Section>
          <H2 id="mobile">
            <Icon icon="phone" />
            <FormattedMessage id="home.mobileHeadline" />
          </H2>
          <P>
            <FormattedMessage id="home.mobileText" />
          </P>
          <H2 id="customizable">
            <Icon icon="settings" />
            <FormattedMessage id="home.customizableHeadline" />
          </H2>
          <P>
            <FormattedMessage id="home.customizableText" />
          </P>
        </Section>
        <Section color="light" className="home__not-a-member">
          { 'muh' }
        </Section>
        <Section className="home__not-a-member">
          <Display2 centered>
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

export default Home;

Home.propTypes = {
  loggedIn: PropTypes.bool.isRequired,
  blurContent: PropTypes.bool.isRequired,
  hasSidebar: PropTypes.bool.isRequired,
  getDashboards: PropTypes.func.isRequired
};
