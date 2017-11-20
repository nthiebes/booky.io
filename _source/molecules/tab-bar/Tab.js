import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export default class Tab extends Component {
  render() {
    const { name, active } = this.props;

    return (
      <div className={ classNames('tab-bar__tab', active && 'tab-bar__tab--active') }>
        { name }
      </div>
    );
  }
}

Tab.propTypes = {
  name: PropTypes.string.isRequired,
  active: PropTypes.bool
};
