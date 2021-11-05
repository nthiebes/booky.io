import React, { PureComponent } from 'react';
import { FormattedMessage } from 'react-intl';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Page from '../../templates/page';
import Section from '../../molecules/section';
import { H1 } from '../../atoms/headline';

import './Terms.scss';

export default class Terms extends PureComponent {
  static propTypes = {
    locale: PropTypes.string.isRequired,
    darkMode: PropTypes.bool
  };

  componentDidMount = () => {
    const script = document.createElement('script'),
      tag = document.getElementsByTagName('script')[0];

    script.src = 'https://cdn.iubenda.com/iubenda.js';
    tag.parentNode.insertBefore(script, tag);
  };

  render() {
    const { locale, darkMode } = this.props;
    const termsLink =
      locale === 'de'
        ? 'https://www.iubenda.com/nutzungsbedingungen/22355107'
        : 'https://www.iubenda.com/terms-and-conditions/72804910';

    return (
      <Page className={classNames(darkMode && 'terms--darkMode')}>
        <Section>
          <H1>
            <FormattedMessage id="upsell.terms" />
          </H1>
          <a
            href={termsLink}
            target="_blank"
            className="terms__iubenda iubenda-white no-brand iubenda-noiframe iubenda-embed iub-no-markup iub-body-embed"
            title="AGB"
            rel="noopener noreferrer"
          >
            {'AGB'}
          </a>
        </Section>
      </Page>
    );
  }
}
