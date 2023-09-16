/* eslint-disable complexity */
import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Draggable } from 'react-beautiful-dnd';
import { injectIntl } from 'react-intl';
import classNames from 'classnames';

import Icon from '../../atoms/icon';
import P from '../../atoms/paragraph';

const Empty = ({ children }) => <Fragment>{children({})}</Fragment>;

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
    isMobile: PropTypes.bool.isRequired,
    isExtension: PropTypes.bool.isRequired,
    enableNotes: PropTypes.bool.isRequired,
    note: PropTypes.string,
    viewOnly: PropTypes.bool,
    color: PropTypes.string,
    isSearch: PropTypes.bool,
    className: PropTypes.string
  };

  state = {
    hoverEditMode: false,
    showNotes: false
  };

  onEditClick = () => {
    const {
      url,
      name,
      id,
      note,
      openModal,
      categoryId,
      closeEditMode,
      editMode,
      onDeleteOrEditClick
    } = this.props;

    openModal('EditBookmark', {
      id,
      url,
      name,
      categoryId,
      note
    });

    closeEditMode && editMode && onDeleteOrEditClick();
  };

  onDeleteClick = () => {
    const {
      url,
      name,
      id,
      openModal,
      categoryId,
      closeEditMode,
      editMode,
      onDeleteOrEditClick
    } = this.props;

    openModal('DeleteBookmark', {
      id,
      url,
      name,
      categoryId
    });

    closeEditMode && editMode && onDeleteOrEditClick();
  };

  enableEditMode = () => {
    this.setState({
      hoverEditMode: true
    });
  };

  disableEditMode = () => {
    this.setState({
      hoverEditMode: false
    });
  };

  onNotesClick = () => {
    this.setState({
      showNotes: !this.state.showNotes
    });
  };

  handleOnClick = () => {
    if (this.props.isExtension) {
      window.close();
    }
  };

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
      isExtension,
      enableNotes,
      note,
      viewOnly,
      color,
      isSearch,
      className
    } = this.props;
    const { hoverEditMode, showNotes } = this.state;
    const Wrapper = isSearch ? Empty : Draggable;

    return (
      <Wrapper
        index={index}
        draggableId={`bookmark-${id}`}
        key={`bookmark-${id}`}
        disableInteractiveElementBlocking
      >
        {(provided) => (
          <li
            className={classNames(
              'bookmark',
              (editMode || hoverEditMode) && 'bookmark--edit-mode',
              className
            )}
            {...provided.draggableProps}
            ref={provided.innerRef}
            onMouseLeave={
              bookmarkEditOnHover && !isMobile ? this.disableEditMode : null
            }
          >
            <span className="bookmark__wrapper">
              {!favicon || favicon === 'default' ? (
                <div
                  className={classNames(
                    'bookmark__fallback-icon',
                    `bookmark__fallback-icon--${color}`,
                    viewOnly && 'bookmark__favicon--viewOnly'
                  )}
                  {...provided.dragHandleProps}
                  aria-label={intl.formatMessage({ id: 'bookmark.drag' })}
                  title={intl.formatMessage({ id: 'bookmark.drag' })}
                >
                  {name.substring(0, 1).toUpperCase()}
                </div>
              ) : (
                <img
                  src={favicon}
                  height="16"
                  width="16"
                  alt=""
                  className={classNames(
                    'bookmark__favicon',
                    viewOnly && 'bookmark__favicon--viewOnly'
                  )}
                  {...provided.dragHandleProps}
                  tabIndex="-1"
                  aria-hidden="true"
                  title={intl.formatMessage({ id: 'bookmark.drag' })}
                />
              )}
              {/* eslint-disable-next-line react/jsx-no-target-blank */}
              <a
                className={classNames(
                  'bookmark__link',
                  darkMode && 'bookmark__link--dark'
                )}
                href={url}
                target={newtab || isExtension ? '_blank' : '_self'}
                rel={newtab ? 'noopener noreferrer' : null}
                onClick={this.handleOnClick}
                onMouseEnter={
                  bookmarkEditOnHover && !isMobile ? this.enableEditMode : null
                }
                title={name}
              >
                {name.trim() || '\xa0'}
              </a>
              {(editMode || (hoverEditMode && !isDragging)) && (
                <>
                  {(enableNotes || viewOnly) && note && (
                    <span className="bookmark__note-icon-wrapper">
                      <Icon
                        icon="note"
                        label={intl.formatMessage({
                          id: `bookmark.note${showNotes ? 'Hide' : 'Show'}`
                        })}
                        onClick={this.onNotesClick}
                        isButton
                      />
                      <Icon
                        icon={showNotes ? 'hide' : 'show'}
                        size="tiny"
                        color="light"
                        className={classNames(
                          'bookmark__note-icon',
                          darkMode && 'bookmark__note-icon--dark-mode'
                        )}
                      />
                    </span>
                  )}
                  {!viewOnly && (
                    <>
                      <Icon
                        icon="edit"
                        label={intl.formatMessage({ id: 'bookmark.edit' })}
                        onClick={this.onEditClick}
                        isButton
                      />
                      <Icon
                        icon="delete"
                        label={intl.formatMessage({ id: 'bookmark.delete' })}
                        onClick={this.onDeleteClick}
                        isButton
                      />
                      {!isSearch && (
                        <Icon
                          icon="drag"
                          label={intl.formatMessage({ id: 'bookmark.drag' })}
                          dragHandleProps={provided.dragHandleProps}
                          isButton
                        />
                      )}
                    </>
                  )}
                </>
              )}
            </span>
            {showNotes && enableNotes && (
              <P noPadding className="bookmark__note">
                <i>{note}</i>
              </P>
            )}
          </li>
        )}
      </Wrapper>
    );
  }
}

export default injectIntl(Bookmark);
