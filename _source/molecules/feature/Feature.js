import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export default class Feature extends Component {
  render() {
    const { className } = this.props;

    return (
      <Fragment>
        banana
      </Fragment>
    );
  }
}

Feature.propTypes = {
  className: PropTypes.string
};
