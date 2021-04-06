/* eslint-disable max-lines */
import React, { PureComponent, Fragment } from 'react';
import { FormattedMessage, injectIntl } from 'react-intl';
import PropTypes from 'prop-types';

import { postMessage } from '../../_utils/extension';
import { H3 } from '../../atoms/headline';
import Label from '../../atoms/label';
import ColorPicker from '../../molecules/color-picker';
import Checkbox from '../../atoms/checkbox';
import Radio from '../../atoms/radio';
import Input from '../../atoms/input';
import { ErrorMessage } from '../../atoms/messages';

class Customize extends PureComponent {
  static propTypes = {
    updateSettings: PropTypes.func.isRequired,
    intl: PropTypes.object.isRequired,
    navColor: PropTypes.number.isRequired,
    newtab: PropTypes.bool.isRequired,
    maxWidth: PropTypes.bool.isRequired,
    closeEditMode: PropTypes.bool.isRequired,
    dashboardsStyle: PropTypes.string.isRequired,
    blurEffect: PropTypes.bool.isRequired,
    stickyHeader: PropTypes.bool.isRequired,
    stickyToolbar: PropTypes.bool.isRequired,
    darkMode: PropTypes.bool.isRequired,
    autofillBookmarkNames: PropTypes.bool,
    categoriesLayout: PropTypes.string.isRequired,
    bookmarkEditOnHover: PropTypes.bool.isRequired,
    minimalBookmarkButton: PropTypes.bool.isRequired,
    enableNotes: PropTypes.bool.isRequired,
    isExtension: PropTypes.bool.isRequired,
    maxColumnCount: PropTypes.number
  };

  state = {
    error: null,
    maxColumns: this.props.maxColumnCount > 0
  };

  handleMaxColumnCheckbox = () => {
    this.props.updateSettings(
      {
        maxColumnCount: this.state.maxColumns ? null : 2
      },
      {
        onError: this.errorCallback
      }
    );

    this.setState({
      maxColumns: !this.state.maxColumns
    });
  };

  handleNumberInputChange = (value, name) => {
    this.props.updateSettings(
      {
        [name]: Number(value)
      },
      {
        onError: this.errorCallback
      }
    );
  };

  handleColorChange = (value) => {
    this.props.updateSettings(
      {
        navigationBarColor: parseInt(value.replace(/color/g, ''), 10)
      },
      {
        onError: this.errorCallback
      }
    );
  };

  handleCheckboxChange = ({ name, checked }) => {
    this.props.updateSettings(
      {
        [name]: checked
      },
      {
        onError: this.errorCallback
      }
    );
  };

  handleRadioChange = ({ name, value }) => {
    const { updateSettings, isExtension } = this.props;
    let updatedValue = value;

    if (name === 'darkMode' && isExtension) {
      postMessage({
        darkMode: value === 'true'
      });
    }

    if (value === 'true') {
      updatedValue = true;
    } else if (value === 'false') {
      updatedValue = false;
    }

    updateSettings(
      {
        [name]: updatedValue
      },
      {
        onError: this.errorCallback
      }
    );
  };

  errorCallback = (error) => {
    this.setState({
      error
    });
  };

