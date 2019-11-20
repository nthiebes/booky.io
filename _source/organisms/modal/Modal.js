import React, { PureComponent } from 'react';
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

export default class Modal extends PureComponent {
  static propTypes = {
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
  }

  state = {
    pending: false,
    error: null,
    showModal: false
  }

  componentDidUpdate(prevProps) {
    if (!prevProps.open && this.props.open) {
      // eslint-disable-next-line react/no-did-update-set-state
      this.setState({
        showModal: true,
        error: null
      });
    }
  }

  modalMap = {
    AddBookmark: {
      type: AddBookmark,
      action: this.props.addBookmark
    },
    EditBookmark: {
      type: EditBookmark,
      action: this.props.editBookmark
    },
    DeleteBookmark: {
      type: DeleteBookmark,
      action: this.props.deleteBookmark
    },
    AddCategory: {
      type: AddCategory,
      action: this.props.addCategory
    },
    EditCategory: {
      type: EditCategory,
      action: this.props.editCategory
    },
    DeleteCategory: {
      type: DeleteCategory,
      action: this.props.deleteCategory
    },
    AddDashboard: {
      type: AddDashboard,
      action: this.props.addDashboard
    },
    EditDashboard: {
      type: EditDashboard,
      action: this.props.editDashboard
    },
    DeleteDashboard: {
      type: DeleteDashboard,
      action: this.props.deleteDashboard
    },
    EditStructure: {
      type: EditStructure
    },
    Customize: {
      type: Customize
    },
    DeleteAccount: {
      type: DeleteAccount,
      action: this.props.deleteAccount
    }
  }

  handleSave = (modalData) => {
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

  closeModal = () => {
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

  handleKeyUp = (event) => {
    if (event.key === 'Escape') {
      this.props.closeModal();
    }
  }

  handleMouseDown = (event) => {
    if (event.target.classList.contains('modal')) {
      this.closeModal();
    }
  }

  render() {
    const { modal, open, data, darkMode } = this.props;
    const { pending, showModal, error } = this.state;
    const CustomTag = this.modalMap[modal] && this.modalMap[modal].type;

    return (
      // eslint-disable-next-line jsx-a11y/no-static-element-interactions
      <div
        className={ classNames(
          'modal',
          open && 'modal--open'
        ) }
        onMouseDown={ this.handleMouseDown }
        onKeyUp={ this.handleKeyUp }
        aria-hidden={ open ? 'false' : 'true' }
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
