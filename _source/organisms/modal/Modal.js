import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { abortFetch } from '../../_utils/fetcher';

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

    this.state = {
      pending: false,
      error: null,
      showModal: false
    };
    this.handleSave = this.handleSave.bind(this);
    this.handleKeyUp = this.handleKeyUp.bind(this);
    this.closeModal = this.closeModal.bind(this);
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

  componentDidUpdate(prevProps) {
    if (!prevProps.open && this.props.open) {
      // eslint-disable-next-line react/no-did-update-set-state
      this.setState({
        showModal: true
      });
    }
  }

  handleSave(modalData) {
    const { modal, data } = this.props;

    modalData.id = parseInt(modalData.id, 10);
    modalData.categoryId = parseInt(modalData.categoryId, 10);

    if (this.modalMap[modal].action) {
      this.setState({
        pending: true,
        error: null
      });

      this.modalMap[modal].action({
        ...modalData,
        dashboard: data.activeDashboard,
        onSuccess: () => {
          this.closeModal();
        },
        onError: (error) => {
          this.setState({
            pending: false,
            error
          });
        }
      });
    } else {
      this.closeModal();
    }
  }

  closeModal() {
    const { closeModal } = this.props;

    this.setState({
      pending: false,
      error: null
    });
    abortFetch();
    closeModal();

    window.setTimeout(() => {
      this.setState({
        showModal: false
      });
    }, 500);
    // document.body.classList.remove('booky--no-scrolling');
  }

  handleKeyUp(event) {
    if (event.key === 'Escape') {
      this.props.closeModal();
    }
  }

  render() {
    const { modal, open, data, darkMode } = this.props;
    const { pending, showModal, error } = this.state;
    const CustomTag = this.modalMap[modal] && this.modalMap[modal].type;

    return (
      <div
        className={ classNames(
          'modal',
          open && 'modal--open'
        ) }
        onClick={ this.closeModal }
        onKeyUp={ this.handleKeyUp }
        role="presentation"
      >
        <div className={ classNames('modal__inner', darkMode && 'modal__inner--dark') }>
          { CustomTag && showModal && (
            <CustomTag
              onClose={ this.closeModal }
              onSave={ this.handleSave }
              data={ data }
              pending={ pending }
              darkMode={ darkMode }
              error={ error }
            />
          ) }
        </div>
      </div>
    );
  }
}

Modal.propTypes = {
  modal: PropTypes.string,
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
  deleteDashboard: PropTypes.func.isRequired,
  darkMode: PropTypes.bool.isRequired,
  deleteAccount: PropTypes.func.isRequired
};

Modal.defaultProps = {
  data: {}
};
