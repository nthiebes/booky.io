import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Droppable } from 'react-beautiful-dnd';
import classNames from 'classnames';
import Bookmark from '../bookmark';
import Icon from '../../atoms/icon';
import { H2 } from '../../atoms/headline';

export default class Category extends Component {
  constructor(props) {
    super(props);

    this.toggleCategory = this.toggleCategory.bind(this);
    this.toggleEditMode = this.toggleEditMode.bind(this);
    this.state = {
      open: props.open,
      editMode: false
    };
  }

  toggleCategory() {
    this.setState({
      open: !this.state.open
    });
  }

  toggleEditMode() {
    this.setState({
      editMode: !this.state.editMode
    });
  }

  render() {
    const { name, id, bookmarks } = this.props;
    const { open, editMode } = this.state;

    return (
      <section className="category">
        <header className={ classNames('category__header', editMode && 'category__header--edit-mode') }>
          <Icon
            className={ classNames('category__toggle-icon', !open && 'category__toggle-icon--rotate') }
            icon="expand"
            title={ open ? 'Reduce category' : 'Expand category' }
            onClick={ this.toggleCategory }
          />
          <H2 className="category__name" onClick={ this.toggleCategory }>
            { name }
          </H2>
          <Icon className="category__icon" icon="edit" title="Edit category" />
          <Icon className="category__icon" icon="delete" title="Delete category" />
          <Icon className="category__icon category__icon--drag" icon="drag" title="Drag category" />
          <Icon
            className={ editMode ? '' : 'category__edit-icon--hide' }
            icon="close"
            title="Close edit mode"
            onClick={ this.toggleEditMode }
          />
          <Icon
            className={ editMode ? 'category__edit-icon--hide' : '' }
            icon="edit"
            title="Edit mode"
            onClick={ this.toggleEditMode }
          />
        </header>
        <ul className={ classNames('category__bookmarks', !open && 'category__bookmarks--hidden') }>
          <Droppable droppableId={ id.toString() } type="bookmark">
            { (provided) => (
              <div className="category__bookmark-drag-wrapper" ref={ provided.innerRef }>
                { bookmarks.map((bookmark, index) => (
                  <Bookmark
                    key={ index }
                    id={ bookmark.id }
                    editMode={ editMode }
                    name={ bookmark.name }
                    url={ bookmark.url }
                  />
                )) }
                { provided.placeholder }
              </div>
            ) }
          </Droppable>
        </ul>
      </section>
    );
  }
}

Category.propTypes = {
  name: PropTypes.string.isRequired,
  open: PropTypes.bool,
  id: PropTypes.number.isRequired,
  bookmarks: PropTypes.array
};

Category.defaultProps = {
  open: true,
  bookmarks: []
};
