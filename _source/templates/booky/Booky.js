import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { DragDropContext } from 'react-beautiful-dnd';
import { BrowserRouter } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import { Provider } from 'react-intl-redux';

import Routes from '../../routes';
import './Booky.scss';

const loadingSpinner = document.getElementById('loading__spinner');
const loadingHeader = document.getElementById('loading__header');

export default class Booky extends Component {
  static propTypes = {
    dragBookmark: PropTypes.func.isRequired,
    dragCategory: PropTypes.func.isRequired,
    dragDashboard: PropTypes.func.isRequired,
    startDragging: PropTypes.func.isRequired,
    stopDragging: PropTypes.func.isRequired,
    updateUserData: PropTypes.func.isRequired,
    store: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired,
    isMobile: PropTypes.bool.isRequired,
    openModal: PropTypes.func.isRequired
  };

  componentDidMount() {
    const mediaQuery = window.matchMedia('(max-width: 1000px)');

    loadingSpinner.addEventListener(
      'transitionend',
      this.transitionEndCallback
    );
    loadingSpinner.classList.add('loading__spinner--hide');
    mediaQuery.addListener(this.widthChange);
  }

  transitionEndCallback() {
    loadingSpinner.removeEventListener(
      'transitionend',
      this.transitionEndCallback
    );
    loadingSpinner.parentNode &&
      loadingSpinner.parentNode.removeChild(loadingSpinner);
    loadingHeader.parentNode &&
      loadingHeader.parentNode.removeChild(loadingHeader);
  }

  widthChange = (mediaQuery) => {
    this.props.updateUserData({
      isMobile: mediaQuery.matches
    });
  };

  onDragStart = ({ type }) => {
    const { isMobile, startDragging } = this.props;

    if (!isMobile) {
      startDragging({
        dragType: type
      });
    }
  };

  // eslint-disable-next-line max-statements
  onDragEnd = ({ type, destination, source, draggableId }) => {
    const {
      isMobile,
      stopDragging,
      dragDashboard,
      dragCategory,
      dragBookmark,
      openModal
    } = this.props;

    if (!isMobile) {
      stopDragging();
    }

    if (destination) {
      if (
        type === 'dashboard-mobile' ||
        type === 'dashboard-sidebar' ||
        type === 'dashboard-tabs'
      ) {
        dragDashboard({
          destinationIndex: destination.index,
          sourceIndex: source.index,
          dashboardId: parseInt(
            draggableId
              .replace('dashboard-mobile-', '')
              .replace('dashboard-sidebar-', '')
              .replace('dashboard-tabs-', ''),
            10
          )
        });
      }
      if (type === 'category') {
        dragCategory({
          destinationIndex: destination.index,
          sourceIndex: source.index,
          sourceDashboardId: parseInt(
            source.droppableId.replace('dashboard-', ''),
            10
          ),
          destinationDashboardId: parseInt(
            destination.droppableId.replace('dashboard-', ''),
            10
          ),
          categoryId: parseInt(draggableId.replace(/category-/g, ''), 10)
        });
      }
      if (type === 'bookmark') {
        const hasDashboardDestination = destination.droppableId.match(
          'dashboard-'
        );

        if (hasDashboardDestination) {
          openModal('MoveBookmark', {
            bookmarkId: parseInt(draggableId.replace(/bookmark-/g, ''), 10),
            categoryId: parseInt(source.droppableId, 10),
            dashboardId: parseInt(
              destination.droppableId.replace(/dashboard-/g, ''),
              10
            )
          });
        } else {
          dragBookmark({
            destinationIndex: destination.index,
            bookmarkId: parseInt(draggableId.replace(/bookmark-/g, ''), 10),
            destinationCategoryId: parseInt(destination.droppableId, 10),
            sourceCategoryId: parseInt(source.droppableId, 10),
            sourceIndex: source.index
          });
        }
      }
    }
  };

  render() {
    const { store, history } = this.props;

    return (
      <Provider store={store}>
        <DragDropContext
          onDragStart={this.onDragStart}
          onDragEnd={this.onDragEnd}
        >
          <ConnectedRouter history={history}>
            <BrowserRouter>
              <Routes />
            </BrowserRouter>
          </ConnectedRouter>
        </DragDropContext>
      </Provider>
    );
  }
}
