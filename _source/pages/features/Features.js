/* eslint-disable max-lines */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage, injectIntl } from 'react-intl';
// import classNames from 'classnames';

// import { config } from '../../config';
import Page from '../../templates/page';
import { H2, H3 } from '../../atoms/headline';
import P from '../../atoms/paragraph';
import Section from '../../molecules/section';
// import { List, ListItem } from '../../atoms/list';
import Link from '../../atoms/link';
import Illustration from '../../atoms/illustration';
import Icon from '../../atoms/icon';
import { FeatureCard } from '../../molecules/feature-card/FeatureCard';
// import Features from '../../molecules/features';
// import Feature from '../../molecules/feature';
// import Expandable from '../../molecules/expandable';
// import Donate from '../../molecules/donate';

class FeaturesPage extends PureComponent {
  static propTypes = {
    intl: PropTypes.object.isRequired,
    darkMode: PropTypes.bool.isRequired,
    updateSettings: PropTypes.func.isRequired,
    newsVersion: PropTypes.number.isRequired
  };

  render() {
    const { intl } = this.props;

    return (
      <Page showStats className="features-page">
        <Section color="medium" contentSpace>
          <FeatureCard
            headline={intl.formatMessage({ id: 'home.privateHeadline' })}
            text={intl.formatMessage({ id: 'home.privateText' })}
            illustration="protection"
          />
          <FeatureCard
            headline={intl.formatMessage({ id: 'home.privateHeadline' })}
            text={intl.formatMessage({ id: 'home.privateText' })}
            illustration="protection"
          />
          <FeatureCard
            headline={intl.formatMessage({ id: 'home.privateHeadline' })}
            text={intl.formatMessage({ id: 'home.privateText' })}
            illustration="protection"
          />
          {/* <Icon icon="customize" className="" />
          <H2 className="">
            <FormattedMessage id="Customize" />
          </H2>
          <H3 className="">
            <FormattedMessage id="Dark mode" />
          </H3>
          <P className="">
            <FormattedMessage id="Dies das text." />
          </P>
          <H3 className="">
            <FormattedMessage id="Colors" />
          </H3>
          <P className="">
            <FormattedMessage id="Dies das text." />
          </P>
          <H3 className="">
            <FormattedMessage id="Layout" />
          </H3>
          <P className="">
            <FormattedMessage id="Dies das text." />
          </P> */}
        </Section>
        <Section>
          <Icon icon="collection" className="" />
          <H2 className="">
            <FormattedMessage id="Organize" />
          </H2>
          <H3 className="">
            <FormattedMessage id="Collections and categories" />
          </H3>
          <P className="">
            <FormattedMessage id="Dies das text." />
          </P>
          <H3 className="">
            <FormattedMessage id="Drag and drop" />
          </H3>
          <P className="">
            <FormattedMessage id="Dies das text." />
          </P>
          <H3 className="">
            <FormattedMessage id="Search" />
          </H3>
          <P className="">
            <FormattedMessage id="Dies das text." />
          </P>
        </Section>
        <Section>
          <Icon icon="lock" className="" />
          <H2 className="">
            <FormattedMessage id="Control" />
          </H2>
          <H3 className="">
            <FormattedMessage id="Private collections" />
          </H3>
          <P className="">
            <FormattedMessage id="Dies das text." />
          </P>
          <H3 className="">
            <FormattedMessage id="Public collections" />
          </H3>
          <P className="">
            <FormattedMessage id="Dies das text." />
          </P>
          <H3 className="">
            <FormattedMessage id="Notes" />
          </H3>
          <P className="">
            <FormattedMessage id="Dies das text." />
          </P>
        </Section>
        {/* <Section>
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
        </Section> */}
        {/* <Section color={darkMode ? 'dark' : 'light'} contentSpace>
          <H2 style="h1" noMargin centered className="home__features-headline">
            <FormattedMessage id="misc.features" />
          </H2>
          <Features />
        </Section> */}
        {/* <Section>
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
        </Section> */}
        <Section
          color="dark"
          contentSpace
          contentClassName="features__bookmarklet"
        >
          <Illustration
            className="home__plant booky--hide-mobile"
            name="plant"
          />
          <Illustration
            className="home__trees booky--hide-mobile-tablet"
            name="trees"
          />
          <H2 style="h1" color="light" id="platforms" noMargin centered>
            <FormattedMessage id="misc.feature1" />
          </H2>
          <H3 style="h2" color="light" noMargin centered>
            <FormattedMessage id="home.extensionText" />
          </H3>
          <nav className="about__extension">
            <Link
              href="https://chrome.google.com/webstore/detail/bookyio-extension/pmcpkkipiedakcaolhnbijibndfemckf"
              target="_blank"
              color="light"
              className="about__extension-browser"
            >
              <img
                width="75"
                height="75"
                alt=""
                className="about__extension-icon"
                src="../../_assets/logos/chrome.svg"
                loading="lazy"
              />
              {'Chrome'}
            </Link>
            <Link
              href="https://addons.mozilla.org/en-US/firefox/addon/booky-io-extension/"
              target="_blank"
              color="light"
              className="about__extension-browser"
            >
              <img
                width="75"
                height="75"
                alt=""
                className="about__extension-icon"
                src="../../_assets/logos/firefox.svg"
                loading="lazy"
              />
              {'Firefox'}
            </Link>
            <Link
              href="https://addons.opera.com/de/extensions/details/bookyio-extension/"
              target="_blank"
              color="light"
              className="about__extension-browser"
            >
              <img
                width="75"
                height="75"
                alt=""
                className="about__extension-icon"
                src="../../_assets/logos/opera.svg"
                loading="lazy"
              />
              {'Opera'}
            </Link>
            <Link
              href="https://microsoftedge.microsoft.com/addons/detail/bookyio-erweiterung/gnhlkmoepijbfnmblekhhdgkgdahdjek"
              target="_blank"
              color="light"
              className="about__extension-browser"
            >
              <img
                width="75"
                height="75"
                alt=""
                className="about__extension-icon"
                src="../../_assets/logos/edge.svg"
                loading="lazy"
              />
              {'Edge'}
            </Link>
          </nav>
        </Section>
        <Section>
          <H2>
            <FormattedMessage id="Platforms" />
          </H2>
          <H3 className="">
            <FormattedMessage id="Bookmarklet" />
          </H3>
          <H3 className="">
            <FormattedMessage id="Android App" />
          </H3>
          <H3 className="">
            <FormattedMessage id="iOS Web App" />
          </H3>
          <H3 className="">
            <FormattedMessage id="macOS App" />
          </H3>
          <H3 className="">
            <FormattedMessage id="Windows App" />
          </H3>
        </Section>
      </Page>
    );
  }
}

export default injectIntl(FeaturesPage);
