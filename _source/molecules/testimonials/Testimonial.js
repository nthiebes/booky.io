import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Link from '../../atoms/link';
import P from '../../atoms/paragraph';
import { H4 } from '../../atoms/headline';
import Icon from '../../atoms/icon';

class Testimonial extends Component {
  render() {
    const { className, url, name, twitter, image, text } = this.props;

    return (
      <blockquote className={ classNames('testimonials__testimonial', className && className) }>
        <img src={ image } width="50" height="50" className="testimonials__image" alt="" aria-hidden="true" />
        <div>
          <H4 className="testimonials__header">
            { name }
            { url && (
              <Link href={ url } target="_blank" className="testimonials__link">
                { twitter && `@${twitter}` }
              </Link>
            ) }
          </H4>
          <P className="testimonials__text">{ text }</P>
        </div>
        <Icon icon="quote" size="medium" color="medium" className="testimonials__icon" />
      </blockquote>
    );
  }
}

Testimonial.propTypes = {
  text: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  className: PropTypes.string,
  twitter: PropTypes.string,
  url: PropTypes.string
};

export default Testimonial;
