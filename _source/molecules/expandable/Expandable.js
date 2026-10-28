import React from 'react';
import classNames from 'classnames';

const Expandable = ({
  className,
  headline,
  children,
  darkMode,
  notBold,
  open,
  onClick
}) => (
  <details className={classNames('expandable', className)} open={open}>
    <summary
      className={classNames(
        'expandable__summary',
        darkMode && 'expandable__summary--dark-mode',
        notBold && 'expandable__summary--normal'
      )}
      onClick={onClick}
    >
      {headline}
    </summary>
    {children}
  </details>
);

export default Expandable;

Expandable.defaultProps = {
  open: false,
  notBold: false
};
