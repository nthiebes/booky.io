import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';

import Page from '../../templates/page';
import { H1 } from '../../atoms/headline';
import Section from '../../molecules/section';

export default class Next extends Component {
  render() {
    return (
      <Page>
        <Section>
          <H1>
            <FormattedMessage id="next.title" />
          </H1>
        </Section>
      </Page>
    );
  }
}
