import React, { Component, Fragment } from 'react';
import { FormattedMessage } from 'react-intl';
import { format } from 'date-fns';

import Page from '../../templates/page';
import { H1, H2, H3 } from '../../atoms/headline';
import P from '../../atoms/paragraph';
import Section from '../../molecules/section';
import { List, ListItem } from '../../atoms/list';

export default class About extends Component {
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
    const { releases } = this.state;

    return (
      <Page>
        <Section>
          <H1>
            <FormattedMessage id="about.title" />
          </H1>
          <P first>
            <FormattedMessage id="misc.comingSoon" />
          </P>
          <H2>
            <FormattedMessage id="about.betaUpdates" />
          </H2>
          { /* eslint-disable-next-line camelcase */ }
          { releases.map(({ id, name, body, published_at }) => {
            const lines = body.split('\n');
            
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
 * 
 * All features
 * 
 * The team
 * 
 * A few words on...
 * - privacy
 * - the project
 * 
 * Update history
 */
