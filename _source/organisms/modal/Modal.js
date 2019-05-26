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
import EditStructure from './modals/EditStructure';
import Customize from './modals/Customize';
import DeleteAccount from './modals/DeleteAccount';

export default class Modal extends Component {
  constructor(props) {
    super(props);

    this.handleSave = this.handleSave.bind(this);
    this.handleKeyUp = this.handleKeyUp.bind(this);
    this.modalMap = {
      AddBookmark: {
        type: AddBookmark,
        action: props.addBookmark
      },
      EditBookmark: {
        type: EditBookmark,
        action: props.editBookmark
      },
      DeleteBookmark: {
        type: DeleteBookmark,
        action: props.deleteBookmark
      },
      AddCategory: {
        type: AddCategory,
        action: props.addCategory
      },
      EditCategory: {
        type: EditCategory,
        action: props.editCategory
      },
      DeleteCategory: {
        type: DeleteCategory,
        action: props.deleteCategory
      },
      AddDashboard: {
        type: AddDashboard,
        action: props.addDashboard
      },
      EditDashboard: {
        type: EditDashboard,
        action: props.editDashboard
      },
      DeleteDashboard: {
        type: DeleteDashboard,
        action: props.deleteDashboard
      },
      EditStructure: {
        type: EditStructure
      },
      Customize: {
        type: Customize
      },
      DeleteAccount: {
        type: DeleteAccount,
        action: props.deleteAccount
      }
    };
  }

  handleSave(modalData) {
    const { modal, data, closeModal } = this.props;

    modalData.id = parseInt(modalData.id, 10);

    this.modalMap[modal].action && this.modalMap[modal].action({
      ...modalData,
      dashboard: data.activeDashboard
    });
    closeModal();
  }

  handleKeyUp(event) {
    if (event.key === 'Escape') {
      this.props.closeModal();
    }
  }

  render() {
    const { modal, open, data, pending, closeModal, darkMode } = this.props;
    let CustomTag;

    if (open) {
      CustomTag = this.modalMap[modal] && this.modalMap[modal].type;
    } else {
      CustomTag = null;
    }

    return (
      <div
        className={ classNames(
          'modal',
          open && 'modal--open'
        ) }
        onClick={ closeModal }
        onKeyUp={ this.handleKeyUp }
      >
        { CustomTag && (
          <CustomTag
            onClose={ closeModal }
            onSave={ this.handleSave }
            data={ data }
            pending={ pending }
            darkMode={ darkMode }
          />
        ) }
      </div>
    );
  }
}

Modal.propTypes = {
  modal: PropTypes.string,
  open: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
  data: PropTypes.object,
  pending: PropTypes.bool.isRequired,
  addBookmark: PropTypes.func.isRequired,
  editBookmark: PropTypes.func.isRequired,
  deleteBookmark: PropTypes.func.isRequired,
  addCategory: PropTypes.func.isRequired,
  editCategory: PropTypes.func.isRequired,
  deleteCategory: PropTypes.func.isRequired,
  addDashboard: PropTypes.func.isRequired,
  editDashboard: PropTypes.func.isRequired,
  deleteDashboard: PropTypes.func.isRequired,
  darkMode: PropTypes.bool.isRequired,
  deleteAccount: PropTypes.func.isRequired
};

Modal.defaultProps = {
  data: {}
};
