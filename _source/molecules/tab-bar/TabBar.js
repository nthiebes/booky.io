import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Tab from './Tab';

export default class TabBar extends Component {
  render() {
    const { tabs } = this.props;

    return (
      <div className="tab-bar">
        { tabs.items.map((tab, index) => (
          <Tab key={ index } name={ tab.name } active={ index === tabs.active } />
        )) }
      </div>
    );
  }
}

TabBar.propTypes = {
  tabs: PropTypes.object.isRequired
};
