import React, { Component } from 'react';
import Base from '../Base';
import Input from '../../../atoms/input';

export default class EditCategory extends Component {
  render() {
    return (
      <Base { ...this.props } headline="Edit category">
        <label className="modal__label" htmlFor="name">{ 'Name:' }</label>
        <Input id="name" color="primary" required />
        <label className="modal__label" htmlFor="color">{ 'Color:' }</label>
        <Input id="color" color="primary" required />
      </Base>
    );
  }
}
