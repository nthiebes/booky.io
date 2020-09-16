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
  componentDidMount() {
    loadingSpinner.addEventListener('transitionend', this.transitionEndCallback);
    loadingSpinner.classList.add('loading__spinner--hide');
  }

  transitionEndCallback() {
    loadingSpinner.removeEventListener('transitionend', this.transitionEndCallback);
    loadingSpinner.parentNode && loadingSpinner.parentNode.removeChild(loadingSpinner);
    loadingHeader.parentNode && loadingHeader.parentNode.removeChild(loadingHeader);
  }

  onDragStart = ({ type }) => {
    this.props.startDragging({
      dragType: type
    });
  }

  onDragEnd = ({ type, destination, source, draggableId }) => {
    this.props.stopDragging();

    if (destination) {
      if (type === 'dashboard-mobile' || type === 'dashboard-sidebar' || type === 'dashboard-tabs') {
        this.props.dragDashboard({
          destinationIndex: destination.index,
          sourceIndex: source.index,
          dashboardId: parseInt(
            draggableId
              .replace('dashboard-mobile-', '')
              .replace('dashboard-sidebar-', '')
              .replace('dashboard-tabs-', '')
            , 10)
        });
      }
      if (type === 'category') {
        this.props.dragCategory({
          destinationIndex: destination.index,
          sourceIndex: source.index,
          sourceDashboardId: parseInt(source.droppableId.replace('dashboard-', ''), 10),
          destinationDashboardId: parseInt(destination.droppableId.replace('dashboard-', ''), 10),
          categoryId: parseInt(draggableId.replace(/category-/g, ''), 10)
        });
      }
      if (type === 'bookmark') {
        this.props.dragBookmark({
          destinationIndex: destination.index,
          bookmarkId: parseInt(draggableId.replace(/bookmark-/g, ''), 10),
          destinationCategoryId: parseInt(destination.droppableId, 10),
          sourceCategoryId: parseInt(source.droppableId, 10),
          sourceIndex: source.index
        });
      }
    }
  }

  render() {
    const { store, history } = this.props;

    return (
      <Provider store={ store }>
        <DragDropContext onDragStart={ this.onDragStart } onDragEnd={ this.onDragEnd }>
          <ConnectedRouter history={ history }>
            <BrowserRouter>
              <Routes />
            </BrowserRouter>
          </ConnectedRouter>
        </DragDropContext>
      </Provider>
    );
  }
}

Booky.propTypes = {
  dragBookmark: PropTypes.func.isRequired,
  dragCategory: PropTypes.func.isRequired,
  dragDashboard: PropTypes.func.isRequired,
  startDragging: PropTypes.func.isRequired,
  stopDragging: PropTypes.func.isRequired,
  store: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
};
