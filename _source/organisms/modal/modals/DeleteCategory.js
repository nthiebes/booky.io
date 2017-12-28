import React, { Component } from 'react';
import Base from '../Base';
import Input from '../../../atoms/input';

export default class DeleteCategory extends Component {
  render() {
    return (
      <Base { ...this.props } headline="Delete category">
        <label className="modal__label" htmlFor="url">{ 'This category will be deleted:' }</label>
        <Input id="url" color="primary" required />
        <label className="modal__label" htmlFor="bla">{ 'What do you want to do with the bookmarks?' }</label>
        <Input id="bla" color="primary" required />
      </Base>
    );
  }
}
