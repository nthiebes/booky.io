import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Illustration from '../../atoms/illustration';

class Empty extends Component {
  render() {
    const { children, illustration, alt, className, darkMode } = this.props;

    return (
      <figure className={ classNames('empty', className && className) }>
        <Illustration
          name={ illustration }
          alt={ alt }
          height="150"
          width="150"
          className={ classNames('empty__image', darkMode && 'empty__image--dark-mode') }
        />
        <figcaption className={ classNames(darkMode && 'empty--dark-mode') }>
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
  illustration: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  className: PropTypes.string,
  darkMode: PropTypes.bool
};

export default Empty;
