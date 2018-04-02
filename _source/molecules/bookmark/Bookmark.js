import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Draggable } from 'react-beautiful-dnd';
import classNames from 'classnames';
import Icon from '../../atoms/icon';

export default class Bookmark extends Component {
  render() {
    const { url, target, name, editMode, id, openModal, categoryId, index } = this.props;

    return (
      <Draggable index={ index } draggableId={ `bookmark-${id}` }>
        { (provided) => (
          <div>
            <div { ...provided.draggableProps } ref={ provided.innerRef }>
              <li className={ classNames('bookmark', editMode && 'bookmark--edit-mode') }>
                <a className="bookmark__link" href={ url } target={ target }>{ name }</a>
                <Icon
                  className="bookmark__icon"
                  icon="edit"
                  title="Edit bookmark"
                  onClick={ () => { openModal('EditBookmark', {
                    id,
                    url,
                    name,
                    categoryId
                  }); } }
                />
                <Icon
                  className="bookmark__icon"
                  icon="delete"
                  title="Delete bookmark"
                  onClick={ () => { openModal('DeleteBookmark', {
                    id,
                    url,
                    name,
                    categoryId
                  }); } }
                />
                <Icon
                  className="bookmark__icon bookmark__icon--drag"
                  icon="drag"
                  title="Drag bookmark"
                  dragHandleProps={ provided.dragHandleProps }
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

Bookmark.propTypes = {
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  editMode: PropTypes.bool.isRequired,
  target: PropTypes.string,
  id: PropTypes.number.isRequired,
  openModal: PropTypes.func.isRequired,
  categoryId: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired
};

Bookmark.defaultProps = {
  target: '_blank'
};
