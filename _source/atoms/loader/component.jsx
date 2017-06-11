import React, { Component } from 'react';
import Icon from '../icon';

/**
 * React component
 * 
 * @class Loader
 * @classdesc atoms/loader/Loader
 */
export default class Loader extends Component {
  render() {
    return (
      <div className="a-loader">
        <div className="a-loader__circle" />
        <Icon icon="heart" className={ 'a-loader__icon a-icon--primary' } />
      </div>
    );
  }
}
