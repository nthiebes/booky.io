import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { DragDropContext } from 'react-beautiful-dnd';
import './Booky.scss';

export default class Booky extends Component {
  constructor(props) {
    super(props);

    this.onDragStart = this.onDragStart.bind(this);
    this.onDragEnd = this.onDragEnd.bind(this);
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
        { this.props.children }
      </DragDropContext>
    );
  }
}

Booky.propTypes = {
  children: PropTypes.element.isRequired,
  dragBookmark: PropTypes.func.isRequired,
  dragCategory: PropTypes.func.isRequired,
  dragDashboard: PropTypes.func.isRequired
};
