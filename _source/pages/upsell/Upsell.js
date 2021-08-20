import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage, injectIntl } from 'react-intl';

import Page from '../../templates/page';
import { H1 } from '../../atoms/headline';
import P from '../../atoms/paragraph';
// import Illustration from '../../atoms/illustration';
import Link from '../../atoms/link';
import Section from '../../molecules/section';

import './Upsell.scss';

class Upsell extends PureComponent {
  static propTypes = {
    intl: PropTypes.object.isRequired,
    username: PropTypes.string,
    email: PropTypes.string
  };

  render() {
    // const { intl } = this.props;
    // const { name, email, message, pending, error, success } = this.state;

    return (
      <Page>
        <Section>
          <H1>
            <FormattedMessage id="Deine booky Support-Mitgliedschaft" />
          </H1>
          <P size="large">
            <FormattedMessage id="Mit der Support-Mitgliedschaft kannst du booky unterstützen und erhälst Zugriff auf exklusive Funktionen. Dabei bestimmst du, wie viel du zahlst und behälst immer die Kontrolle!" />
          </P>
          <Link to="/supporter" className="upsell__link">
            <FormattedMessage id="Zurück zur Mitgliedschaften-Seite" />
          </Link>
        </Section>
      </Page>
    );
  }
}

export default injectIntl(Upsell);
