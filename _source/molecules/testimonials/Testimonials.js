import React, { Component } from 'react';
import 'whatwg-fetch';

import Testimonial from './Testimonial';

class Testimonials extends Component {
  render() {
    return (
      <div className="testimonials">
        <Testimonial
          name="Siddharth"
          twitter="_gscheid"
          url="https://twitter.com/_gscheid"
          image="_assets/_gscheid.jpg"
          text="My portal to the Web."
        />
        <Testimonial
          name="Clausailgoa"
          twitter="twittername"
          url="https://twitter.com/_gscheid"
          image="_assets/_gscheid.jpg"
          text="Thank you for this incredible project."
        />
        <Testimonial
          name="Aniket Mohite"
          twitter="_gscheid"
          url="https://twitter.com/_gscheid"
          image="_assets/_gscheid.jpg"
          text="This is so amazing, just what I needed."
        />
      </div>
    );
  }
}

export default Testimonials;
