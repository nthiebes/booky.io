import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import Radio from '../../atoms/radio';
import Icon from '../../atoms/icon';

class LanguageSwitcher extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ value }) {
    const { updateIntl } = this.props;

    fetch(`/_assets/i18n/${value}.json`)
      .then((response) => response.json())
      .then((messages) => {
        updateIntl({
          locale: value,
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
        <Radio
          className="language-switcher__item"
          id="language-switcher-en"
          name="language"
          value="en"
          onChange={ this.handleChange }
          checked={ locale === 'en' }
        >
          <Icon className="language-switcher__icon" icon="usa" />
          { 'English' }
        </Radio>
        <Radio
          className="language-switcher__item"
          id="language-switcher-de"
          name="language"
          value="de"
          onChange={ this.handleChange }
          checked={ locale === 'de' }
        >
          <Icon className="language-switcher__icon" icon="germany" />
          { 'Deutsch' }
        </Radio>
        {/* <ButtonTextLight
          icon="usa"
          className={ classNames('language-switcher__item', locale === 'en' && 'language-switcher__item--active') }
          value="en"
          onClick={ this.handleClick }
          id="language"
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
        </ButtonTextLight> */}
      </Fragment>
    );
  }
}

LanguageSwitcher.propTypes = {
  updateIntl: PropTypes.func.isRequired,
  locale: PropTypes.string.isRequired
};

export default LanguageSwitcher;
