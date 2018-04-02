import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export default class Tab extends Component {
  render() {
    const { name, active, tabId, onClick } = this.props;

    return (
      <div
        className={ classNames('tab-bar__tab', active && 'tab-bar__tab--active') }
        onClick={ () => { onClick(tabId); } }>
        { name }
      </div>
    );
  }
}

Tab.propTypes = {
  name: PropTypes.string.isRequired,
  tabId: PropTypes.number.isRequired,
  active: PropTypes.bool,
  onClick: PropTypes.func.isRequired
};
