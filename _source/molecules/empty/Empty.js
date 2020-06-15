import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Illustration from '../../atoms/illustration';

class Empty extends Component {
  render() {
    const { children, illustration, alt, className, darkMode, ariaHidden } = this.props;

    return (
      <figure className={ classNames('empty', className && className) }>
        <Illustration
          name={ illustration }
          alt={ alt }
          className={ classNames('empty__image', darkMode && 'empty__image--dark-mode') }
          ariaHidden={ ariaHidden }
        />
        <figcaption className={ classNames('empty__text', darkMode && 'empty--dark-mode') }>
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
  alt: PropTypes.string,
  className: PropTypes.string,
  darkMode: PropTypes.bool,
  ariaHidden: PropTypes.bool
};

export default Empty;
