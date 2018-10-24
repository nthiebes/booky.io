import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Droppable, Draggable } from 'react-beautiful-dnd';
import { injectIntl } from 'react-intl';
import classNames from 'classnames';

import Icon from '../../atoms/icon';
import Categories from './Categories';

class Structure extends Component {
  render() {
    const { dashboards, intl, darkMode } = this.props;

    return (
      <Fragment>
        <Droppable droppableId="structure" type="dashboard">
          { (provided) => (
            <div ref={ provided.innerRef } { ...provided.droppableProps }>
              { dashboards.map((dashboard, index) => (
                <Draggable draggableId={ `dashboard-${dashboard.id}` } key={ index } index={ index }>
                  { (providedInner) => (
                    <div>
                      <div { ...providedInner.draggableProps } ref={ providedInner.innerRef }>
                        <div className="structure__dashboard">
                          <label className={ classNames('structure__label', darkMode && 'structure__label--dark-mode') }>
                            { dashboard.name }
                          </label>
                          <Icon
                            className="structure__icon"
                            icon="drag"
                            title={ intl.formatMessage({ id: 'dashboard.drag' }) }
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
      </Fragment>
    );
  }
}

export default injectIntl(Structure);

Structure.propTypes = {
  dashboards: PropTypes.array.isRequired,
  intl: PropTypes.object.isRequired,
  darkMode: PropTypes.bool.isRequired
};
