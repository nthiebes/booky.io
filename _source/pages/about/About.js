import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage, injectIntl } from 'react-intl';
import { format } from 'date-fns';

import Page from '../../templates/page';
import { H1, H2, H3 } from '../../atoms/headline';
// import P from '../../atoms/paragraph';
import Section from '../../molecules/section';
import { List, ListItem } from '../../atoms/list';
import Features from '../../molecules/features';
import Feature from '../../molecules/feature';

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
      <Page>
        <Section>
          <H1>
            <FormattedMessage id="about.title" />
          </H1>
          {'this that top features'}
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
        <Section color="light">
          <H2 style="h1">
            <FormattedMessage id="misc.features" />
          </H2>
          <Features />
        </Section>
        <Section>
          <H2>
            <FormattedMessage id="about.betaUpdates" />
          </H2>
          { /* eslint-disable-next-line camelcase */ }
          { releases.map(({ id, name, body, published_at }) => {
            const lines = body.split('\n');

            // eslint-disable-next-line no-lone-blocks
            { /* return (
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
            ); */ }
            
            return (
              <Fragment key={ id }>
                <H3 style="h4">
                  <span>{ `${name} -` }</span>
                  <time className="about__date">{ format(new Date(published_at), 'MM/dd/yyyy') }</time>
                </H3>
                <List>
                  { lines.map((line, index) => (
                    <ListItem key={ index }>
                      { line.replace(/- /g, '') }
                      { index < lines.length - 1 && <br /> }
                    </ListItem>
                  )) }
                </List>
              </Fragment>
            );
          }) }
        </Section>
      </Page>
    );
  }
}

export default injectIntl(About);

/*
<H1>
  <FormattedMessage id="about.title" />
</H1>
<H2>
  <FormattedMessage id="about.keyFeatures" />
</H2>
<H2>
  <FormattedMessage id="about.allFeatures" />
</H2>
<ul>
  <li><FormattedMessage id="about.feature1" /></li>
  <li><FormattedMessage id="about.feature2" /></li>
  <li><FormattedMessage id="about.feature3" /></li>
  <li><FormattedMessage id="about.feature4" /></li>
  <li><FormattedMessage id="about.feature5" /></li>
</ul>
<H2>
  <FormattedMessage id="about.historyTitle" />
</H2>
<P>
  <FormattedMessage id="about.historyText" />
</P>
*/

/**
 * Online bookmark manager with a focus on simplicity, customizability, privacy, and speed.
 * 
 * 
 * Key features
 * - Private bookmarks.
 * - Fast and easy to use.
 * - Available everywhere.
 * - Customize booky.
 * - extension / bookmarklet
 * - private project
 * - your support
 * 
 * All features
 * 
 * The team
 * - Nico, founder, fe dev
 * - Mariano, be dev
 * 
 * A few words on...
 * - privacy
 * -- data handling
 * - the project
 * -- private
 * -- support
 * -- feedback
 * 
 * Update history
 */
