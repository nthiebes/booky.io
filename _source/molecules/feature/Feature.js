import React, { Component } from 'react';
import classNames from 'classnames';

import { H2 } from '../../atoms/headline';
import P from '../../atoms/paragraph';
import Illustration from '../../atoms/illustration';

export default class Feature extends Component {
  render() {
    const { className, headline, text, illustration, direction } = this.props;

    return (
      <div className={classNames('feature__wrapper', className)}>
        <header
          className={classNames(
            direction === 'right' && 'feature__header--right',
            'feature__header'
          )}
        >
          <H2 style="h1" noMargin>
            {headline}
          </H2>
          <P noPadding>{text}</P>
        </header>
        <Illustration name={illustration} className="feature__illustration" />
      </div>
    );
  }
}

Feature.defaultProps = {
  direction: 'left'
};
