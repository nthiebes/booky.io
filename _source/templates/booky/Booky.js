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
  constructor(props) {
    super(props);

    this.onDragStart = this.onDragStart.bind(this);
    this.onDragEnd = this.onDragEnd.bind(this);
  }

  componentDidMount() {  
    loadingSpinner.addEventListener('transitionend', this.transitionEndCallback);
    loadingSpinner.classList.add('loading__spinner--hide');
  }

  transitionEndCallback() {
    loadingSpinner.removeEventListener('transitionend', this.transitionEndCallback);
    loadingSpinner.parentNode.removeChild(loadingSpinner);
    loadingHeader.parentNode.removeChild(loadingHeader);
  }

  onDragStart() {
    // console.log('onDragStart', initial);
  }

  onDragEnd(result) {
    // console.log('onDragEnd', result);
    if (result.destination) {
      if (result.type === 'dashboard') {
        this.props.dragDashboard({
          destinationIndex: result.destination.index,
          sourceIndex: result.source.index,
          dashboardId: parseInt(result.draggableId, 10)
        });
      }
      if (result.type === 'category') {
        this.props.dragCategory({
          destinationIndex: result.destination.index,
          sourceIndex: result.source.index,
          sourceDashboardId: parseInt(result.source.droppableId.replace('dashboard-', ''), 10),
          destinationDashboardId: parseInt(result.destination.droppableId.replace('dashboard-', ''), 10)
        });
      }
      if (result.type === 'bookmark') {
        this.props.dragBookmark({
          destinationIndex: result.destination.index,
          bookmarkId: parseInt(result.draggableId.replace(/bookmark-/g, ''), 10),
          destinationCategoryId: parseInt(result.destination.droppableId, 10),
          sourceCategoryId: parseInt(result.source.droppableId, 10),
          sourceIndex: result.source.index
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
  store: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
};
