import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import P from '../../atoms/paragraph';

export default class Expandable extends Component {
  render() {
    const { className, headline, children } = this.props;

    return (
      <details className={ classNames('expandable', className) }>
        <summary className="expandable__summary">
          { headline }
        </summary>
        <P noPadding>
          { children }
        </P>
      </details>
    );
  }
}

Expandable.propTypes = {
  className: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.element,
    PropTypes.string
  ]).isRequired,
  headline: PropTypes.node.isRequired
};
