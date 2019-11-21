import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import { setLanguage, addLocaleData } from '../../_utils/language';
import Radio from '../../atoms/radio';
import Icon from '../../atoms/icon';

export default class LanguageSwitcher extends Component {
  static propTypes = {
    updateIntl: PropTypes.func.isRequired,
    language: PropTypes.string.isRequired
  }

  handleChange = ({ value: language }) => {
    const { updateIntl } = this.props;

    fetch(`/_assets/i18n/${language}.json?=${process.env.VERSION}`)
      .then((response) => response.json())
      .then((messages) => {
        addLocaleData(language);
        setLanguage(language);
        updateIntl({
          locale: language,
          messages
        });
      })
      .catch(() => {
        // console.log('error', error);
      });
  }

  render() {
    const { language } = this.props;

    return (
      <Fragment>
        <Radio
          className="language-switcher__item"
          id="language-switcher-en"
          name="language"
          value="en"
          onChange={ this.handleChange }
          checked={ language === 'en' }
        >
          <Icon icon="usa" />
          { 'English' }
        </Radio>
        <Radio
          className="language-switcher__item"
          id="language-switcher-de"
          name="language"
          value="de"
          onChange={ this.handleChange }
          checked={ language === 'de' }
        >
          <Icon icon="germany" />
          { 'Deutsch' }
        </Radio>
      </Fragment>
    );
  }
}
