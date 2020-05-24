import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Droppable, Draggable } from 'react-beautiful-dnd';
import { FormattedMessage, injectIntl } from 'react-intl';
import classNames from 'classnames';

import Skeleton from '../../atoms/skeleton';
import Label from '../../atoms/label';
import fetcher from '../../_utils/fetcher';
import Icon from '../../atoms/icon';

class CategoriesSorting extends PureComponent {
  static propTypes = {
    dashboardId: PropTypes.number.isRequired,
    intl: PropTypes.object.isRequired,
    darkMode: PropTypes.bool
  }

  state = {
    categories: [],
    pending: true,
    error: null
  }

  componentDidMount() {
    const { dashboardId } = this.props;

    fetcher({
      url: `/dashboards/${dashboardId}/categories`,
      onSuccess: (data) => {
        console.log('data', data);

        this.setState({
          categories: data,
          pending: false
        });
      },
      onError: (error) => {
        console.log('error', error);

        this.setState({
          error,
          pending: false
        });
      }
    });
  }

  render() {
    const { dashboardId, intl, darkMode } = this.props;
    const { categories, pending, error } = this.state;

    return (
      <Fragment>
        <Label>
          <FormattedMessage id="category.sort" />{':'}
        </Label>
        { pending && (
          <span>
            <Skeleton className="categories-sorting__skeleton" />
            <Skeleton className="categories-sorting__skeleton" />
            <Skeleton className="categories-sorting__skeleton" />
          </span>
        ) }
        { error && (
          'error'
        ) }
        { !categories && (
          'empty'
        ) }
        <Droppable droppableId={ `dashboard-${dashboardId}` } type="category2" disableInteractiveElementBlocking>
          { (provided) => (
            <ul className="categories-sorting" ref={ provided.innerRef } { ...provided.droppableProps }>
              { categories.map((category, index) => (
                <Draggable draggableId={ `category-${category.id}` } key={ category.id } index={ index }>
                  { (providedInner, snapshot) => {
                    const style = {
                      ...providedInner.draggableProps.style,
                      top: 'auto',
                      left: snapshot.isDragging ? '0' : 'auto',
                      position: snapshot.isDragging ? 'absolute' : 'relative'
                    };
                
                    return (
                      <li
                        key={ category.id }
                        className="categories-sorting__category"
                        { ...providedInner.draggableProps }
                        ref={ providedInner.innerRef }
                        style={ style }
                      >
                        <span
                          className={ classNames(
                            'categories-sorting__name',
                            darkMode && 'categories-sorting__name--dark-mode'
                          ) }
                        >
                          { category.name }
                        </span>
                        <Icon
                          className="categories-sorting__icon"
                          icon="drag"
                          label={ intl.formatMessage({ id: 'category.drag' }) }
                          isButton
                          dragHandleProps={ providedInner.dragHandleProps }
                        />
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

export default injectIntl(CategoriesSorting);
