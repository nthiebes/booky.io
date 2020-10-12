import React, { PureComponent } from 'react';
import { FormattedMessage } from 'react-intl';
import { DiscussionEmbed } from 'disqus-react';

import Page from '../../templates/page';
import { H1, H2 } from '../../atoms/headline';
import P from '../../atoms/paragraph';
import Section from '../../molecules/section';
import Expandable from '../../molecules/expandable';
import Illustration from '../../atoms/illustration';

export default class Next extends PureComponent {
  render() {
    const disqusConfig = {
      url: 'https://booky.io/next',
      identifier: 'next',
      title: 'booky.io | Next'
    };

    return (
      <Page>
        <Section className="next">
          <span>
            <H1>
              <FormattedMessage id="next.title" />
            </H1>
            <P>
              <FormattedMessage id="next.text" />
            </P>
            <div className="next__feature">
              <H2>
                <FormattedMessage id="next.current" />
              </H2>
              <Expandable headline={ <FormattedMessage id="next.current.title" /> }>
                <P noPadding>
                  <FormattedMessage id="next.current.more" />
                </P>
              </Expandable>
            </div>
            <div className="next__feature">
              <H2>
                <FormattedMessage id="next.upcoming" />
              </H2>
              <Expandable headline={ <FormattedMessage id="next.upcoming.title" /> }>
                <P noPadding>
                  <FormattedMessage id="next.upcoming.more" />
                </P>
              </Expandable>
            </div>
          </span>
          <Illustration
            name="next"
            className="next__illustration booky--hide-mobile-tablet"
          />
        </Section>
        <Section>
          <H2 nomargin>
            <FormattedMessage id="help.comments" />
          </H2>
          <DiscussionEmbed shortname="quickbm" config={ disqusConfig } />
        </Section>
      </Page>
    );
  }
}
