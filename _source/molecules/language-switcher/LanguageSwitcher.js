import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { setLanguage } from '../../_utils/language';
import Radio from '../../atoms/radio';
import Icon from '../../atoms/icon';

export default class LanguageSwitcher extends Component {
  static propTypes = {
    updateIntl: PropTypes.func.isRequired,
    language: PropTypes.string.isRequired,
    ignoreDarkMode: PropTypes.bool
  };

  handleChange = ({ value: language }) => {
    const { updateIntl } = this.props;

    fetch(`/_assets/i18n/${language}.json?=${process.env.VERSION}`)
      .then((response) => response.json())
      .then((messages) => {
        setLanguage(language);
        updateIntl({
          locale: language,
          messages
        });
        document.title = messages['misc.pageTitle'];
        document
          .querySelector('meta[name=description]')
          .setAttribute('content', messages['footer.twitterText']);
        document
          .querySelector('meta[property="og:description"]')
          .setAttribute('content', messages['footer.twitterText']);
      })
      .catch(() => {
        // console.log('error', error);
      });
  };

  render() {
    const { language, ignoreDarkMode } = this.props;

    return (
      <Fragment>
        <Radio
          className={classNames(
            'language-switcher__item',
            ignoreDarkMode && 'language-switcher__item--light'
          )}
          id="language-switcher-en"
          name="language"
          value="en"
          onChange={this.handleChange}
          checked={language === 'en'}
        >
          <Icon icon="usa" />
          {'English'}
        </Radio>
        <Radio
          className={classNames(
            'language-switcher__item',
            ignoreDarkMode && 'language-switcher__item--light'
          )}
          id="language-switcher-de"
          name="language"
          value="de"
          onChange={this.handleChange}
          checked={language === 'de'}
        >
          <Icon icon="germany" />
          {'Deutsch'}
        </Radio>
      </Fragment>
    );
  }
}
