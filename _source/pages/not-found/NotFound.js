import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';

import Page from '../../templates/page';
import { H1 } from '../../atoms/headline';
import P from '../../atoms/paragraph';
import Section from '../../molecules/section';

export default class NotFound extends Component {
  render() {
    return (
      <Page>
        <Section>
          <H1>{ '404' }</H1>
          <P first>
            <FormattedMessage id="notFound.text" />
          </P>
        </Section>
      </Page>
    );
  }
}
