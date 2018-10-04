import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';

import { ButtonSmallPrimary } from '../../atoms/button';
import Page from '../../templates/page';
import { H1 } from '../../atoms/headline';
import StructureComponent from '../../organisms/structure';
import Section from '../../molecules/section';

export default class Structure extends Component {
  render() {
    return (
      <Page>
        <Section>
          <H1>
            <span className="structure__headline"><FormattedMessage id="structure.title" /></span>
            <ButtonSmallPrimary to="/" icon="check">
              <FormattedMessage id="button.done" />
            </ButtonSmallPrimary>
          </H1>
          <StructureComponent />
        </Section>
      </Page>
    );
  }
}
