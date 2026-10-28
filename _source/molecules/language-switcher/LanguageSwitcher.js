import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { setLanguage } from '../../_utils/language';
import Radio from '../../atoms/radio';

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
          .setAttribute('content', messages['footer.blueskyText']);
        document
          .querySelector('meta[property="og:description"]')
          .setAttribute('content', messages['footer.blueskyText']);
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
          {'Deutsch'}
        </Radio>
        <Radio
          className={classNames(
            'language-switcher__item',
            ignoreDarkMode && 'language-switcher__item--light'
          )}
          id="language-switcher-fr"
          name="language"
          value="fr"
          onChange={this.handleChange}
          checked={language === 'fr'}
        >
          {'Français'}
        </Radio>
        <Radio
          className={classNames(
            'language-switcher__item',
            ignoreDarkMode && 'language-switcher__item--light'
          )}
          id="language-switcher-nl"
          name="language"
          value="nl"
          onChange={this.handleChange}
          checked={language === 'nl'}
        >
          {'Nederlands'}
        </Radio>
        <Radio
          className={classNames(
            'language-switcher__item',
            ignoreDarkMode && 'language-switcher__item--light'
          )}
          id="language-switcher-hi"
          name="language"
          value="hi"
          onChange={this.handleChange}
          checked={language === 'hi'}
        >
          {'हिंदी'}
        </Radio>
        <Radio
          className={classNames(
            'language-switcher__item',
            ignoreDarkMode && 'language-switcher__item--light'
          )}
          id="language-switcher-ja"
          name="language"
          value="ja"
          onChange={this.handleChange}
          checked={language === 'ja'}
        >
          {'日本語'}
        </Radio>
        <Radio
          className={classNames(
            'language-switcher__item',
            ignoreDarkMode && 'language-switcher__item--light'
          )}
          id="language-switcher-ko"
          name="language"
          value="ko"
          onChange={this.handleChange}
          checked={language === 'ko'}
        >
          {'한국어'}
        </Radio>
      </Fragment>
    );
  }
}
