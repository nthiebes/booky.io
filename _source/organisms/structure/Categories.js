import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Droppable, Draggable } from 'react-beautiful-dnd';
import { injectIntl } from 'react-intl';

import Icon from '../../atoms/icon';

class Categories extends Component {
  render() {
    const { dashboard, intl } = this.props;

    return (
      <Droppable droppableId={ `dashboard-${dashboard.id}` } type="category">
        { (provided) => (
          <div ref={ provided.innerRef } { ...provided.droppableProps }>
            <div className="structure__categories">
              { dashboard.categories.map((category, index) => (
                <Draggable draggableId={ `category-${category.id}` } key={ index } index={ index }>
                  { (providedInner) => (
                    <div { ...providedInner.draggableProps } ref={ providedInner.innerRef }>
                      <div key={ index } className="structure__category">
                        <label className="structure__label">{ category.name }</label>
                        <Icon
                          className="structure__icon"
                          icon="drag"
                          title={ intl.formatMessage({ id: 'category.drag' }) }
                          dragHandleProps={ providedInner.dragHandleProps }
                        />
                      </div>
                      { providedInner.placeholder }
                    </div>
                  ) }
                </Draggable>
              )) }
            </div>
            { provided.placeholder }
          </div>
        ) }
      </Droppable>
    );
  }
}

export default injectIntl(Categories);

Categories.propTypes = {
  dashboard: PropTypes.object.isRequired,
  intl: PropTypes.object.isRequired
};
