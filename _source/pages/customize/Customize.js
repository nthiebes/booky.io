import React, { Component } from 'react';
import { FormattedMessage, injectIntl } from 'react-intl';
import PropTypes from 'prop-types';

import Page from '../../templates/page';
import { H1, H2 } from '../../atoms/headline';
import Label from '../../atoms/label';
// import P from '../../atoms/paragraph';
import Section from '../../molecules/section';
import ColorPicker from '../../molecules/color-picker';
import Checkbox from '../../atoms/checkbox';

class Customize extends Component {
  constructor(props) {
    super(props);

    this.handleColorChange = this.handleColorChange.bind(this);
    this.handleCheckboxChange = this.handleCheckboxChange.bind(this);
  }

  handleColorChange(value) {
    this.props.updateUser({
      navColor: value
    });
  }

  handleCheckboxChange({ name, checked }) {
    this.props.updateUser({
      [name]: checked
    });
  }

  render() {
    const { intl, navColor, newtab, maxWidth } = this.props;

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
            <FormattedMessage id="customize.navColor" />
          </Label>
          <ColorPicker value={ navColor } onChange={ this.handleColorChange } />
          <H2>
            { 'Layout' }
          </H2>
          <Checkbox
            label={ intl.formatMessage({ id: 'customize.maxWidth'}) }
            id="maxWidth"
            name="maxWidth"
            onChange={ this.handleCheckboxChange }
            checked={ maxWidth }
          />
          <H2>
            { 'Dashboards' }
          </H2>
          <H2>
            { 'Preferences' }
          </H2>
          <Checkbox
            label={ intl.formatMessage({ id: 'customize.newTab'}) }
            id="newtab"
            name="newtab"
            onChange={ this.handleCheckboxChange }
            checked={ newtab }
          />
        </Section>
      </Page>
    );
  }
}

Customize.propTypes = {
  updateUser: PropTypes.func.isRequired,
  intl: PropTypes.object.isRequired,
  navColor: PropTypes.number.isRequired,
  newtab: PropTypes.bool.isRequired,
  maxWidth: PropTypes.bool.isRequired
};

export default injectIntl(Customize);
