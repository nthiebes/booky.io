import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';

import Extension from '../../templates/extension';
import Section from '../../molecules/section';
import CustomizeComponent from '../../organisms/customize';
import LanguageSwitcher from '../../molecules/language-switcher';
import { H3 } from '../../atoms/headline';

export default class Customize extends Component {
  render() {
    return (
      <Extension>
        <Section noMargin className="customize--extension">
          <CustomizeComponent />
          <H3>
            <FormattedMessage id="customize.language" />
          </H3>
          <LanguageSwitcher />
        </Section>
      </Extension>
    );
  }
}
