import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Droppable, Draggable } from 'react-beautiful-dnd';
import Icon from '../../atoms/icon';
import Categories from './Categories';

export default class Structure extends Component {
  render() {
    const { dashboards } = this.props;

    return (
      <Droppable droppableId="structure" type="dashboard">
        { (provided) => (
          <div ref={ provided.innerRef } { ...provided.droppableProps }>
            { dashboards.map((dashboard, index) => (
              <Draggable draggableId={ `dashboard-${dashboard.id}` } key={ index } index={ index }>
                { (providedInner) => (
                  <div>
                    <div { ...providedInner.draggableProps } ref={ providedInner.innerRef }>
                      <div className="structure__dashboard">
                        <label className="structure__label">{ dashboard.name }</label>
                        <Icon
                          className="structure__icon"
                          icon="drag"
                          title="Drag dashboard"
                          dragHandleProps={ providedInner.dragHandleProps }
                        />
                      </div>
                      <Categories dashboard={ dashboard } />
                    </div>
                    {providedInner.placeholder}
                  </div>
                ) }
              </Draggable>
            )) }
            { provided.placeholder }
          </div>
        ) }
      </Droppable>
    );
  }
}

Structure.propTypes = {
  dashboards: PropTypes.array.isRequired
};
