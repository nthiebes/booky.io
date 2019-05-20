import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';

import Page from '../../templates/page';
import { H1, H2 } from '../../atoms/headline';
import P from '../../atoms/paragraph';
import Section from '../../molecules/section';

export default class About extends Component {
  render() {
    return (
      <Page>
        <Section>
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
        </Section>
      </Page>
    );
  }
}
