import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Draggable } from 'react-beautiful-dnd';
import { injectIntl } from 'react-intl';

import classNames from 'classnames';
import Icon from '../../atoms/icon';

class Bookmark extends Component {
  render() {
    const { url, name, editMode, id, openModal, categoryId, index, intl, newtab, favicon, darkMode } = this.props;

    return (
      <Draggable index={ index } draggableId={ `bookmark-${id}` }>
        { (provided) => (
          <div>
            <div { ...provided.draggableProps } ref={ provided.innerRef }>
              <li className={ classNames('bookmark', editMode && 'bookmark--edit-mode') }>
                <img src={ favicon || '_assets/no-favicon.png' } height="16" width="16" />
                <a className={ classNames('bookmark__link', darkMode && 'bookmark__link--dark') } href={ url } target={ newtab ? '_blank' : '_self' }>
                  { name }
                </a>
                <Icon
                  className="bookmark__icon"
                  icon="edit"
                  title={ intl.formatMessage({ id: 'bookmark.edit' }) }
                  onClick={ () => { openModal('EditBookmark', {
                    id,
                    url,
                    name,
                    categoryId
                  }); } }
                  tabIndex={ editMode ? '0' : '-1' }
                  darkMode={ darkMode }
                />
                <Icon
                  className="bookmark__icon"
                  icon="delete"
                  title={ intl.formatMessage({ id: 'bookmark.delete' }) }
                  onClick={ () => { openModal('DeleteBookmark', {
                    id,
                    url,
                    name,
                    categoryId
                  }); } }
                  tabIndex={ editMode ? '0' : '-1' }
                  darkMode={ darkMode }
                />
                <Icon
                  className="bookmark__icon bookmark__icon--drag"
                  icon="drag"
                  title={ intl.formatMessage({ id: 'bookmark.drag' }) }
                  dragHandleProps={ provided.dragHandleProps }
                  tabIndex={ editMode ? '0' : '-1' }
                  darkMode={ darkMode }
                />
              </li>
            </div>
            {provided.placeholder}
          </div>
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
  id: PropTypes.string.isRequired,
  openModal: PropTypes.func.isRequired,
  categoryId: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  intl: PropTypes.object.isRequired,
  newtab: PropTypes.bool.isRequired,
  favicon: PropTypes.string,
  darkMode: PropTypes.bool.isRequired
};
