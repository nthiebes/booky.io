/* eslint-disable max-lines */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage, injectIntl } from 'react-intl';
import { withRouter } from 'react-router-dom';
// import classNames from 'classnames';

// import { config } from '../../config';
import Page from '../../templates/page';
import { H1, H2, H3 } from '../../atoms/headline';
import P from '../../atoms/paragraph';
import Section from '../../molecules/section';
// import { List, ListItem } from '../../atoms/list';
import Link from '../../atoms/link';
import Illustration from '../../atoms/illustration';
import Icon from '../../atoms/icon';
import { ButtonLargeBlue, ButtonLargeLight } from '../../atoms/button';
import { FeatureCard } from '../../molecules/feature-card/FeatureCard';
import { TabBar, Tab } from '../../molecules/tab-bar';
// import Features from '../../molecules/features';
// import Feature from '../../molecules/feature';
// import Expandable from '../../molecules/expandable';
// import Donate from '../../molecules/donate';

class FeaturesPage extends PureComponent {
  static propTypes = {
    intl: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired,
    darkMode: PropTypes.bool.isRequired,
    updateSettings: PropTypes.func.isRequired,
    newsVersion: PropTypes.number.isRequired
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
    const { activeTab } = this.state;

    return (
      <Page showStats className="features-page">
        <Section color="light" contentSpace>
          {/* <H1>
            <FormattedMessage id="Features" />
          </H1> */}
          <H2>
            <FormattedMessage id="Customize" />
          </H2>
          <FeatureCard
            headline={intl.formatMessage({ id: 'Dark mode' })}
            text={intl.formatMessage({ id: 'home.privateText' })}
            illustration="protection"
          />
          <FeatureCard
            headline={intl.formatMessage({ id: 'Colors' })}
            text={intl.formatMessage({ id: 'home.privateText' })}
            illustration="protection"
          />
          <FeatureCard
            headline={intl.formatMessage({ id: 'Layout' })}
            text={intl.formatMessage({ id: 'home.privateText' })}
            illustration="protection"
          />
        </Section>
        <Section>
          <H2>
            <FormattedMessage id="Organize" />
          </H2>
          <FeatureCard
            headline={intl.formatMessage({ id: 'Collections & categories' })}
            text={intl.formatMessage({ id: 'home.privateText' })}
            illustration="protection"
          />
          <FeatureCard
            headline={intl.formatMessage({ id: 'Drag & drop' })}
            text={intl.formatMessage({ id: 'home.privateText' })}
            illustration="protection"
          />
          <FeatureCard
            headline={intl.formatMessage({ id: 'Bookmark search' })}
            text={intl.formatMessage({ id: 'home.privateText' })}
            illustration="protection"
          />
          <H2>
            <FormattedMessage id="Control" />
          </H2>
          <FeatureCard
            headline={intl.formatMessage({ id: 'Private collections' })}
            text={intl.formatMessage({ id: 'home.privateText' })}
            illustration="protection"
          />
          <FeatureCard
            headline={intl.formatMessage({ id: 'Public collections' })}
            text={intl.formatMessage({ id: 'home.privateText' })}
            illustration="protection"
          />
          <FeatureCard
            headline={intl.formatMessage({ id: 'Preferences' })}
            text={intl.formatMessage({ id: 'home.privateText' })}
            illustration="protection"
          />
        </Section>
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
        </Section>
        <Section>
          <H2>
            <FormattedMessage id="More features" />
          </H2>
          <FeatureCard
            headline={intl.formatMessage({ id: 'Bookmark import/export' })}
            text={intl.formatMessage({ id: 'home.privateText' })}
            illustration="protection"
          />
          <FeatureCard
            headline={intl.formatMessage({ id: 'Bookmark notes' })}
            text={intl.formatMessage({ id: 'home.privateText' })}
            illustration="protection"
          />
          <FeatureCard
            headline={intl.formatMessage({ id: 'Search engine' })}
            text={intl.formatMessage({ id: 'home.privateText' })}
            illustration="protection"
          />
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
