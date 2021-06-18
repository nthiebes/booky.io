import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { H2 } from '../../atoms/headline';
import P from '../../atoms/paragraph';
import Illustration from '../../atoms/illustration';

export class FeatureCard extends PureComponent {
  static propTypes = {
    className: PropTypes.string,
    headline: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    illustration: PropTypes.string.isRequired,
    direction: PropTypes.string
  };

  static defaultProps = {
    direction: 'right'
  };

  render() {
    const { className, headline, text, illustration, direction } = this.props;

    return (
      <div className={classNames('feature-card__wrapper', className)}>
        <header
          className={classNames(
            direction === 'right' && 'feature-card__header--right',
            'feature-card__header'
          )}
        >
          <H2 noMargin>{headline}</H2>
          <P noPadding>{text}</P>
        </header>
        <Illustration
          name={illustration}
          className="feature-card__illustration"
        />
      </div>
    );
  }
}
