import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import './Help.scss';

import Page from '../../templates/page';
import { H1 } from '../../atoms/headline';
import P from '../../atoms/paragraph';
import Section from '../../molecules/section';
import Expandable from '../../molecules/expandable';

export default class Help extends Component {
  render() {
    return (
      <Page className="help">
        <Section>
          <H1>
            <FormattedMessage id="help.title" />
          </H1>
          <P>
            <FormattedMessage id="help.intro" />
          </P>
          <Expandable headline="Wie kann ich dies das Ananas?">
            { 'I love Sami' }
          </Expandable>
        </Section>
        <Section>
          <H1>
            <FormattedMessage id="help.title" />
          </H1>
          <P>
            <FormattedMessage id="help.intro" />
          </P>
        </Section>
        <Section>
          <H1>
            <FormattedMessage id="help.title" />
          </H1>
          <P>
            <FormattedMessage id="help.intro" />
          </P>
        </Section>
        <Section>
          <H1>
            <FormattedMessage id="help.title" />
          </H1>
          <P>
            <FormattedMessage id="help.intro" />
          </P>
        </Section>
      </Page>
    );
  }
}
