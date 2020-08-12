import React, { Component } from 'react';

import Page from '../../templates/page';
import Section from '../../molecules/section';
import Icon from '../../atoms/icon';

export default class Loading extends Component {
  render() {
    return (
      <Page>
        <Section>
          <Icon icon="spinner" className="loading-page__spinner" />
        </Section>
      </Page>
    );
  }
}
