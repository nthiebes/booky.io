import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Droppable } from 'react-beautiful-dnd';
import classNames from 'classnames';
import Bookmark from '../bookmark';
import Icon from '../../atoms/icon';
import { H2 } from '../../atoms/headline';
import { ButtonSmallMedium } from '../../atoms/button';

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
    const { name, id, color, bookmarks, openModal } = this.props;
    const { open, editMode } = this.state;
    const headerClassName = classNames(
      'category__header',
      `category__header--color${color}`,
      editMode && 'category__header--edit-mode'
    );

    return (
      <section className="category">
        <header className={ headerClassName }>
          <Icon
            className={ classNames('category__toggle-icon', !open && 'category__toggle-icon--rotate') }
            icon="expand"
            title={ open ? 'Reduce category' : 'Expand category' }
            onClick={ this.toggleCategory }
          />
          <H2 className="category__name" onClick={ this.toggleCategory }>{ name }</H2>
          <Icon
            className="category__icon"
            icon="edit"
            title="Edit category"
            onClick={ () => { openModal('EditCategory', {
              name,
              id,
              color
            }); } }
          />
          <Icon
            className="category__icon"
            icon="delete"
            title="Delete category"
            onClick={ () => { openModal('DeleteCategory', {
              name,
              id
            }); } }
          />
          <Icon
            className={ editMode ? '' : 'category__edit-icon--hide' }
            icon="close"
            title="Quit edit mode"
            onClick={ this.toggleEditMode }
          />
          <Icon
            className={ editMode ? 'category__edit-icon--hide' : '' }
            icon="more-horiz"
            title="Edit mode"
            onClick={ this.toggleEditMode }
          />
        </header>
        <ul className={ classNames('category__bookmarks', !open && 'category__bookmarks--hidden') }>
          <Droppable droppableId={ id.toString() } type="bookmark">
            { (provided) => (
              <div className="category__bookmark-drag-wrapper" ref={ provided.innerRef } { ...provided.droppableProps }>
                { bookmarks.map((bookmark, index) => (
                  <Bookmark
                    key={ index }
                    index={ index }
                    id={ bookmark.id }
                    categoryId={ id }
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
        { editMode && <ButtonSmallMedium
          className="category__button"
          onClick={ () => { openModal('AddBookmark', {
            categoryId: id
          }); } }>
          { 'Add ' }<b>{ 'bookmark' }</b>
        </ButtonSmallMedium> }
      </section>
    );
  }
}

Category.propTypes = {
  name: PropTypes.string.isRequired,
  color: PropTypes.number.isRequired,
  open: PropTypes.bool,
  id: PropTypes.number.isRequired,
  bookmarks: PropTypes.array,
  openModal: PropTypes.func.isRequired
};

Category.defaultProps = {
  open: true,
  bookmarks: []
};
