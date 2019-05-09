import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { DragDropContext } from 'react-beautiful-dnd';
import { BrowserRouter } from 'react-router-dom';

import Routes from '../../routes';
import './Booky.scss';

const loader = document.getElementById('loader');
const loaderSpinner = document.getElementById('loader__spinner');

export default class Booky extends Component {
  constructor(props) {
    super(props);

    this.onDragStart = this.onDragStart.bind(this);
    this.onDragEnd = this.onDragEnd.bind(this);
  }

  componentDidMount() {  
    loader.addEventListener('transitionend', this.transitionEndCallback);
    loader.classList.add('loader--hide');
    loaderSpinner.classList.add('loader__spinner--hide');
  }

  transitionEndCallback() {
    loader.parentNode.removeChild(loader);
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
          bookmarkId: parseInt(result.draggableId, 10),
          destinationCategoryId: parseInt(result.destination.droppableId, 10),
          sourceCategoryId: parseInt(result.source.droppableId, 10),
          sourceIndex: result.source.index
        });
      }
    }
  }

  render() {
    return (
      <DragDropContext onDragStart={ this.onDragStart } onDragEnd={ this.onDragEnd }>
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
      </DragDropContext>
    );
  }
}

Booky.propTypes = {
  dragBookmark: PropTypes.func.isRequired,
  dragCategory: PropTypes.func.isRequired,
  dragDashboard: PropTypes.func.isRequired
};
