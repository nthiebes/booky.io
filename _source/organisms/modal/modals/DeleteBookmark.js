import React, { Component } from 'react';
import Base from '../Base';
import Input from '../../../atoms/input';

export default class DeleteBookmark extends Component {
  render() {
    return (
      <Base { ...this.props } headline="Delete bookmark">
        <label className="modal__label" htmlFor="url">{ 'Delete bookmark:' }</label>
        <Input id="url" color="primary" required />
      </Base>
    );
  }
}
