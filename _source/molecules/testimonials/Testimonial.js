import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import 'whatwg-fetch';

import Link from '../../atoms/link';
import P from '../../atoms/paragraph';
import Icon from '../../atoms/icon';

class Testimonial extends Component {
  render() {
    const { className, url, name, twitter, image, text } = this.props;

    return (
      <blockquote className={ classNames('testimonials__testimonial', className && className) }>
        <img src={ image } width="50" height="50" className="testimonials__image" />
        <div className="testimonials__content">
          <Link href={ url } className="testimonials__link">
            <div className="testimonials__name">{ name }</div>
            { twitter && <div>{ `@${twitter}` }</div> }
          </Link>
          <P className="testimonials__text">{ text }</P>
        </div>
        <Icon icon="quote" color="medium" className="testimonials__icon" />
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
