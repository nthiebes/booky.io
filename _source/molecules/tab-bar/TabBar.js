import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class TabBar extends Component {
  render() {
    return (
      <div className="tab-bar">
        { this.props.children }
      </div>
    );
  }
}

TabBar.propTypes = {
  children: PropTypes.array.isRequired
};
