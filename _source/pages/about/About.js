import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage, injectIntl } from 'react-intl';
import { format } from 'date-fns';

import Page from '../../templates/page';
import { H2, H3, Display } from '../../atoms/headline';
import P from '../../atoms/paragraph';
import Section from '../../molecules/section';
import { List, ListItem } from '../../atoms/list';
import Link from '../../atoms/link';
import Illustration from '../../atoms/illustration';
import Features from '../../molecules/features';
import Feature from '../../molecules/feature';
import Expandable from '../../molecules/expandable';

import './About.scss';

class About extends Component {
  static propTypes = {
    intl: PropTypes.object.isRequired
  };

  state = {
    releases: []
  }

  componentDidMount() {
    fetch('https://api.github.com/repos/nthiebes/booky.io/releases')
      .then((response) => response.json())
      .then((releases) => {
        this.setState({ releases });
      })
      .catch();
  }

  render() {
    const { intl } = this.props;
    const { releases } = this.state;

    return (
      <Page className="about">
        <Section color="dark" className="about__header">
          <Display noMargin centered color="light">
            <FormattedMessage id="What is booky?" />
          </Display>
          <H2 noMargin centered color="light">
            <FormattedMessage id="Booky is an online bookmark manager with a focus on simplicity, customizability, privacy, and speed." />
          </H2>
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
        <Section>
          <H2 style="h1">
            <FormattedMessage id="A few words on..." />
          </H2>
          <H3 style="h2">
            <FormattedMessage id="Privacy" />
          </H3>
          <P>
            <FormattedMessage id="Dies das lorem ipsum." />
          </P>
          <H3 style="h2">
            <FormattedMessage id="Feedback matters" />
          </H3>
          <P>
            <FormattedMessage id="We're constantly looking for new ways to improve the site and expand its features, so if you have a great idea for a new feature, have found a bug or have some general feedback, we'd love to hear from you!" />
          </P>
          <H3 style="h2">
            <FormattedMessage id="Private project" />
          </H3>
          <P>
            <FormattedMessage id="booky.io is a private project and therefore completely free of charge. We want to provide a useful service for you and we do not ask for any money." />
          </P>
          <H3 style="h2">
            <FormattedMessage id="Your support" />
          </H3>
          <P>
            <FormattedMessage id="Dies das lorem ipsum." />
          </P>
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
            <FormattedMessage id="Other ways to use booky" />
          </H2>
          <H3 style="h2" color="light" noMargin centered>
            <FormattedMessage id="Browser extension, bookmarklet, Mac App, Windows app, and mobile web-app." />
          </H3>
          <nav className="home__extension">
            <Link
              href="https://chrome.google.com/webstore/detail/bookyio-extension/pmcpkkipiedakcaolhnbijibndfemckf"
              target="_blank"
              color="light"
              className="home__extension-browser"
            >
              <img
                width="75"
                height="75"
                alt=""
                className="home__extension-icon"
                src="../../_assets/browsers/chrome.svg"
                loading="lazy"
              />
              { 'Chrome' }
            </Link>
            <Link to="/about" target="_blank" color="light" className="home__extension-browser">
              <img
                width="75"
                height="75"
                alt=""
                className="home__extension-icon"
                src="../../_assets/browsers/firefox.svg"
                loading="lazy"
              />
              { 'Firefox' }
            </Link>
            <Link
              href="https://addons.opera.com/de/extensions/details/bookyio-extension/"
              target="_blank"
              color="light"
              className="home__extension-browser"
            >
              <img
                width="75"
                height="75"
                alt=""
                className="home__extension-icon"
                src="../../_assets/browsers/opera.svg"
                loading="lazy"
              />
              { 'Opera' }
            </Link>
            <Link
              href="https://microsoftedge.microsoft.com/addons/detail/bookyio-erweiterung/gnhlkmoepijbfnmblekhhdgkgdahdjek"
              target="_blank"
              color="light"
              className="home__extension-browser"
            >
              <img
                width="75"
                height="75"
                alt=""
                className="home__extension-icon"
                src="../../_assets/browsers/edge.svg"
                loading="lazy"
              />
              { 'Edge' }
            </Link>
            <Link
              href=""
              target="_blank"
              color="light"
              className="home__extension-browser"
            >
              <img
                width="75"
                height="75"
                alt=""
                className="home__extension-icon"
                src="../../_assets/browsers/edge.svg"
                loading="lazy"
              />
              { 'Bookmarklet' }
            </Link>
            <Link
              href=""
              target="_blank"
              color="light"
              className="home__extension-browser"
            >
              <img
                width="75"
                height="75"
                alt=""
                className="home__extension-icon"
                src="../../_assets/browsers/edge.svg"
                loading="lazy"
              />
              { 'Mac App' }
            </Link>
            <Link
              href=""
              target="_blank"
              color="light"
              className="home__extension-browser"
            >
              <img
                width="75"
                height="75"
                alt=""
                className="home__extension-icon"
                src="../../_assets/browsers/edge.svg"
                loading="lazy"
              />
              { 'Windows App' }
            </Link>
          </nav>
        </Section>
        <Section>
          <H2 style="h1">
            <FormattedMessage id="Meet the team" />
          </H2>
          <P>
            <FormattedMessage id="Well, their cats :-)." />
          </P>
        </Section>
        <Section>
          <H2 style="h1">
            <FormattedMessage id="about.betaUpdates" />
          </H2>
          { /* eslint-disable-next-line camelcase */ }
          { releases.map(({ id, name, body, published_at }) => {
            const lines = body.split('\n');

            // eslint-disable-next-line no-lone-blocks
            return (
              <Expandable key={ id } headline={
                <>
                  <span>{ `${name} -` }</span>
                  <time className="about__date">{ format(new Date(published_at), 'MM/dd/yyyy') }</time>
                </>
              }>  
                <List>
                  { lines.map((line, index) => (
                    <ListItem key={ index }>
                      { line.replace(/- /g, '') }
                      { index < lines.length - 1 && <br /> }
                    </ListItem>
                  )) }
                </List>
              </Expandable>
            );
          }) }
        </Section>
      </Page>
    );
  }
}

export default injectIntl(About);
