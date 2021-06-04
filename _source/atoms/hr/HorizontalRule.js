import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export default class HorizontalRule extends PureComponent {
  static propTypes = {
    className: PropTypes.string
  };

  render() {
    const { className } = this.props;

    return <hr className={classNames('hr', className)} />;
  }
}
