import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import PropTypes from 'prop-types';

import Page from '../../templates/page';
import { H1, H2 } from '../../atoms/headline';
import Label from '../../atoms/label';
// import P from '../../atoms/paragraph';
import Section from '../../molecules/section';
import ColorPicker from '../../molecules/color-picker';

export default class Customize extends Component {
  render() {
    const { headerColor } = this.props;

    return (
      <Page>
        <Section>
          <H1>
            <FormattedMessage id="customize.title" />
          </H1>
          <H2>
            { 'Styling' }
          </H2>
          <Label>
            { 'Header color' }
          </Label>
          <ColorPicker value={ headerColor } onChange={ this.onColorChange } />
          <H2>
            { 'Layout' }
          </H2>
          <H2>
            { 'Dashboards' }
          </H2>
          <H2>
            { 'Preferences' }
          </H2>
        </Section>
      </Page>
    );
  }
}

Customize.propTypes = {
  headerColor: PropTypes.number.isRequired
};
