 
import React, { PureComponent, Fragment } from 'react';
import { Draggable } from 'react-beautiful-dnd';
import { injectIntl } from 'react-intl';
import classNames from 'classnames';

import Icon from '../../atoms/icon';
import P from '../../atoms/paragraph';
import { isSafeUrl, getTabUrl } from '../../_utils/url';
import { postMessage } from '../../_utils/extension';

const Empty = ({ children }) => <Fragment>{children({})}</Fragment>;

class Bookmark extends PureComponent {
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

  handleOnClick = (event) => {
    const { isExtension, supportsTabs, url } = this.props;

    if (!isExtension) {
      return;
    }

    // Links in the popup's iframe open inside the iframe or not at all,
    // depending on the browser, so the extension opens the tab (#446)
    const tabUrl = supportsTabs && getTabUrl(url);

    if (tabUrl) {
      event.preventDefault();
      postMessage({
        openTabs: [tabUrl]
      });
    } else {
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
    // Bookmarks can be shared with other users, so a javascript: URL must never become a link
    const href = isSafeUrl(url) ? url : undefined;
    const target = newtab || isExtension ? '_blank' : '_self';
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
              bookmarkEditOnHover && (!isMobile || isExtension)
                ? this.disableEditMode
                : null
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
                <div
                  {...provided.dragHandleProps}
                  tabIndex="-1"
                  aria-hidden="true"
                  title={intl.formatMessage({ id: 'bookmark.drag' })}
                  className={classNames(
                    'bookmark__favicon',
                    viewOnly && 'bookmark__favicon--viewOnly'
                  )}
                >
                  <img src={favicon} height="16" width="16" alt="" />
                </div>
              )}
              <a
                className={classNames(
                  'bookmark__link',
                  darkMode && 'bookmark__link--dark'
                )}
                href={href}
                target={target}
                rel={target === '_blank' ? 'noopener noreferrer' : null}
                onClick={this.handleOnClick}
                onMouseEnter={
                  bookmarkEditOnHover && (!isMobile || isExtension)
                    ? this.enableEditMode
                    : null
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
