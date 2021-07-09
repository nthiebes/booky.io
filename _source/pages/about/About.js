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
import Feature from '../../molecules/feature';
import Expandable from '../../molecules/expandable';
import { ButtonLargeBlue, ButtonLargeLight } from '../../atoms/button';
import Illustration from '../../atoms/illustration';

class About extends PureComponent {
  static propTypes = {
    intl: PropTypes.object.isRequired,
    stickyHeader: PropTypes.bool
  };

  render() {
    const { intl, stickyHeader } = this.props;

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
          <Feature
            headline={intl.formatMessage({ id: 'home.privateHeadline' })}
            text={intl.formatMessage({ id: 'home.privateText' })}
            illustration="protection"
          />
        </Section>
        <Section>
          <Feature
            headline={intl.formatMessage({ id: 'home.customizableHeadline' })}
            text={intl.formatMessage({ id: 'home.customizableText' })}
            illustration="customize"
            direction="right"
          />
        </Section>
        <Section color="light" contentSpace>
          <H2 style="h1" noMargin centered className="home__features-headline">
            <FormattedMessage id="about.why" />
          </H2>
          <P>
            <Icon icon="check" />
            <FormattedMessage id="Save and access links across browsers and devices" />
            <Icon icon="check" />
            <FormattedMessage id="Better organisation of your bookmarks" />
            <Icon icon="check" />
            <FormattedMessage id="Cloud" />
          </P>
          <H3 style="h2">
            <FormattedMessage id="Save whatever you like on booky! Some typical use cases:" />
          </H3>
          <Expandable headline={<FormattedMessage id="Collect recipes" />}>
            <P>
              <FormattedMessage id="about.privacyText" />
            </P>
          </Expandable>
        </Section>
        <Section>
          <Feature
            headline={intl.formatMessage({ id: 'home.performantHeadline' })}
            text={intl.formatMessage({ id: 'home.performantText' })}
            illustration="speed"
          />
        </Section>
        <Section>
          <Feature
            headline={intl.formatMessage({ id: 'home.mobileHeadline' })}
            text={intl.formatMessage({ id: 'home.mobileText' })}
            illustration="mobile"
            direction="right"
          />
        </Section>
        <Section color="light" contentSpace>
          <H2 style="h1">
            <FormattedMessage id="about.topics" />
          </H2>
          <H3 style="h2">
            <FormattedMessage id="about.privacy" />
          </H3>
          <P>
            <FormattedMessage
              id="about.privacyText"
              values={{
                privacy: (
                  <Link to="/privacy">
                    {<FormattedMessage id="menu.privacy" />}
                  </Link>
                )
              }}
            />
          </P>
          <H3 style="h2">
            <FormattedMessage id="about.feedback" />
          </H3>
          <P>
            <FormattedMessage
              id="contact.text"
              values={{
                link: (
                  <Link to="/contact">
                    {<FormattedMessage id="contact.textLink" />}
                  </Link>
                )
              }}
            />
          </P>
          {/* <H3 style="h2">
            <FormattedMessage id="about.private" />
          </H3>
          <P>
            <FormattedMessage id="about.privateText" />
          </P> */}
          <H3 style="h2">
            <FormattedMessage id="about.support" />
          </H3>
          <P>
            <FormattedMessage id="about.supportText" />
          </P>
          <ButtonLargeBlue icon="heart" to="/supporter">
            <FormattedMessage
              id="button.memberships"
              values={{ b: (msg) => <b>{msg}</b> }}
            />
          </ButtonLargeBlue>
        </Section>
        <Section>
          <H2 style="h1">
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
      </Page>
    );
  }
}

export default injectIntl(About);
