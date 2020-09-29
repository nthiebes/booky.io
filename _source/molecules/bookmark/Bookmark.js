import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Draggable } from 'react-beautiful-dnd';
import { injectIntl } from 'react-intl';

import classNames from 'classnames';
import Icon from '../../atoms/icon';

class Bookmark extends PureComponent {
  static propTypes = {
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
    darkMode: PropTypes.bool.isRequired,
    closeEditMode: PropTypes.bool.isRequired,
    onDeleteOrEditClick: PropTypes.func.isRequired,
    bookmarkEditOnHover: PropTypes.bool.isRequired,
    isDragging: PropTypes.bool.isRequired,
    isMobile: PropTypes.bool.isRequired
  }

  state = {
    hoverEditMode: false
  }

  onEditClick = () => {
    const { url, name, id, openModal, categoryId, closeEditMode, editMode, onDeleteOrEditClick } = this.props;

    openModal('EditBookmark', {
      id,
      url,
      name,
      categoryId
    });

    closeEditMode && editMode && onDeleteOrEditClick();
  }

  onDeleteClick = () => {
    const { url, name, id, openModal, categoryId, closeEditMode, editMode, onDeleteOrEditClick } = this.props;

    openModal('DeleteBookmark', {
      id,
      url,
      name,
      categoryId
    });

    closeEditMode && editMode && onDeleteOrEditClick();
  }

  toggleHoverEditMode = () => {
    this.setState({
      hoverEditMode: !this.state.hoverEditMode
    });
  }

  render() {
    const {
      url,
      name,
      editMode,
      id,
      index,
      intl,
      newtab,
      favicon,
      darkMode,
      bookmarkEditOnHover,
      isDragging,
      isMobile,
      isExtension
    } = this.props;
    const { hoverEditMode } = this.state;

    return (
      <Draggable
        index={ index }
        draggableId={ `bookmark-${id}` }
        key={ `bookmark-${id}` }
        disableInteractiveElementBlocking
      >
        { (provided) => (
          <li
            className={ classNames('bookmark', (editMode || hoverEditMode) && 'bookmark--edit-mode') }
            { ...provided.draggableProps }
            ref={ provided.innerRef }
            onMouseEnter={ (bookmarkEditOnHover && !isMobile) ? this.toggleHoverEditMode : null }
            onMouseLeave={ (bookmarkEditOnHover && !isMobile) ? this.toggleHoverEditMode : null }
          >
            { !favicon || favicon === 'default' ? (
              <Icon
                icon="earth"
                size="tiny"
                className={ classNames('bookmark__favicon', darkMode && 'bookmark__favicon--dark-mode') }
                dragHandleProps={ provided.dragHandleProps }
                label={ intl.formatMessage({ id: 'bookmark.drag' }) }
              />
            ) : (
              <img
                src={ favicon }
                height="16"
                width="16"
                alt=""
                className="bookmark__favicon"
                { ...provided.dragHandleProps }
                tabIndex="-1"
                aria-hidden="true"
                title={ intl.formatMessage({ id: 'bookmark.drag' }) }
              />
            ) }
            <a
              className={ classNames('bookmark__link', darkMode && 'bookmark__link--dark') }
              href={ url }
              target={ (newtab || isExtension) ? '_blank' : '_self' }
              rel={ newtab ? 'noopener noreferrer' : null }
            >
              { name }
            </a>
            { (editMode || (hoverEditMode && !isDragging)) && (
              <>
                <Icon
                  icon="edit"
                  label={ intl.formatMessage({ id: 'bookmark.edit' }) }
                  onClick={ this.onEditClick }
                  isButton
                />
                <Icon
                  icon="delete"
                  label={ intl.formatMessage({ id: 'bookmark.delete' }) }
                  onClick={ this.onDeleteClick }
                  isButton
                />
                <Icon
                  icon="drag"
                  label={ intl.formatMessage({ id: 'bookmark.drag' }) }
                  dragHandleProps={ provided.dragHandleProps }
                  isButton
                />
              </>
            ) }
          </li>
        ) }
      </Draggable>
    );
  }
}

export default injectIntl(Bookmark);
