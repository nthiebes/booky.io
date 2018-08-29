import React, { Component } from 'react';

import Page from '../../templates/page';
import { H1 } from '../../atoms/headline';
import P from '../../atoms/paragraph';
import Section from '../../molecules/section';

export default class Help extends Component {
  render() {
    return (
      <Page>
        <Section>
          <H1>{ 'Help' }</H1>
          <P>{ 'Help page' }</P>
        </Section>
      </Page>
    );
  }
}
