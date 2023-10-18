/* eslint-disable max-lines */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage, injectIntl } from 'react-intl';
import classNames from 'classnames';

import Page from '../../templates/page';
import { H2, H3, H4, Display } from '../../atoms/headline';
import P from '../../atoms/paragraph';
import Section from '../../molecules/section';
import Link from '../../atoms/link';
import Icon from '../../atoms/icon';
import { FeatureCard } from '../../molecules/feature-card';
import { ButtonLargeBlue, ButtonLargeLight } from '../../atoms/button';
import Illustration from '../../atoms/illustration';

class About extends PureComponent {
  static propTypes = {
    intl: PropTypes.object.isRequired,
    stickyHeader: PropTypes.bool,
    darkMode: PropTypes.bool
  };

  render() {
    const { intl, stickyHeader, darkMode } = this.props;

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
          <div className="about__cluster">
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
          <div className="about__cluster">
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
              text={intl.formatMessage({ id: 'about.supportText' })}
              illustration="support"
              background="light"
              cta={
                <ButtonLargeBlue
                  icon="membership"
                  to="/supporter"
                  contentBefore
                >
                  {intl.formatMessage(
                    { id: 'button.memberships' },
                    { b: (msg) => <b>{msg}</b> }
                  )}
                </ButtonLargeBlue>
              }
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
              <Icon icon="food" color="primary" size="medium" />
              <P color="light">
                <b>
                  <FormattedMessage id="about.recipes" />
                </b>
              </P>
            </li>
            <li className="about__usecase">
              <Icon icon="earth" color="primary" size="medium" />
              <P color="light">
                <b>
                  <FormattedMessage id="about.travel" />
                </b>
              </P>
            </li>
            <li className="about__usecase">
              <Icon icon="school" color="primary" size="medium" />
              <P color="light">
                <b>
                  <FormattedMessage id="about.studies" />
                </b>
              </P>
            </li>
            <li className="about__usecase">
              <Icon icon="intranet" color="primary" size="medium" />
              <P color="light">
                <b>
                  <FormattedMessage id="about.intranet" />
                </b>
              </P>
            </li>
            <li className="about__usecase">
              <Icon icon="gift" color="primary" size="medium" />
              <P color="light">
                <b>
                  <FormattedMessage id="about.gifts" />
                </b>
              </P>
            </li>
            <li className="about__usecase">
              <Icon icon="list" color="primary" size="medium" />
              <P color="light">
                <b>
                  <FormattedMessage id="about.shopping" />
                </b>
              </P>
            </li>
          </ul>
        </Section>

        <Section>
          <H2 style="h1" centered>
            <FormattedMessage id="about.team" />
          </H2>
          <div
            className={classNames(
              'about__members',
              darkMode && 'about__members--darkMode'
            )}
          >
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
                <H4 className="about__member-header">
                  {'Rocky aka "Nico"'}
                  <Link
                    href="https://twitter.com/_gscheid"
                    target="_blank"
                    className="about__member-link"
                  >
                    {'@_gscheid'}
                  </Link>
                </H4>
                <P className="about__member-text">
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
                <H4 className="about__member-header">
                  {'Sheldon aka "Mariano"'}
                  <Link
                    href="https://github.com/mcustiel"
                    target="_blank"
                    className="about__member-link"
                  >
                    {'mcustiel'}
                  </Link>
                </H4>
                <P className="about__member-text">
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
                <H4 className="about__member-header">{'Bella aka "Samira"'}</H4>
                <P className="about__member-text">
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
      </Page>
    );
  }
}

export default injectIntl(About);
