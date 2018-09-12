import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import fetcher from '../../_utils/fetch';
import Icon from '../../atoms/icon';
import Select from '../../atoms/select';

class LanguageSwitcher extends Component {
  constructor(props) {
    super(props);

    this.onChange = this.onChange.bind(this);
  }

  onChange(locale) {
    const { updateIntl } = this.props;

    fetcher({
      url: `/_assets/i18n/${locale}.json`,
      onSuccess: (messages) => {
        updateIntl({
          locale,
          messages
        });
      },
      onError: (error) => { console.log('error:', error); }
    });
  }

  render() {
    const { className, locale } = this.props;

    return (
      <div className={ classNames('language-switcher', className && className) }>
        <Icon icon="language" color="light" className="language-switcher__icon" />
        <Select
          compact
          selected={ locale }
          onChange={ this.onChange }
          options={ [{
            text: 'English',
            value: 'en'
          }, {
            text: 'Deutsch',
            value: 'de'
          }] }
        />
      </div>
    );
  }
}

LanguageSwitcher.propTypes = {
  className: PropTypes.string,
  updateIntl: PropTypes.func.isRequired,
  locale: PropTypes.string.isRequired
};

export default LanguageSwitcher;
