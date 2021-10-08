/* eslint-disable max-len */
/* eslint-disable react/jsx-no-literals */
import React, { PureComponent, Fragment } from 'react';
import { FormattedMessage } from 'react-intl';
import PropTypes from 'prop-types';

import Page from '../../templates/page';
import Section from '../../molecules/section';
import { H1, H2 } from '../../atoms/headline';
import P from '../../atoms/paragraph';
// import Link from '../../atoms/link';
import Illustration from '../../atoms/illustration';

export default class Terms extends PureComponent {
  static propTypes = {
    locale: PropTypes.string.isRequired
  };

  render() {
    const { locale } = this.props;

    return (
      <Page>
        <Section>
          <Illustration
            name="legal"
            className="legal__illustration booky--hide-mobile"
          />
          <H1>
            <FormattedMessage id="upsell.terms" />
          </H1>
          {locale === 'en' && (
            <>
              <H2>Information pursuant to § 5 TMG</H2>
              <P>{'Nico Thiebes'}</P>
            </>
          )}
          {locale === 'de' && (
            <>
              <H2>Angaben gemäß § 5 TMG</H2>
              <P>{'Nico Thiebes'}</P>
            </>
          )}
        </Section>
      </Page>
    );
  }
}
