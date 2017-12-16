import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Droppable, Draggable } from 'react-beautiful-dnd';
import Modal from '../../templates/modal';
import Icon from '../../atoms/icon';
import Categories from './Categories';

export default class Structure extends Component {
  render() {
    const { dashboards, open, toggleStructureView } = this.props;

    return (
      <Modal open={ open } onClose={ toggleStructureView } headline="Edit site structure" noPadding noCancel>
        <Droppable droppableId="structure" type="dashboard">
          { (provided) => (
            <div ref={ provided.innerRef }>
              { dashboards.map((dashboard, index) => (
                <Draggable draggableId={ `dashboard-${dashboard.id}` } type="dashboard" key={ index }>
                  { (providedInner) => (
                    <div>
                      <div style={ providedInner.draggableStyle } ref={ providedInner.innerRef }>
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
      </Modal>
    );
  }
}

Structure.propTypes = {
  dashboards: PropTypes.array.isRequired,
  open: PropTypes.bool.isRequired,
  toggleStructureView: PropTypes.func.isRequired
};
