import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage, injectIntl } from 'react-intl';

import { H2 } from '../../atoms/headline';

import Testimonial from './Testimonial';

class Testimonials extends Component {
  static propTypes = {
    intl: PropTypes.object.isRequired
  }

  render() {
    const { intl } = this.props;

    return (
      <Fragment>
        <H2 style="h1" className="testimonials-headline" noMargin>
          <FormattedMessage id="testimonials.headline" />
        </H2>
        <div className="testimonials">
          <Testimonial
            name="David Lafond"
            twitter="kronozio"
            url="https://twitter.com/Kronozio"
            image="_assets/illustrations/male.svg"
            text={ intl.formatMessage({ id: 'home.testimonial1' }) }
          />
          <Testimonial
            // Ricardo Sebastián
            name="Anonymous"
            image="_assets/illustrations/female2.svg"
            text={ intl.formatMessage({ id: 'home.testimonial2' }) }
          />
          <Testimonial
            name="Samira Stein"
            twitter="frontend_cat"
            url="https://twitter.com/frontend_cat"
            image="_assets/illustrations/female.svg"
            text={ intl.formatMessage({ id: 'home.testimonial3' }) }
          />
        </div>
      </Fragment>
    );
  }
}

export default injectIntl(Testimonials);
