import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Droppable, Draggable } from 'react-beautiful-dnd';
import { injectIntl } from 'react-intl';
import classNames from 'classnames';

import Icon from '../../atoms/icon';
import { H2 } from '../../atoms/headline';
import Categories from './Categories';

class Structure extends PureComponent {
  static propTypes = {
    dashboards: PropTypes.array.isRequired,
    intl: PropTypes.object.isRequired,
    darkMode: PropTypes.bool.isRequired
  }

  render() {
    const { dashboards, intl, darkMode } = this.props;

    return (
      <Fragment>
        <Droppable droppableId="structure" type="dashboard" disableInteractiveElementBlocking>
          { (provided) => (
            <ul ref={ provided.innerRef } { ...provided.droppableProps } className="structure">
              { dashboards.map((dashboard, index) => (
                <Draggable draggableId={ `dashboard-${dashboard.id}` } key={ dashboard.id } index={ index }>
                  { (providedInner, snapshot) => {
                    const style = {
                      ...providedInner.draggableProps.style,
                      top: 'auto',
                      left: snapshot.isDragging ? '0' : 'auto',
                      position: snapshot.isDragging ? 'absolute' : 'relative'
                    };
                    
                    return (
                      <li { ...providedInner.draggableProps } ref={ providedInner.innerRef } style={ style }>
                        <div className="structure__dashboard">
                          <H2
                            style="h3"
                            noMargin
                            className={ classNames(
                              'structure__title',
                              darkMode && 'structure__title--dark-mode'
                            ) }
                          >
                            { dashboard.name }
                          </H2>
                          <Icon
                            className="structure__icon"
                            icon="drag"
                            label={ intl.formatMessage({ id: 'dashboard.drag' }) }
                            isButton
                            dragHandleProps={ providedInner.dragHandleProps }
                          />
                        </div>
                        {/* <Categories dashboard={ dashboard } categories={ categories } /> */}
                      </li>
                    ); } }
                </Draggable>
              )) }
              { provided.placeholder }
            </ul>
          ) }
        </Droppable>
      </Fragment>
    );
  }
}

export default injectIntl(Structure);
