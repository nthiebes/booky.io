import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const localeMap = {
  en: {
    value: '3PE7W9AAYEP4Q',
    alt: 'Donate with PayPal button',
    copy: 'Donate',
    imageSrc: 'https://www.paypalobjects.com/en_US/i/btn/btn_donate_LG.gif',
    pixelSrc: 'https://www.paypal.com/en_US/i/scr/pixel.gif'
  },
  de: {
    value: 'P9RTXBMK5Q3Q2',
    alt: 'Mit PayPal Button spenden',
    copy: 'Spenden',
    imageSrc: 'https://www.paypalobjects.com/de_DE/DE/i/btn/btn_donate_LG.gif',
    pixelSrc: 'https://www.paypal.com/de_DE/i/scr/pixel.gif'
  }
};

export default class Empty extends PureComponent {
  static propTypes = {
    locale: PropTypes.string.isRequired,
    className: PropTypes.string,
    color: PropTypes.string.isRequired
  }

  render() {
    const { locale, className, color } = this.props;
    const localeData = localeMap[locale];

    return (
      <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top" className={ classNames('donate', className) }>
        <input type="hidden" name="cmd" value="_s-xclick" />
        <input type="hidden" name="hosted_button_id" value={ localeData.value } />
        <img alt="" border="0" src={ localeData.pixelSrc } width="1" height="1" />
        <input type="submit" name="submit" className="donate__submit" />
        <span className={ classNames('donate__content', `donate__content--${color}`) }>
          <img alt="" src={ `/_assets/logos/paypal_${color}.svg` } height="18" loading="lazy" className="donate__logo" />
          { localeData.copy }
        </span>
      </form>
    );
  }
}
