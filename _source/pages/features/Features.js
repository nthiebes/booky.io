/* eslint-disable max-lines */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage, injectIntl } from 'react-intl';
import { withRouter } from 'react-router-dom';

import Page from '../../templates/page';
import { H1, H2, H3 } from '../../atoms/headline';
import P from '../../atoms/paragraph';
import Section from '../../molecules/section';
import Link from '../../atoms/link';
import Illustration from '../../atoms/illustration';
import Icon from '../../atoms/icon';
import { ButtonLargeBlue, ButtonLargeLight } from '../../atoms/button';
import { FeatureCard } from '../../molecules/feature-card';

class FeaturesPage extends PureComponent {
  static propTypes = {
    intl: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired,
    darkMode: PropTypes.bool.isRequired
  };

  render() {
    const { intl } = this.props;

    return (
      <Page showStats>
        <Section>
          <H1 className="features-page__title">
            <FormattedMessage id="menu.features" />
          </H1>
          <H2 style="h1" centered>
            <FormattedMessage id="features.customize" />
          </H2>
          <div className="features-page__cluster">
            <FeatureCard
              headline={intl.formatMessage({ id: 'customize.darkMode' })}
              text={intl.formatMessage({ id: 'home.privateText' })}
              illustration="dark-mode-switch"
              background="light"
              illustrationClassName="features-page__dark-mode"
            />
            <FeatureCard
              headline={intl.formatMessage({ id: 'features.colors' })}
              text={intl.formatMessage({ id: 'home.privateText' })}
              illustration="colors"
              background="light"
            />
            <FeatureCard
              headline={intl.formatMessage({ id: 'features.layout' })}
              text={intl.formatMessage({ id: 'home.privateText' })}
              illustration="organize"
              background="light"
            />
          </div>
        </Section>

        <Section color="light" contentSpace>
          <H2 style="h1" centered>
            <FormattedMessage id="features.organize" />
          </H2>
          <div className="features-page__cluster">
            <FeatureCard
              headline={intl.formatMessage({ id: 'misc.feature6' })}
              text={intl.formatMessage({ id: 'home.privateText' })}
              illustration="folders"
              background="white"
            />
            <FeatureCard
              headline={intl.formatMessage({ id: 'features.sort' })}
              text={intl.formatMessage({ id: 'home.privateText' })}
              illustration="drag"
              background="white"
            />
            <FeatureCard
              headline={intl.formatMessage({ id: 'misc.feature4' })}
              text={intl.formatMessage({ id: 'home.privateText' })}
              illustration="search"
              background="white"
            />
          </div>
        </Section>

        <Section>
          <H2 style="h1" centered>
            <FormattedMessage id="features.control" />
          </H2>
          <div className="features-page__cluster">
            <FeatureCard
              headline={intl.formatMessage({
                id: 'features.privateCollections'
              })}
              text={intl.formatMessage({ id: 'home.privateText' })}
              illustration="private-collections"
              background="light"
            />
            <FeatureCard
              headline={intl.formatMessage({
                id: 'features.publicCollections'
              })}
              text={intl.formatMessage({ id: 'home.privateText' })}
              illustration="share-collections"
              background="light"
              payed
            />
            <FeatureCard
              headline={intl.formatMessage({ id: 'features.settings' })}
              text={intl.formatMessage({ id: 'home.privateText' })}
              illustration="settings"
              background="light"
            />
          </div>
        </Section>

        <Section
          color="dark"
          className="home__availability-wrapper"
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
          <H2 style="h1" color="light" noMargin centered>
            <FormattedMessage id="features.access" />
          </H2>
          <nav className="home__platforms">
            <Link
              href="https://chrome.google.com/webstore/detail/bookyio-extension/pmcpkkipiedakcaolhnbijibndfemckf"
              target="_blank"
              color="light"
              className="home__platforms-platform"
            >
              <img
                width="75"
                height="75"
                alt=""
                className="home__platforms-icon"
                src="../../_assets/logos/chrome.svg"
                loading="lazy"
              />
              {'Chrome '}
              <FormattedMessage id="misc.extension" />
            </Link>
            <Link
              href="https://addons.mozilla.org/en-US/firefox/addon/booky-io-extension/"
              target="_blank"
              color="light"
              className="home__platforms-platform"
            >
              <img
                width="75"
                height="75"
                alt=""
                className="home__platforms-icon"
                src="../../_assets/logos/firefox.svg"
                loading="lazy"
              />
              {'Firefox '}
              <FormattedMessage id="misc.extension" />
            </Link>
            <Link
              href="https://addons.opera.com/de/extensions/details/bookyio-extension/"
              target="_blank"
              color="light"
              className="home__platforms-platform"
            >
              <img
                width="75"
                height="75"
                alt=""
                className="home__platforms-icon"
                src="../../_assets/logos/opera.svg"
                loading="lazy"
              />
              {'Opera '}
              <FormattedMessage id="misc.extension" />
            </Link>
            <Link
              href="https://microsoftedge.microsoft.com/addons/detail/bookyio-erweiterung/gnhlkmoepijbfnmblekhhdgkgdahdjek"
              target="_blank"
              color="light"
              className="home__platforms-platform"
            >
              <img
                width="75"
                height="75"
                alt=""
                className="home__platforms-icon"
                src="../../_assets/logos/edge.svg"
                loading="lazy"
              />
              {'Edge '}
              <FormattedMessage id="misc.extension" />
            </Link>
            <Link
              to="/bookmarklet"
              color="light"
              className="home__platforms-platform"
            >
              <img
                width="75"
                height="75"
                alt=""
                className="home__platforms-icon"
                src="../../_assets/icons/android-chrome-192x192.png"
                loading="lazy"
              />
              {'Bookmarklet'}
            </Link>
            <Link
              to="/features#android"
              color="light"
              className="home__platforms-platform"
            >
              <img
                width="75"
                height="75"
                alt=""
                className="home__platforms-icon"
                src="../../_assets/logos/android.svg"
                loading="lazy"
              />
              {'Android'}
            </Link>
            <Link
              to="/features#ios"
              color="light"
              className="home__platforms-platform"
            >
              <img
                width="75"
                height="75"
                alt=""
                className="home__platforms-icon"
                src="../../_assets/logos/apple.svg"
                loading="lazy"
              />
              {'iOS (Web)'}
            </Link>
            <Link
              href="../../_assets/downloads/booky.zip"
              target="_blank"
              color="light"
              className="home__platforms-platform"
            >
              <img
                width="75"
                height="75"
                alt=""
                className="home__platforms-icon"
                src="../../_assets/logos/finder.svg"
                loading="lazy"
              />
              {'macOS'}
            </Link>
            <Link
              href="https://www.groovypost.com/howto/using-web-apps-new-chromium-edge-windows-10/"
              target="_blank"
              color="light"
              className="home__platforms-platform"
            >
              <img
                width="75"
                height="75"
                alt=""
                className="home__platforms-icon"
                src="../../_assets/logos/windows.svg"
                loading="lazy"
              />
              {'Windows'}
            </Link>
          </nav>
        </Section>

        <Section>
          <H2 style="h1" centered noMargin>
            <FormattedMessage id="features.explore" />
          </H2>
          <div className="features-page__cluster">
            <FeatureCard
              headline={intl.formatMessage({ id: 'misc.feature3' })}
              text={intl.formatMessage({ id: 'home.privateText' })}
              illustration="import"
              background="light"
            />
            <FeatureCard
              headline={intl.formatMessage({ id: 'misc.feature9' })}
              text={intl.formatMessage({ id: 'home.privateText' })}
              illustration="notes"
              background="light"
            />
            <FeatureCard
              headline={intl.formatMessage({ id: 'features.searchEngine' })}
              text={intl.formatMessage({ id: 'home.privateText' })}
              illustration="search"
              background="light"
            />
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
          <ButtonLargeLight icon="about" to="/about">
            <FormattedMessage
              id="home.aboutBooky"
              values={{ b: (msg) => <b>{msg}</b> }}
            />
          </ButtonLargeLight>
        </Section>
      </Page>
    );
  }
}

export default injectIntl(withRouter(FeaturesPage));
