import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Droppable, Draggable } from 'react-beautiful-dnd';
import { FormattedMessage, injectIntl } from 'react-intl';
import classNames from 'classnames';

import Skeleton from '../../atoms/skeleton';
import Label from '../../atoms/label';
import Icon from '../../atoms/icon';
import Paragraph from '../../atoms/paragraph';
import { ErrorMessage } from '../../atoms/messages';

class CategoriesSorting extends PureComponent {
  static propTypes = {
    dashboardId: PropTypes.number.isRequired,
    intl: PropTypes.object.isRequired,
    darkMode: PropTypes.bool,
    categories: PropTypes.array.isRequired,
    getCategories: PropTypes.func.isRequired,
    pending: PropTypes.bool,
    error: PropTypes.string,
    dashboardName: PropTypes.string.isRequired,
    noTitle: PropTypes.bool
  };

  componentDidMount() {
    const { dashboardId, getCategories } = this.props;

    getCategories(dashboardId);
  }

  render() {
    const {
      dashboardId,
      dashboardName,
      intl,
      darkMode,
      categories,
      pending,
      error,
      noTitle
    } = this.props;

    return (
      <Fragment>
        {!noTitle && (
          <Label>
            <FormattedMessage id="category.sort" />
            {':'}
          </Label>
        )}
        {pending && (
          <span>
            <Skeleton className="categories-sorting__skeleton" />
            <Skeleton className="categories-sorting__skeleton" />
            <Skeleton className="categories-sorting__skeleton" />
          </span>
        )}
        {error && (
          <ErrorMessage
            message={error}
            className="categories-sorting__error"
            noAnimation
          />
        )}
        {!categories.length && !pending && !error && (
          <Paragraph>
            <i>
              <FormattedMessage
                id="category.empty"
                values={{ collection: <b>{dashboardName}</b> }}
              />
            </i>
          </Paragraph>
        )}
        <Droppable droppableId={`dashboard-${dashboardId}`} type="category">
          {(provided) => (
            <ul
              className="categories-sorting"
              ref={provided.innerRef}
              {...provided.droppableProps}
            >
              {categories.map((category, index) => (
                <Draggable
                  draggableId={`category-${category.id}`}
                  key={category.id}
                  index={index}
                  disableInteractiveElementBlocking
                >
                  {(providedInner, snapshot) => {
                    const style = {
                      ...providedInner.draggableProps.style,
                      top: 'auto',
                      left: snapshot.isDragging ? '0' : 'auto',
                      position: snapshot.isDragging ? 'absolute' : 'relative'
                    };

                    return (
                      <li
                        key={category.id}
                        className="categories-sorting__category"
                        {...providedInner.draggableProps}
                        ref={providedInner.innerRef}
                        style={style}
                      >
                        <span
                          className={classNames(
                            'categories-sorting__name',
                            darkMode && 'categories-sorting__name--dark-mode'
                          )}
                        >
                          {category.name}
                        </span>
                        <Icon
                          className="categories-sorting__icon"
                          icon="drag"
                          label={intl.formatMessage({ id: 'category.drag' })}
                          isButton
                          dragHandleProps={providedInner.dragHandleProps}
                        />
                      </li>
                    );
                  }}
                </Draggable>
              ))}
              {provided.placeholder}
            </ul>
          )}
        </Droppable>
      </Fragment>
    );
  }
}

export default injectIntl(CategoriesSorting);
