/* eslint-disable max-lines */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage, FormattedDate, injectIntl } from 'react-intl';
import classNames from 'classnames';

import { config } from '../../config';
import Page from '../../templates/page';
import { H2, H3, H4, Display } from '../../atoms/headline';
import P from '../../atoms/paragraph';
import Section from '../../molecules/section';
import Link from '../../atoms/link';
import Icon from '../../atoms/icon';
import { List, ListItem } from '../../atoms/list';
import { FeatureCard } from '../../molecules/feature-card';
import Expandable from '../../molecules/expandable';
import { ButtonLargeBlue, ButtonLargeLight } from '../../atoms/button';
import Illustration from '../../atoms/illustration';

class About extends PureComponent {
  static propTypes = {
    intl: PropTypes.object.isRequired,
    stickyHeader: PropTypes.bool,
    updateSettings: PropTypes.func.isRequired,
    newsVersion: PropTypes.number.isRequired
  };

  state = {
    releases: []
  };

  componentDidMount() {
    const { newsVersion, updateSettings } = this.props;

    fetch('https://api.github.com/repos/nthiebes/booky.io/releases?per_page=10')
      .then((response) => response.json())
      .then((releases) => {
        this.setState({
          releases: releases.filter((release) => !release.prerelease)
        });
      })
      .catch();

    if (newsVersion < config.NEWS_VERSION) {
      updateSettings({
        newsVersion: config.NEWS_VERSION
      });
    }
  }

