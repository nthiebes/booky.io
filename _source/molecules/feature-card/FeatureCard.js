import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { H2 } from '../../atoms/headline';
import P from '../../atoms/paragraph';
import Icon from '../../atoms/icon';
import Illustration from '../../atoms/illustration';

import './FeatureCard.scss';

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
    centered: PropTypes.bool,
    noWrap: PropTypes.bool,
    darkMode: PropTypes.bool
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
          {payed && <Icon icon="heart" color="blue" />}
        </H2>
        <P noPadding className="feature-card__text">
          {text}
        </P>
        {cta}
      </div>
    );
  }
}
