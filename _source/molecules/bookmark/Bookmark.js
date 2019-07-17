import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Draggable } from 'react-beautiful-dnd';
import { injectIntl } from 'react-intl';

import classNames from 'classnames';
import Icon from '../../atoms/icon';

class Bookmark extends Component {
  constructor(props) {
    super(props);

    this.onEditClick = this.onEditClick.bind(this);
    this.onDeleteClick = this.onDeleteClick.bind(this);
  }

  onEditClick() {
    const { url, name, id, openModal, categoryId } = this.props;

    openModal('EditBookmark', {
      id,
      url,
      name,
      categoryId
    });
  }

  onDeleteClick() {
    const { url, name, id, openModal, categoryId } = this.props;

    openModal('DeleteBookmark', {
      id,
      url,
      name,
      categoryId
    });
  }

  render() {
    const { url, name, editMode, id, index, intl, newtab, favicon, darkMode } = this.props;

    return (
      <Draggable index={ index } draggableId={ `bookmark-${id}` }>
        { (provided) => (
          <li
            className={ classNames('bookmark', editMode && 'bookmark--edit-mode') }
            { ...provided.draggableProps }
            ref={ provided.innerRef }
          >
            <img src={ favicon || '_assets/no-favicon.png' } height="16" width="16" alt="" aria-hidden="true" />
            <a className={ classNames('bookmark__link', darkMode && 'bookmark__link--dark') } href={ url } target={ newtab ? '_blank' : '_self' }>
              { name }
            </a>
            <Icon
              className="bookmark__icon"
              icon="edit"
              title={ intl.formatMessage({ id: 'bookmark.edit' }) }
              onClick={ this.onEditClick }
              tabIndex={ editMode ? '0' : '-1' }
              isButton
            />
            <Icon
              className="bookmark__icon"
              icon="delete"
              title={ intl.formatMessage({ id: 'bookmark.delete' }) }
              onClick={ this.onDeleteClick }
              tabIndex={ editMode ? '0' : '-1' }
              isButton
            />
            <Icon
              className="bookmark__icon bookmark__icon--drag"
              icon="drag"
              title={ intl.formatMessage({ id: 'bookmark.drag' }) }
              dragHandleProps={ provided.dragHandleProps }
              tabIndex={ editMode ? '0' : '-1' }
              isButton
            />
          </li>
        ) }
      </Draggable>
    );
  }
}

export default injectIntl(Bookmark);

Bookmark.propTypes = {
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  editMode: PropTypes.bool.isRequired,
  target: PropTypes.string,
  id: PropTypes.number.isRequired,
  openModal: PropTypes.func.isRequired,
  categoryId: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
  intl: PropTypes.object.isRequired,
  newtab: PropTypes.bool.isRequired,
  favicon: PropTypes.string,
  darkMode: PropTypes.bool.isRequired
};
