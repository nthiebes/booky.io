import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';

import Page from '../../templates/page';
// import { H1 } from '../../atoms/headline';
import Section from '../../molecules/section';
import Empty from '../../molecules/empty';

export default class Forgot extends Component {
  render() {
    return (
      <Page>
        <Section>
          <Empty illustration="monitor-window">
            <FormattedMessage id="misc.comingSoon" />
          </Empty>
        </Section>
      </Page>
    );
  }
}

/*
<H1>
  <FormattedMessage id="forgot.title" />
</H1>
 */
