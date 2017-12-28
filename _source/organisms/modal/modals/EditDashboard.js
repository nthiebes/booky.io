import React, { Component } from 'react';
import Base from '../Base';
import Input from '../../../atoms/input';

export default class EditDashboard extends Component {
  render() {
    return (
      <Base { ...this.props } headline="Edit dashboard">
        <label className="modal__label" htmlFor="name">{ 'Name:' }</label>
        <Input id="name" color="primary" required />
      </Base>
    );
  }
}
