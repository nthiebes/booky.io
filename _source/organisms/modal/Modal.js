import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import AddBookmark from './modals/AddBookmark';
import EditBookmark from './modals/EditBookmark';
import DeleteBookmark from './modals/DeleteBookmark';
import AddCategory from './modals/AddCategory';
import EditCategory from './modals/EditCategory';
import DeleteCategory from './modals/DeleteCategory';
import EditDashboard from './modals/EditDashboard';

const modalMap = {
  AddBookmark,
  EditBookmark,
  DeleteBookmark,
  AddCategory,
  EditCategory,
  DeleteCategory,
  EditDashboard
};

export default class Modal extends Component {
  constructor(props) {
    super(props);

    this.saveModal = this.saveModal.bind(this);
  }

  saveModal(data) {
    console.log(data);
  }

  render() {
    const { modal, open, closeModal, data } = this.props;
    const body = document.getElementsByTagName('body')[0];
    const html = document.getElementsByTagName('html')[0];
    const CustomTag = modalMap[modal] || AddBookmark;

    if (open) {  
      body.classList.add('booky--no-scrolling');
      html.classList.add('booky--no-scrolling');
    } else {
      body.classList.remove('booky--no-scrolling');
      html.classList.remove('booky--no-scrolling');
    }

    return (
      <div className={ classNames(['modal', open && 'modal--open']) } onClick={ closeModal }>
        <CustomTag onClose={ closeModal } onSave={ this.saveModal } data={ data } />
      </div>
    );
  }
}

Modal.propTypes = {
  modal: PropTypes.string,
  open: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
  data: PropTypes.object
};

Modal.defaultProps = {
  modal: '',
  data: {}
};
