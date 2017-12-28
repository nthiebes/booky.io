import React, { Component } from 'react';
import Base from '../Base';
import Input from '../../../atoms/input';

export default class EditBookmark extends Component {
  render() {
    return (
      <Base { ...this.props } headline="Edit bookmark">
        <label className="modal__label" htmlFor="url">{ 'URL:' }</label>
        <Input id="url" color="primary" required />
        <label className="modal__label" htmlFor="name">{ 'Name:' }</label>
        <Input id="name" color="primary" required />
      </Base>
    );
  }
}