  render() {
    const { intl, stickyHeader } = this.props;
    const { releases } = this.state;

    return (
      <Page
        showStats
        className={classNames('about', stickyHeader && 'about--sticky')}
      >
        <Section color="dark" className="about__header">
          <Display noMargin centered color="light">
            <FormattedMessage id="about.title" />
          </Display>
          <H2 noMargin centered ignoreDarkMode color="light">
            <FormattedMessage id="about.subtitle" />
          </H2>
        </Section>

        <Section>
          <H2 style="h1" centered>
            <FormattedMessage id="about.why" />
          </H2>
          <div className="features-page__cluster">
            <FeatureCard
              headline={intl.formatMessage({
                id: 'about.anyDeviceTitle' // Save and access links across browsers and devices
              })}
              text={intl.formatMessage({
                id: 'about.anyDevice'
              })}
              illustration="available"
              background="light"
            />
            <FeatureCard
              headline={intl.formatMessage({
                id: 'about.organizeTitle'
              })}
              text={intl.formatMessage({
                id: 'about.organize'
              })}
              illustration="organize"
              background="light"
            />
            <FeatureCard
              headline={intl.formatMessage({
                id: 'about.cloudTitle'
              })}
              text={intl.formatMessage({
                id: 'about.cloud'
              })}
              illustration="import"
              background="light"
            />
          </div>
        </Section>

        <Section>
          <H2 style="h1" centered>
            <FormattedMessage id="about.topics" />
          </H2>
          <div className="features-page__cluster">
            <FeatureCard
              headline={intl.formatMessage({ id: 'about.privacy' })}
              text={intl.formatMessage(
                { id: 'about.privacyText' },
                {
                  privacy: (
                    <Link to="/privacy">
                      {<FormattedMessage id="menu.privacy" />}
                    </Link>
                  )
                }
              )}
              illustration="privacy"
              background="light"
            />
            <FeatureCard
              headline={intl.formatMessage({ id: 'about.feedback' })}
              text={intl.formatMessage(
                { id: 'contact.text' },
                {
                  link: (
                    <Link to="/contact">
                      {<FormattedMessage id="contact.textLink" />}
                    </Link>
                  )
                }
              )}
              illustration="feedback"
              background="light"
            />
            <FeatureCard
              headline={intl.formatMessage({ id: 'about.support' })}
              text={intl.formatMessage(
                { id: 'about.supportText' },
                {
                  supporter: (
                    <Link to="/supporter">
                      {<FormattedMessage id="misc.supporter" />}
                    </Link>
                  )
                }
              )}
              illustration="support"
              background="light"
              cta={intl.formatMessage(
                { id: 'button.memberships' },
                { b: (msg) => <b>{msg}</b> }
              )}
              ctaTo="/supporter"
            />
          </div>
        </Section>

        <Section
          color="dark"
          className="home__availability-wrapper" // features__bookmarklet
          contentClassName="home__availability"
          contentSpace
        >
          <Illustration
            className="home__plant booky--hide-mobile"
            name="plant"
          />
          <Illustration
            className="home__trees booky--hide-mobile-tablet"
            name="trees"
          />
          <H2
            style="h1"
            color="light"
            noMargin
            centered
            className="about__usecase-title"
          >
            <FormattedMessage id="about.usecases" />
          </H2>
          <H3 style="h2" color="light" noMargin centered>
            <FormattedMessage id="about.usecasesSubtitle" />
          </H3>
          <ul className="about__usecases">
            <li className="about__usecase">
              <Illustration name="hamburger" width="200" height="200" />
              <H4 style="h3" color="light" centered noMargin>
                <FormattedMessage id="Lieblingsrezepte" />
              </H4>
            </li>
            <li className="about__usecase">
              <Illustration name="vacation" width="200" height="200" />
              <H4 style="h3" color="light" centered noMargin>
                <FormattedMessage id="Urlaubsplanung" />
              </H4>
            </li>
            <li className="about__usecase">
              <Illustration name="work" width="200" height="200" />
              <H4 style="h3" color="light" centered noMargin>
                <FormattedMessage id="Arbeitslinks" />
              </H4>
            </li>
          </ul>
        </Section>

        <Section>
          <H2 style="h1" centered>
            <FormattedMessage id="about.team" />
          </H2>
          <div className="about__members">
            <div className="about__member">
              <img
                src="_assets/rocky.jpg"
                width="100"
                height="100"
                className="about__member-image"
                alt=""
                aria-hidden="true"
                loading="lazy"
              />
              <img
                src="_assets/nico.svg"
                width="100"
                height="100"
                className="about__member-image--face"
                alt=""
                aria-hidden="true"
                loading="lazy"
              />
              <div>
                <H4 ignoreDarkMode className="about__member-header">
                  {'Rocky aka "Nico"'}
                  <Link
                    href="https://twitter.com/_gscheid"
                    target="_blank"
                    className="about__member-link"
                  >
                    {'@_gscheid'}
                  </Link>
                </H4>
                <P ignoreDarkMode className="about__member-text">
                  <FormattedMessage id="about.rockyText" />
                </P>
              </div>
            </div>
            <div className="about__member">
              <img
                src="_assets/sheldon.jpg"
                width="100"
                height="100"
                className="about__member-image"
                alt=""
                aria-hidden="true"
                loading="lazy"
              />
              <img
                src="_assets/mariano.svg"
                width="100"
                height="100"
                className="about__member-image--face"
                alt=""
                aria-hidden="true"
                loading="lazy"
              />
              <div>
                <H4 ignoreDarkMode className="about__member-header">
                  {'Sheldon aka "Mariano"'}
                  <Link
                    href="https://github.com/mcustiel"
                    target="_blank"
                    className="about__member-link"
                  >
                    {'mcustiel'}
                  </Link>
                </H4>
                <P ignoreDarkMode className="about__member-text">
                  <FormattedMessage id="about.sheldonText" />
                </P>
              </div>
            </div>
            <div className="about__member">
              <img
                src="_assets/bella.jpg"
                width="100"
                height="100"
                className="about__member-image"
                alt=""
                aria-hidden="true"
                loading="lazy"
              />
              <img
                src="_assets/samira.svg"
                width="100"
                height="100"
                className="about__member-image--face"
                alt=""
                aria-hidden="true"
                loading="lazy"
              />
              <div>
                <H4 ignoreDarkMode className="about__member-header">
                  {'Bella aka "Samira"'}
                  <Link
                    href="https://twitter.com/SamiTalksAbout"
                    target="_blank"
                    className="about__member-link"
                  >
                    {'@SamiTalksAbout'}
                  </Link>
                </H4>
                <P ignoreDarkMode className="about__member-text">
                  <FormattedMessage id="about.bellaText" />
                </P>
              </div>
            </div>
          </div>
        </Section>

        <Section className="home__not-a-member">
          <Illustration className="home__heart" name="heart" />
          <H2 style="h1" centered noMargin>
            <FormattedMessage id="home.notAMember" />
          </H2>
          <H3 style="h2" noMargin centered>
            <FormattedMessage id="home.promoText" />
          </H3>
          <ButtonLargeBlue
            icon="join"
            to="/join"
            contentBefore
            className="home__join"
          >
            <FormattedMessage
              id="header.register"
              values={{ b: (msg) => <b>{msg}</b> }}
            />
          </ButtonLargeBlue>
          <ButtonLargeLight icon="star" to="/features">
            <FormattedMessage
              id="home.allFeatures"
              values={{ b: (msg) => <b>{msg}</b> }}
            />
          </ButtonLargeLight>
        </Section>

        <Section>
          <H2 style="h1" id="new">
            <FormattedMessage id="about.updates" />
          </H2>
          <div className="about__updates-wrapper">
            {/* eslint-disable-next-line camelcase */}
            {releases.map(({ id, name, body, published_at }, index) => {
              const lines = body.split('\n');

              // eslint-disable-next-line no-lone-blocks
              return (
                <Expandable
                  className="about__updates"
                  key={id}
                  open={index === 0}
                  headline={
                    <>
                      <span>{`${name} -`}</span>
                      <time className="about__date">
                        <FormattedDate
                          value={new Date(published_at)}
                          month="long"
                          day="2-digit"
                          year="numeric"
                        />
                      </time>
                    </>
                  }
                >
                  <List>
                    {lines.map((line, lineIndex) => (
                      <ListItem key={lineIndex}>
                        {line.replace(/- /g, '')}
                        {lineIndex < lines.length - 1 && <br />}
                      </ListItem>
                    ))}
                  </List>
                </Expandable>
              );
            })}
          </div>
        </Section>
      </Page>
    );
  }
}

export default injectIntl(About);
