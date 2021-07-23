/* eslint-disable max-lines */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage, injectIntl } from 'react-intl';
import { withRouter } from 'react-router-dom';
// import classNames from 'classnames';

import Page from '../../templates/page';
import { H1, H2, H3 } from '../../atoms/headline';
import P from '../../atoms/paragraph';
import Section from '../../molecules/section';
import Link from '../../atoms/link';
import Illustration from '../../atoms/illustration';
import Icon from '../../atoms/icon';
import { ButtonLargeBlue, ButtonLargeLight } from '../../atoms/button';
import { FeatureCard } from '../../molecules/feature-card';
import { TabBar, Tab } from '../../molecules/tab-bar';
// import Features from '../../molecules/features';
// import Feature from '../../molecules/feature';
import Expandable from '../../molecules/expandable';
// import Donate from '../../molecules/donate';

class FeaturesPage extends PureComponent {
  static propTypes = {
    intl: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired,
    darkMode: PropTypes.bool.isRequired
  };

  state = {
    activeTab: 'bookmarklet'
  };

  tabs = [
    {
      name: this.props.intl.formatMessage({ id: 'Bookmarklet' }),
      key: 'bookmarklet'
    },
    {
      name: this.props.intl.formatMessage({ id: 'Android App' }),
      key: 'android'
    },
    {
      name: this.props.intl.formatMessage({ id: 'iOS Web App' }),
      key: 'ios'
    },
    {
      name: this.props.intl.formatMessage({ id: 'macOS App' }),
      key: 'macos'
    },
    {
      name: this.props.intl.formatMessage({ id: 'Windows App' }),
      key: 'windows'
    }
  ];

  handleTabClick = (activeTab) => {
    const { history } = this.props;

    // history.push(`/features#${activeTab}`);

    this.setState({
      activeTab
    });
  };

  render() {
    const { intl } = this.props;
    const { activeTab, releases } = this.state;

    return (
      <Page showStats>
        {/* className="features-page" */}
        <Section>
          {/* <H1 centered>
            <FormattedMessage id="Features" />
          </H1> */}
          <H2 style="h1" centered>
            <FormattedMessage id="Customize the design." />
          </H2>
          <div className="features-page__cluster">
            <FeatureCard
              headline={intl.formatMessage({ id: 'Dark mode' })}
              text={intl.formatMessage({ id: 'home.privateText' })}
              illustration="icons/glyph/development"
              background="light"
            />
            <FeatureCard
              headline={intl.formatMessage({ id: 'Colors' })}
              text={intl.formatMessage({ id: 'home.privateText' })}
              illustration="icons/glyph/arts"
              background="light"
            />
            <FeatureCard
              headline={intl.formatMessage({ id: 'Layout' })}
              text={intl.formatMessage({ id: 'home.privateText' })}
              illustration="icons/glyph/comparison"
              background="light"
            />
          </div>
        </Section>

        <Section color="light" contentSpace>
          <H2 style="h1" centered>
            <FormattedMessage id="Organize your bookmarks." />
          </H2>
          <div className="features-page__cluster">
            <FeatureCard
              headline={intl.formatMessage({ id: 'Collections & categories' })}
              text={intl.formatMessage({ id: 'home.privateText' })}
              illustration="icons/glyph/folder_data"
              background="white"
            />
            <FeatureCard
              headline={intl.formatMessage({ id: 'Drag & drop' })}
              text={intl.formatMessage({ id: 'home.privateText' })}
              illustration="icons/glyph/work_flow"
              background="white"
            />
            <FeatureCard
              headline={intl.formatMessage({ id: 'Bookmark search' })}
              text={intl.formatMessage({ id: 'home.privateText' })}
              illustration="icons/glyph/searching"
              background="white"
            />
          </div>
        </Section>

        <Section>
          <H2 style="h1" centered>
            <FormattedMessage id="Take control." />
          </H2>
          <div className="features-page__cluster">
            <FeatureCard
              headline={intl.formatMessage({ id: 'Private collections' })}
              text={intl.formatMessage({ id: 'home.privateText' })}
              illustration="icons/glyph/privacy"
              background="light"
            />
            <FeatureCard
              headline={intl.formatMessage({ id: 'Public collections' })}
              text={intl.formatMessage({ id: 'home.privateText' })}
              illustration="icons/glyph/teamwork"
              background="light"
              payed
            />
            <FeatureCard
              headline={intl.formatMessage({ id: 'Preferences' })}
              text={intl.formatMessage({ id: 'home.privateText' })}
              illustration="icons/glyph/Page_Under_Construction"
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
            <FormattedMessage id="Access from anywhere." />
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
            <FormattedMessage id="Explore even more." />
          </H2>
          <div className="features-page__cluster">
            <FeatureCard
              headline={intl.formatMessage({ id: 'Bookmark import/export' })}
              text={intl.formatMessage({ id: 'home.privateText' })}
              illustration="icons/glyph/uploading"
              background="light"
            />
            <FeatureCard
              headline={intl.formatMessage({ id: 'Bookmark notes' })}
              text={intl.formatMessage({ id: 'home.privateText' })}
              illustration="icons/glyph/notes"
              background="light"
            />
            <FeatureCard
              headline={intl.formatMessage({ id: 'Search engine' })}
              text={intl.formatMessage({ id: 'home.privateText' })}
              illustration="icons/glyph/searching"
              background="light"
            />
          </div>
        </Section>

        {/* <Section>
          <H2 style="h1">
            <FormattedMessage id="How else can I use booky?" />
          </H2>
          <TabBar title="account.navigation" className="account__tab-bar">
            {this.tabs.map((tab) => (
              <Tab
                key={tab.key}
                tabId={tab.key}
                active={activeTab === tab.key}
                onClick={this.handleTabClick}
              >
                {tab.name}
              </Tab>
            ))}
          </TabBar>
          {activeTab === 'bookmarklet' && (
            <>
              <H3 className="" id="bookmarklet">
                <FormattedMessage id="Bookmarklet" />
              </H3>
            </>
          )}
          {activeTab === 'android' && (
            <>
              <H3 className="" id="bookmarklet">
                <FormattedMessage id="Bookmarklet" />
              </H3>
            </>
          )}
          {activeTab === 'ios' && (
            <>
              <H3>
                <FormattedMessage id="What's a web app?" />
              </H3>
              <P>
                <FormattedMessage id="Dies das" />
              </P>
            </>
          )}
          {activeTab === 'macos' && (
            <>
              <H3 className="" id="bookmarklet">
                <FormattedMessage id="Bookmarklet" />
              </H3>
            </>
          )}
          {activeTab === 'windows' && (
            <>
              <H3 className="" id="bookmarklet">
                <FormattedMessage id="Bookmarklet" />
              </H3>
            </>
          )}
        </Section> */}

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
