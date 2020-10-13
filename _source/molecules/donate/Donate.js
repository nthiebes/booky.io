import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

const localeMap = {
  en: {
    value: '3PE7W9AAYEP4Q',
    alt: 'Donate with PayPal button',
    imageSrc: 'https://www.paypalobjects.com/en_US/i/btn/btn_donate_LG.gif',
    pixelSrc: 'https://www.paypal.com/en_DE/i/scr/pixel.gif'
  },
  de: {
    value: 'P9RTXBMK5Q3Q2',
    alt: 'Mit PayPal Button spenden',
    imageSrc: 'https://www.paypalobjects.com/de_DE/DE/i/btn/btn_donate_LG.gif',
    pixelSrc: 'https://www.paypal.com/de_DE/i/scr/pixel.gif'
  }
};

export default class Empty extends PureComponent {
  static propTypes = {
    locale: PropTypes.string.isRequired,
    className: PropTypes.string
  }

  render() {
    const { locale, className } = this.props;
    const localeData = localeMap[locale];

    return (
      <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top" className={ className }>
        <input type="hidden" name="cmd" value="_s-xclick" />
        <input type="hidden" name="hosted_button_id" value={ localeData.value } />
        <input
          type="image"
          src={ localeData.imageSrc }
          border="0"
          name="submit"
          title="PayPal - The safer, easier way to pay online!" alt={ localeData.alt }
        />
        <img alt="" border="0" src={ localeData.pixelSrc } width="1" height="1" />
      </form>
    );
  }
}
