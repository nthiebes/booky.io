import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import 'whatwg-fetch';

import { ButtonTextLight } from '../../atoms/button';

class LanguageSwitcher extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    const { updateIntl } = this.props;
    const locale = event.currentTarget.value;

    fetch(`/_assets/i18n/${locale}.json`)
      .then((response) => response.json())
      .then((messages) => {
        updateIntl({
          locale,
          messages
        });
      })
      .catch(() => {
        // console.log('error', error);
      });
  }

  render() {
    const { locale } = this.props;

    return (
      <Fragment>
        <ButtonTextLight
          icon="usa"
          className={ classNames('language-switcher__item', locale === 'en' && 'language-switcher__item--active') }
          value="en"
          onClick={ this.handleClick }
        >
          { 'English' }
        </ButtonTextLight>
        <ButtonTextLight
          icon="germany"
          className={ classNames('language-switcher__item', locale === 'de' && 'language-switcher__item--active') }
          value="de"
          onClick={ this.handleClick }
        >
          { 'Deutsch' }
        </ButtonTextLight>
      </Fragment>
    );
  }
}

LanguageSwitcher.propTypes = {
  updateIntl: PropTypes.func.isRequired,
  locale: PropTypes.string.isRequired
};

export default LanguageSwitcher;
