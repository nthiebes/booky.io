import React, { Component } from 'react';
import classNames from 'classnames';

import Illustration from '../../atoms/illustration';

class Empty extends Component {
  render() {
    const { children, illustration, alt, className, darkMode, ariaHidden } =
      this.props;

    return (
      <figure className={classNames('empty', className)}>
        <Illustration
          name={illustration}
          alt={alt}
          className={classNames(
            'empty__image',
            darkMode && 'empty__image--dark-mode'
          )}
          ariaHidden={ariaHidden}
        />
        <figcaption
          className={classNames('empty__text', darkMode && 'empty--dark-mode')}
        >
          <i>{children}</i>
        </figcaption>
      </figure>
    );
  }
}

export default Empty;
