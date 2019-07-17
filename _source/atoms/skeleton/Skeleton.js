import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export default class Skeleton extends Component {
  render() {
    const { className } = this.props;

    return (
      <span className={ classNames('skeleton', className) }>
        { '&zwnj;' }
      </span>
    );
  }
}

Skeleton.propTypes = {
  className: PropTypes.string
};
