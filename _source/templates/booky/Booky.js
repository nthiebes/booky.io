import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Booky.scss';

export default class Booky extends Component {
  render() {
    return (
      <div>
        { this.props.children }
      </div>
    );
  }
}

Booky.propTypes = {
  children: PropTypes.element.isRequired
};
