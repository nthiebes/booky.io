import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import P from '../../atoms/paragraph';

const Expandable = ({ className, headline, children, darkMode }) => (
  <details className={ classNames('expandable', className) }>
    <summary className={ classNames('expandable__summary', darkMode && 'expandable__summary--dark-mode') }>
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
  headline: PropTypes.node.isRequired,
  darkMode: PropTypes.bool
};
