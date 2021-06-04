import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { abortFetch } from '../../_utils/fetcher';
import { parseBookmarkUrl } from '../../_utils/url';

import AddBookmark from './modals/AddBookmarkContainer';
import EditBookmark from './modals/EditBookmarkContainer';
import DeleteBookmark from './modals/DeleteBookmark';
import MoveBookmark from './modals/MoveBookmarkContainer';
import AddCategory from './modals/AddCategory';
import EditCategory from './modals/EditCategory';
import DeleteCategory from './modals/DeleteCategory';
import AddDashboard from './modals/AddDashboard';
import EditDashboard from './modals/EditDashboard';
import DeleteDashboard from './modals/DeleteDashboard';
import Customize from './modals/Customize';
import DeleteAccount from './modals/DeleteAccount';
import SortCategories from './modals/SortCategoriesContainer';

export default class Modal extends PureComponent {
  static propTypes = {
    modal: PropTypes.string,
    open: PropTypes.bool.isRequired,
    showModal: PropTypes.bool.isRequired,
    closeModal: PropTypes.func.isRequired,
    hideModal: PropTypes.func.isRequired,
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
    deleteAccount: PropTypes.func.isRequired,
    resetSearch: PropTypes.func.isRequired
  };

  state = {
    pending: false,
    error: null
  };

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
    MoveBookmark: {
      type: MoveBookmark,
      action: this.props.editBookmark
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
    Customize: {
      type: Customize
    },
    DeleteAccount: {
      type: DeleteAccount,
      action: this.props.deleteAccount
    },
    SortCategories: {
      type: SortCategories
    }
  };

  // eslint-disable-next-line max-statements
  handleSave = (modalData) => {
    const { modal, data, resetSearch } = this.props;

    modalData.id = parseInt(modalData.id, 10);
    modalData.categoryId = parseInt(modalData.categoryId, 10);
    modalData.dashboardId = parseInt(modalData.dashboardId, 10);

    if (modalData.url) {
      modalData.url = parseBookmarkUrl(modalData.url);
    }

    if (modalData.position) {
      modalData.position = parseInt(modalData.position, 10);
    }

    if (this.modalMap[modal].action) {
      this.setState({
        pending: true,
        error: null
      });

      this.modalMap[modal].action({
        ...modalData,
        dashboardId: modalData.dashboardId || data.activeDashboard,
        onSuccess: () => {
          modalData.onSuccess && modalData.onSuccess();
          this.closeModal();
          resetSearch();
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
  };

  closeModal = () => {
    const { closeModal, hideModal } = this.props;

    this.setState({
      pending: false,
      error: null
    });
    abortFetch();
    closeModal();

    window.setTimeout(() => {
      hideModal();
    }, 500);
    // document.body.classList.remove('booky--no-scrolling');
  };

  handleKeyUp = (event) => {
    if (event.key === 'Escape') {
      this.closeModal();
    }
  };

  handleMouseDown = (event) => {
    if (event.target.classList.contains('modal')) {
      this.closeModal();
    }
  };

  render() {
    const { modal, open, showModal, data, darkMode } = this.props;
    const { pending, error } = this.state;
    const CustomTag = this.modalMap[modal] && this.modalMap[modal].type;

    return (
      // eslint-disable-next-line jsx-a11y/no-static-element-interactions
      <div
        className={classNames('modal', open && 'modal--open')}
        onMouseDown={this.handleMouseDown}
        onKeyUp={this.handleKeyUp}
      >
        <div
          className={classNames(
            'modal__inner',
            darkMode && 'modal__inner--dark'
          )}
        >
          {CustomTag && showModal && (
            <CustomTag
              onClose={this.closeModal}
              onSave={this.handleSave}
              data={data}
              pending={pending}
              darkMode={darkMode}
              error={error}
            />
          )}
        </div>
      </div>
    );
  }
}
