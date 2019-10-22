import React, { Component, Fragment } from 'react';
import { FormattedMessage } from 'react-intl';

import { Display2 } from '../../atoms/headline';

import Testimonial from './Testimonial';

class Testimonials extends Component {
  render() {
    return (
      <Fragment>
        <Display2 className="testimonials-headline">
          <FormattedMessage id="testimonials.headline" />
        </Display2>
        <div className="testimonials">
          <Testimonial
            name="Dummy user"
            twitter="twittername"
            url="https://twitter.com/booky_io"
            image="_assets/illustrations/hacker.svg"
            text="My portal to the Web."
          />
          <Testimonial
            name="Dummy user"
            twitter="twittername"
            url="https://twitter.com/booky_io"
            image="_assets/illustrations/customer-service-man.svg"
            text="Thank you for this incredible project."
          />
          <Testimonial
            name="Dummy user"
            twitter="twittername"
            url="https://twitter.com/booky_io"
            image="_assets/illustrations/customer-service-woman.svg"
            text="This is so amazing, just what I needed."
          />
        </div>
      </Fragment>
    );
  }
}

export default Testimonials;
