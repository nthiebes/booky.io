import React, { PureComponent, Fragment } from 'react';
import { FormattedMessage, injectIntl } from 'react-intl';
import PropTypes from 'prop-types';

import { H3 } from '../../atoms/headline';
import Label from '../../atoms/label';
import ColorPicker from '../../molecules/color-picker';
import Checkbox from '../../atoms/checkbox';
import Radio from '../../atoms/radio';

class Customize extends PureComponent {
  static propTypes = {
    updateSettings: PropTypes.func.isRequired,
    intl: PropTypes.object.isRequired,
    navColor: PropTypes.number.isRequired,
    newtab: PropTypes.bool.isRequired,
    maxWidth: PropTypes.bool.isRequired,
    preserveEditMode: PropTypes.bool.isRequired,
    dashboardsStyle: PropTypes.string.isRequired,
    blurEffect: PropTypes.bool.isRequired,
    stickyHeader: PropTypes.bool.isRequired,
    stickyToolbar: PropTypes.bool.isRequired,
    darkMode: PropTypes.bool.isRequired,
    autofillBookmarkNames: PropTypes.bool
  }

  handleColorChange = (value) => {
    this.props.updateSettings({
      navigationBarColor: parseInt(value.replace(/color/g, ''), 10)
    });
  }

  handleCheckboxChange = ({ name, checked }) => {
    this.props.updateSettings({
      [name]: checked
    });
  }

  handleRadioChange = ({ name, value }) => {
    this.props.updateSettings({
      [name]: value
    });
  }

  render() {
    const {
      intl,
      navColor,
      newtab,
      // maxWidth,
      // preserveEditMode,
      dashboardsStyle,
      blurEffect,
      stickyHeader,
      stickyToolbar,
      darkMode,
      autofillBookmarkNames
    } = this.props;

    return (
      <Fragment>
        <H3>
          <FormattedMessage id="customize.style" />
        </H3>
        <Label first>
          <FormattedMessage id="customize.navColor" />
        </Label>
        <ColorPicker
          value={ (navColor).toString() }
          onChange={ this.handleColorChange }
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
        {/* <Checkbox
          label={ intl.formatMessage({ id: 'customize.maxWidth'}) }
          id="maxWidth"
          name="maxWidth"
          onChange={ this.handleCheckboxChange }
          checked={ maxWidth }
        /> */}
        <H3>
          <FormattedMessage id="dashboard.title" />
        </H3>
        <Radio
          id="dashboards-sidebar"
          name="dashboardsStyle"
          onChange={ this.handleRadioChange }
          value="sidebar"
          checked={ dashboardsStyle === 'sidebar' }
          first
        >
          <FormattedMessage id="customize.sidebar" />
        </Radio>
        {/* <Radio
          id="dashboards-dropdown"
          name="dashboardsStyle"
          onChange={ this.handleRadioChange }
          value="dropdown"
          checked={ dashboardsStyle === 'dropdown' }
        >
          <FormattedMessage id="customize.dropdown" />
        </Radio> */}
        <Radio
          id="dashboards-tabs"
          name="dashboardsStyle"
          onChange={ this.handleRadioChange }
          value="tabs"
          checked={ dashboardsStyle === 'tabs' }
        >
          <FormattedMessage id="customize.tabs" />
        </Radio>
        <H3>
          <FormattedMessage id="dashboard.preferences" />
        </H3>
        <Checkbox
          label={ intl.formatMessage({ id: 'customize.newTab'}) }
          id="openLinksInNewTab"
          name="openLinksInNewTab"
          onChange={ this.handleCheckboxChange }
          checked={ newtab }
          first
        />
        <Checkbox
          label={ intl.formatMessage({ id: 'customize.autofill'}) }
          id="autofillBookmarkNames"
          name="autofillBookmarkNames"
          onChange={ this.handleCheckboxChange }
          checked={ autofillBookmarkNames }
        />
        {/* <Checkbox
          label={ intl.formatMessage({ id: 'customize.preserveEditMode'}) }
          id="preserveEditMode"
          name="preserveEditMode"
          onChange={ this.handleCheckboxChange }
          checked={ preserveEditMode }
        /> */}
      </Fragment>
    );
  }
}

export default injectIntl(Customize);
