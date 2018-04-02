import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Base from '../Base';
import Label from '../../../atoms/label';

export default class DeleteBookmark extends Component {
  render() {
    const { data, onClose, onSave } = this.props;

    return (
      <Base onClose={ onClose } onSave={ () => { onSave({
        id: data.id,
        categoryId: data.categoryId
      }); } } headline="Delete bookmark">
        <Label>
          <div>{ 'This bookmark will be deleted:' }</div>
          <b>{ data.name }</b>
        </Label>
      </Base>
    );
  }
}

DeleteBookmark.propTypes = {
  onClose: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired,
  data: PropTypes.object.isRequired
};
