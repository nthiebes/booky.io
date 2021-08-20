import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { H2 } from '../../atoms/headline';
import P from '../../atoms/paragraph';
import { Flag } from '../../atoms/flag';
import Illustration from '../../atoms/illustration';
import { ButtonLargeBlue } from '../../atoms/button';

export class FeatureCard extends PureComponent {
  static propTypes = {
    className: PropTypes.string,
    illustrationClassName: PropTypes.string,
    headline: PropTypes.string.isRequired,
    text: PropTypes.node.isRequired,
    illustration: PropTypes.string.isRequired,
    background: PropTypes.string,
    payed: PropTypes.bool,
    cta: PropTypes.node,
    ctaTo: PropTypes.string,
    centered: PropTypes.bool
  };

  render() {
    const {
      className,
      illustrationClassName,
      headline,
      text,
      illustration,
      background,
      payed,
      cta,
      ctaTo,
      centered
    } = this.props;

    return (
      <div
        className={classNames(
          'feature-card',
          `feature-card--${background}`,
          centered && 'feature-card--centered',
          className
        )}
      >
        <Illustration
          name={illustration}
          className={classNames(
            'feature-card__illustration',
            illustrationClassName
          )}
          height="150"
          width="150"
        />
        <H2 noMargin centered>
          {headline}
        </H2>
        <P noPadding className="feature-card__text">
          {text}
        </P>
        {payed && <Flag type="supporter" className="feature-card__flag" />}
        {cta && (
          <ButtonLargeBlue icon="heart" to={ctaTo} contentBefore>
            {cta}
          </ButtonLargeBlue>
        )}
      </div>
    );
  }
}
