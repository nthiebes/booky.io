import React, { Component } from 'react';
import Modal from '../../../templates/modal';
import Input from '../../../atoms/input';

export default class AddBookmark extends Component {
  render() {
    return (
      <Modal { ...this.props } headline="Add a bookmark">
        <label className="modal__label" htmlFor="url">{ 'URL:' }</label>
        <Input id="url" color="primary" required />
        <label className="modal__label" htmlFor="name">{ 'Name:' }</label>
        <Input id="name" color="primary" required />
      </Modal>
    );
  }
}
