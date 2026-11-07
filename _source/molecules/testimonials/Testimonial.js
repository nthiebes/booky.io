import React, { Component } from 'react';
import classNames from 'classnames';

import Link from '../../atoms/link';
import P from '../../atoms/paragraph';
import { H3 } from '../../atoms/headline';
import Icon from '../../atoms/icon';

class Testimonial extends Component {
  render() {
    const { className, url, name, social, image, text } = this.props;

    return (
      <blockquote
        className={classNames('testimonials__testimonial', className)}
      >
        <img
          src={image}
          width="50"
          height="50"
          className="testimonials__image"
          alt=""
          aria-hidden="true"
          loading="lazy"
        />
        <div>
          <H3 style="h4" className="testimonials__header">
            {name}
            {url && (
              <Link href={url} target="_blank" className="testimonials__link">
                {social && `@${social}`}
              </Link>
            )}
          </H3>
          <P className="testimonials__text">{text}</P>
        </div>
        <Icon
          icon="quote"
          size="medium"
          color="medium"
          className="testimonials__icon"
        />
      </blockquote>
    );
  }
}

export default Testimonial;
