import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import 'whatwg-fetch';

class Empty extends Component {
  render() {
    const { children, imageUrl, imageAlt, className } = this.props;

    return (
      <figure className={ classNames('empty', className && className) }>
        <img
          src={ imageUrl }
          alt={ imageAlt }
          width="150"
          height="150"
          className="empty__image"
        />
        <figcaption>
          <i>{ children }</i>
        </figcaption>
      </figure>
    );
  }
}

Empty.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.element,
    PropTypes.string
  ]).isRequired,
  imageUrl: PropTypes.string.isRequired,
  imageAlt: PropTypes.string.isRequired,
  className: PropTypes.string
};

export default Empty;
