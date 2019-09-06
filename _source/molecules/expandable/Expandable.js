import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import P from '../../atoms/paragraph';

const Expandable = ({ className, headline, children }) => (
  <details className={ classNames('expandable', className) }>
    <summary className="expandable__summary">
      { headline }
    </summary>
    <P noPadding>
      { children }
    </P>
  </details>
);

export default Expandable;

Expandable.propTypes = {
  className: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.element,
    PropTypes.string
  ]).isRequired,
  headline: PropTypes.node.isRequired
};
