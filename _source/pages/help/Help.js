import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import classNames from 'classnames';
import './Help.scss';

import Page from '../../templates/page';
import { H1 } from '../../atoms/headline';
import P from '../../atoms/paragraph';
import Section from '../../molecules/section';

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
