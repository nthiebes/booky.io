import React, { Component, Fragment } from 'react';
import { FormattedMessage, injectIntl } from 'react-intl';
import PropTypes from 'prop-types';

import { H1, H2 } from '../../atoms/headline';
import Label from '../../atoms/label';
import ColorPicker from '../../molecules/color-picker';
import Checkbox from '../../atoms/checkbox';
import Radio from '../../atoms/radio';

class Customize extends Component {
  constructor(props) {
    super(props);

    this.handleColorChange = this.handleColorChange.bind(this);
    this.handleCheckboxChange = this.handleCheckboxChange.bind(this);
    this.handleRadioChange = this.handleRadioChange.bind(this);
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

  handleRadioChange({ name, value }) {
    this.props.updateUser({
      [name]: value
    });
  }

  render() {
    const {
      intl,
      navColor,
      newtab,
      maxWidth,
      preserveEditMode,
      dashboards,
      blurEffect,
      stickyHeader,
      stickyToolbar,
      darkMode
    } = this.props;

    return (
      <Fragment>
        <H1>
          <FormattedMessage id="customize.title" />
        </H1>
        <H2>
          <FormattedMessage id="customize.style" />
        </H2>
        <Label>
          <FormattedMessage id="customize.navColor" />
        </Label>
        <ColorPicker
          value={ navColor }
          onChange={ this.handleColorChange }
          className="customize__color-picker"
        />
        <Checkbox
          label={ intl.formatMessage({ id: 'customize.darkMode'}) }
          id="darkMode"
          name="darkMode"
          onChange={ this.handleCheckboxChange }
          checked={ darkMode }
        />
        <Checkbox
          label={ intl.formatMessage({ id: 'customize.blurEffect'}) }
          id="blurEffect"
          name="blurEffect"
          onChange={ this.handleCheckboxChange }
          checked={ blurEffect }
        />
        <Checkbox
          label={ intl.formatMessage({ id: 'customize.stickyHeader'}) }
          id="stickyHeader"
          name="stickyHeader"
          onChange={ this.handleCheckboxChange }
          checked={ stickyHeader }
        />
        <Checkbox
          label={ intl.formatMessage({ id: 'customize.stickyToolbar'}) }
          id="stickyToolbar"
          name="stickyToolbar"
          onChange={ this.handleCheckboxChange }
          checked={ stickyToolbar }
        />
        <H2>
          <FormattedMessage id="dashboard.title" />
        </H2>
        <Radio
          label={ intl.formatMessage({ id: 'customize.sidebar'}) }
          id="dashboards-sidebar"
          name="dashboards"
          onChange={ this.handleRadioChange }
          value="sidebar"
          defaultChecked={ dashboards === 'sidebar' }
        />
        <Radio
          label={ intl.formatMessage({ id: 'customize.dropdown'}) }
          id="dashboards-dropdown"
          name="dashboards"
          onChange={ this.handleRadioChange }
          value="dropdown"
          defaultChecked={ dashboards === 'dropdown' }
        />
        <Radio
          label={ intl.formatMessage({ id: 'customize.tabs'}) }
          id="dashboards-tabs"
          name="dashboards"
          onChange={ this.handleRadioChange }
          value="tabs"
          defaultChecked={ dashboards === 'tabs' }
        />
        <Checkbox
          label={ intl.formatMessage({ id: 'customize.maxWidth'}) }
          id="maxWidth"
          name="maxWidth"
          onChange={ this.handleCheckboxChange }
          checked={ maxWidth }
        />
        <H2>
          <FormattedMessage id="dashboard.preferences" />
        </H2>
        <Checkbox
          label={ intl.formatMessage({ id: 'customize.newTab'}) }
          id="newtab"
          name="newtab"
          onChange={ this.handleCheckboxChange }
          checked={ newtab }
        />
        <Checkbox
          label={ intl.formatMessage({ id: 'customize.preserveEditMode'}) }
          id="preserveEditMode"
          name="preserveEditMode"
          onChange={ this.handleCheckboxChange }
          checked={ preserveEditMode }
        />
      </Fragment>
    );
  }
}

Customize.propTypes = {
  updateUser: PropTypes.func.isRequired,
  intl: PropTypes.object.isRequired,
  navColor: PropTypes.string.isRequired,
  newtab: PropTypes.bool.isRequired,
  maxWidth: PropTypes.bool.isRequired,
  preserveEditMode: PropTypes.bool.isRequired,
  dashboards: PropTypes.string.isRequired,
  blurEffect: PropTypes.bool.isRequired,
  stickyHeader: PropTypes.bool.isRequired,
  stickyToolbar: PropTypes.bool.isRequired,
  darkMode: PropTypes.bool.isRequired
};

export default injectIntl(Customize);
