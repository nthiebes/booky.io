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
      <blockquote className={ classNames('testimonial', className && className) }>
        <img src={ image } width="50" height="50" className="testimonial__image" />
        <div className="testimonial__wrapper">
          <Link href={ url } className="testimonial__link">
            <div className="testimonial__name">{ name }</div>
            { twitter && <div>{ `@${twitter}` }</div> }
          </Link>
          <P className="testimonial__text">{ text }</P>
        </div>
        <Icon icon="quote" color="medium" className="testimonial__icon" />
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