  render() {
    const {
      intl,
      navColor,
      newtab,
      closeEditMode,
      dashboardsStyle,
      blurEffect,
      stickyHeader,
      stickyToolbar,
      darkMode,
      autofillBookmarkNames,
      categoriesLayout,
      bookmarkEditOnHover,
      minimalBookmarkButton,
      isExtension,
      enableNotes,
      maxColumnCount
    } = this.props;
    const { error, maxColumns } = this.state;

    return (
      <Fragment>
        <H3>
          <FormattedMessage id="customize.style" />
        </H3>
        <Label first>
          <FormattedMessage id="customize.navColor" />
        </Label>
        <ColorPicker
          value={navColor.toString()}
          onChange={this.handleColorChange}
        />
        <Radio
          id="lightMode"
          name="darkMode"
          onChange={this.handleRadioChange}
          value="false"
          checked={!darkMode}
          illustration="light-mode"
          className="customize__image--first"
        >
          <FormattedMessage id="customize.lightMode" />
        </Radio>
        <Radio
          id="darkMode"
          name="darkMode"
          onChange={this.handleRadioChange}
          value="true"
          checked={darkMode}
          illustration="dark-mode"
          className="customize__image--second"
        >
          <FormattedMessage id="customize.darkMode" />
        </Radio>
        {!isExtension && (
          <>
            <Checkbox
              label={intl.formatMessage({ id: 'customize.stickyHeader' })}
              id="stickyHeader"
              name="stickyHeader"
              onChange={this.handleCheckboxChange}
              checked={stickyHeader}
            />
            <Checkbox
              label={intl.formatMessage({ id: 'customize.stickyToolbar' })}
              id="stickyToolbar"
              name="stickyToolbar"
              onChange={this.handleCheckboxChange}
              checked={stickyToolbar}
            />
            <Checkbox
              label={intl.formatMessage({ id: 'customize.blurEffect' })}
              id="blurEffect"
              name="blurEffect"
              onChange={this.handleCheckboxChange}
              checked={blurEffect}
            />
            <H3>
              <FormattedMessage id="dashboard.title" />
            </H3>
            <Radio
              id="dashboards-sidebar"
              name="dashboardsStyle"
              onChange={this.handleRadioChange}
              value="sidebar"
              checked={dashboardsStyle === 'sidebar'}
              first
            >
              <FormattedMessage id="customize.sidebar" />
            </Radio>
            <Radio
              id="dashboards-tabs"
              name="dashboardsStyle"
              onChange={this.handleRadioChange}
              value="tabs"
              checked={dashboardsStyle === 'tabs'}
            >
              <FormattedMessage id="customize.tabs" />
            </Radio>
            <H3>
              <FormattedMessage id="customize.layout" />
            </H3>
            <Radio
              id="categories-grid"
              name="categoriesLayout"
              onChange={this.handleRadioChange}
              value="grid"
              checked={categoriesLayout === 'grid'}
              illustration="grid"
              className="customize__image--first"
              first
            >
              <FormattedMessage id="customize.grid" />
            </Radio>
            <Radio
              id="categories-column"
              name="categoriesLayout"
              onChange={this.handleRadioChange}
              value="column"
              checked={categoriesLayout === 'column'}
              illustration="columns"
              className="customize__image--second"
              first
            >
              <FormattedMessage id="customize.column" />
            </Radio>
            <Checkbox
              label={intl.formatMessage({ id: 'customize.maxColumnCount' })}
              id="maxColumn"
              onChange={this.handleMaxColumnCheckbox}
              checked={maxColumns}
            />
            <Input
              type="number"
              min="2"
              max="4"
              id="maxColumnCount"
              name="maxColumnCount"
              disabled={!maxColumns}
              value={maxColumnCount ? maxColumnCount.toString() : '2'}
              onChange={this.handleNumberInputChange}
              className="customize__max-columns"
            />
          </>
        )}
        <H3>
          <FormattedMessage id="dashboard.preferences" />
        </H3>
        {!isExtension && (
          <>
            <Checkbox
              label={intl.formatMessage({ id: 'customize.newTab' })}
              id="openLinksInNewTab"
              name="openLinksInNewTab"
              onChange={this.handleCheckboxChange}
              checked={newtab}
              first
            />
            <Checkbox
              label={intl.formatMessage({ id: 'customize.autofill' })}
              id="autofillBookmarkNames"
              name="autofillBookmarkNames"
              onChange={this.handleCheckboxChange}
              checked={autofillBookmarkNames}
            />
            <Checkbox
              label={intl.formatMessage({ id: 'customize.closeEditMode' })}
              id="closeEditMode"
              name="closeEditMode"
              onChange={this.handleCheckboxChange}
              checked={closeEditMode}
            />
            <Checkbox
              label={intl.formatMessage({
                id: 'customize.bookmarkEditOnHover'
              })}
              id="bookmarkEditOnHover"
              name="bookmarkEditOnHover"
              onChange={this.handleCheckboxChange}
              checked={bookmarkEditOnHover}
            />
            <Checkbox
              label={intl.formatMessage({
                id: 'customize.minimalBookmarkButton'
              })}
              id="minimalBookmarkButton"
              name="minimalBookmarkButton"
              onChange={this.handleCheckboxChange}
              checked={minimalBookmarkButton}
            />
          </>
        )}
        <Checkbox
          label={intl.formatMessage({ id: 'customize.enableNotes' })}
          id="enableNotes"
          name="enableNotes"
          onChange={this.handleCheckboxChange}
          checked={enableNotes}
        />
        {error && (
          <ErrorMessage message={error} hasIcon className="customize__error" />
        )}
      </Fragment>
    );
  }
}

export default injectIntl(Customize);
