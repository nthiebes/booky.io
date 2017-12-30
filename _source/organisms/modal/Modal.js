import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import AddBookmark from './modals/AddBookmark';
import EditBookmark from './modals/EditBookmark';
import DeleteBookmark from './modals/DeleteBookmark';
import AddCategory from './modals/AddCategory';
import EditCategory from './modals/EditCategory';
import DeleteCategory from './modals/DeleteCategory';
import AddDashboard from './modals/AddDashboard';
import EditDashboard from './modals/EditDashboard';
import DeleteDashboard from './modals/DeleteDashboard';

export default class Modal extends Component {
  constructor(props) {
    super(props);

    this.saveModal = this.saveModal.bind(this);
    this.modalMap = {
      AddBookmark: {
        modal: AddBookmark,
        action: props.addBookmark
      },
      EditBookmark: {
        modal: EditBookmark,
        action: props.editBookmark
      },
      DeleteBookmark: {
        modal: DeleteBookmark,
        action: props.deleteBookmark
      },
      AddCategory: {
        modal: AddCategory,
        action: props.addCategory
      },
      EditCategory: {
        modal: EditCategory,
        action: props.editCategory
      },
      DeleteCategory: {
        modal: DeleteCategory,
        action: props.deleteCategory
      },
      AddDashboard: {
        modal: AddDashboard,
        action: props.addDashboard
      },
      EditDashboard: {
        modal: EditDashboard,
        action: props.editDashboard
      },
      DeleteDashboard: {
        modal: DeleteDashboard,
        action: props.deleteDashboard
      }
    };
  }

  saveModal(modalData) {
    const { modal, data } = this.props;

    this.modalMap[modal].action({
      ...modalData,
      dashboard: data.activeDashboard
    });
  }

  render() {
    const { modal, open, closeModal, data } = this.props;
    const CustomTag = this.modalMap[modal].modal;
    // const body = document.getElementsByTagName('body')[0];
    // const html = document.getElementsByTagName('html')[0];

    // if (open) {  
    //   body.classList.add('booky--no-scrolling');
    //   html.classList.add('booky--no-scrolling');
    // } else {
    //   body.classList.remove('booky--no-scrolling');
    //   html.classList.remove('booky--no-scrolling');
    // }

    return (
      <div className={ classNames(['modal', open && 'modal--open']) } onClick={ closeModal }>
        <CustomTag onClose={ closeModal } onSave={ this.saveModal } data={ data } />
      </div>
    );
  }
}

Modal.propTypes = {
  modal: PropTypes.string.isRequired,
  open: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
  data: PropTypes.object,
  addBookmark: PropTypes.func.isRequired,
  editBookmark: PropTypes.func.isRequired,
  deleteBookmark: PropTypes.func.isRequired,
  addCategory: PropTypes.func.isRequired,
  editCategory: PropTypes.func.isRequired,
  deleteCategory: PropTypes.func.isRequired,
  addDashboard: PropTypes.func.isRequired,
  editDashboard: PropTypes.func.isRequired,
  deleteDashboard: PropTypes.func.isRequired
};

Modal.defaultProps = {
  data: {}
};
