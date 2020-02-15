import React, { Component, Fragment } from 'react';
import { FormattedMessage } from 'react-intl';

import { H2 } from '../../atoms/headline';

import Testimonial from './Testimonial';

class Testimonials extends Component {
  render() {
    return (
      <Fragment>
        <H2 style="h1" className="testimonials-headline" noMargin>
          <FormattedMessage id="testimonials.headline" />
        </H2>
        <div className="testimonials">
          <Testimonial
            name="Dummy user"
            twitter="twittername"
            url="https://twitter.com/booky_io"
            image="_assets/illustrations/hacker.svg"
            text="My portal to the Web."
          />
          <Testimonial
            // Arun Kumarr B
            name="Anonymous"
            twitter="twittername"
            url="https://twitter.com/booky_io"
            image="_assets/illustrations/customer-service-man.svg"
            text="Love at first sight. Kudos to the people who built booky and have kept it simple."
          />
          <Testimonial
            // Ricardo Sebastián
            name="Anonymous"
            twitter="twittername"
            url="https://twitter.com/booky_io"
            image="_assets/illustrations/customer-service-woman.svg"
            text="A simple, lightweight and powerful application to save my bookmarks in the cloud."
          />
        </div>
      </Fragment>
    );
  }
}

export default Testimonials;
