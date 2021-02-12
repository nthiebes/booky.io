import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { DiscussionEmbed } from 'disqus-react';

import Page from '../../templates/page';
import { H1 } from '../../atoms/headline';
import P from '../../atoms/paragraph';
import Section from '../../molecules/section';

export default class Feedback extends Component {
  render() {
    const disqusConfig = {
      url: 'https://booky.io/feedback',
      identifier: 'feedback',
      title: 'booky.io | Feedback'
    };

    return (
      <Page>
        <Section>
          <H1>
            <FormattedMessage id="feedback.title" />
          </H1>
          <P>
            <FormattedMessage id="feedback.text" />
          </P>
          <DiscussionEmbed shortname="quickbm" config={disqusConfig} />
        </Section>
      </Page>
    );
  }
}
