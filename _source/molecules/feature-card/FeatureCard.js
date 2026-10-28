import React, { PureComponent } from 'react';
import classNames from 'classnames';

import { H2 } from '../../atoms/headline';
import P from '../../atoms/paragraph';
import Icon from '../../atoms/icon';
import Illustration from '../../atoms/illustration';

import './FeatureCard.scss';

export class FeatureCard extends PureComponent {
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
      centered,
      noWrap,
      darkMode
    } = this.props;

    return (
      <div
        className={classNames(
          'feature-card',
          `feature-card--${background}`,
          darkMode && 'feature-card--darkMode',
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
        <H2
          noMargin
          centered
          className={classNames(noWrap && 'feature-card__headline--noWrap')}
        >
          {headline}
          {payed && <Icon icon="money" color="blue" />}
        </H2>
        <P noPadding className="feature-card__text">
          {text}
        </P>
        {cta}
      </div>
    );
  }
}
