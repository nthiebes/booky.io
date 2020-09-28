import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Expandable = ({ className, headline, children, darkMode, open, onClick }) => (
  <details className={ classNames('expandable', className) } open={ open }>
    <summary
      className={ classNames('expandable__summary', darkMode && 'expandable__summary--dark-mode') }
      onClick={ onClick }
    >
      { headline }
    </summary>
    { children }
  </details>
);

export default Expandable;

Expandable.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  headline: PropTypes.node.isRequired,
  darkMode: PropTypes.bool,
  open: PropTypes.bool,
  onClick: PropTypes.func
};

Expandable.defaultProps = {
  open: false
};
