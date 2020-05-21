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
            name="David Lafond"
            twitter="kronozio"
            url="https://twitter.com/Kronozio"
            image="_assets/illustrations/hacker.svg"
            text="My portal to the web. I tried many bookmark manager, and this is the best one."
          />
          <Testimonial
            // Arun Kumarr B
            name="Samira Stein"
            twitter="frontend_cat"
            url="https://twitter.com/frontend_cat"
            image="_assets/illustrations/customer-service-woman.svg"
            text="Love at first sight. Kudos to the people who built booky and have kept it simple."
          />
          <Testimonial
            // Ricardo Sebastián
            name="Anonymous"
            image="_assets/illustrations/customer-service-man.svg"
            text="A simple, lightweight, yet powerful application to store my bookmarks in the cloud."
          />
        </div>
      </Fragment>
    );
  }
}

export default Testimonials;
