import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { H2 } from '../../atoms/headline';
import P from '../../atoms/paragraph';
import { Flag } from '../../atoms/flag';
import Illustration from '../../atoms/illustration';
import {
  ButtonLargeBlue,
  ButtonLargePrimary,
  ButtonLargeGreen
} from '../../atoms/button';

export class FeatureCard extends PureComponent {
  static propTypes = {
    className: PropTypes.string,
    headline: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    illustration: PropTypes.string.isRequired,
    background: PropTypes.string,
    payed: PropTypes.bool,
    cta: PropTypes.string,
    ctaTo: PropTypes.string
  };

  render() {
    const {
      className,
      headline,
      text,
      illustration,
      background,
      payed,
      cta,
      ctaTo
    } = this.props;

    return (
      <div
        className={classNames(
          'feature-card__wrapper',
          `feature-card--${background}`,
          className
        )}
      >
        <Illustration
          name={illustration}
          className="feature-card__illustration"
          height="150"
          width="150"
        />
        <H2 noMargin centered>
          {headline}
          {payed && <Flag type="supporter" className="feature-card__flag" />}
        </H2>
        <P noPadding className="feature-card__text">
          {text}
        </P>
        {cta && (
          <ButtonLargeGreen icon="heart" to={ctaTo} contentBefore>
            {cta}
          </ButtonLargeGreen>
        )}
      </div>
    );
  }
}
