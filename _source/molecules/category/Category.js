import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Droppable } from 'react-beautiful-dnd';
import classNames from 'classnames';
import { FormattedHTMLMessage, injectIntl } from 'react-intl';

import Bookmark from '../bookmark';
import Icon from '../../atoms/icon';
import { H2 } from '../../atoms/headline';
import { ButtonSmallMedium } from '../../atoms/button';

class Category extends Component {
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
    const { name, id, color, bookmarks, openModal, intl } = this.props;
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
            title={ open ? intl.formatMessage({ id: 'category.reduce' }) : intl.formatMessage({ id: 'category.expand' }) }
            onClick={ this.toggleCategory }
          />
          <H2 className="category__name" onClick={ this.toggleCategory }>{ name }</H2>
          <Icon
            className="category__icon"
            icon="edit"
            title={ intl.formatMessage({ id: 'category.edit' }) }
            onClick={ () => { openModal('EditCategory', {
              name,
              id,
              color
            }); } }
          />
          <Icon
            className="category__icon"
            icon="delete"
            title={ intl.formatMessage({ id: 'category.delete' }) }
            onClick={ () => { openModal('DeleteCategory', {
              name,
              id
            }); } }
          />
          <Icon
            className={ editMode ? '' : 'category__edit-icon--hide' }
            icon="close"
            title={ intl.formatMessage({ id: 'category.editModeQuit' }) }
            onClick={ this.toggleEditMode }
          />
          <Icon
            className={ editMode ? 'category__edit-icon--hide' : '' }
            icon="more-horiz"
            title={ intl.formatMessage({ id: 'category.editMode' }) }
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
          <FormattedHTMLMessage id="bookmark.add" />
        </ButtonSmallMedium> }
      </section>
    );
  }
}

export default injectIntl(Category);

Category.propTypes = {
  name: PropTypes.string.isRequired,
  color: PropTypes.number.isRequired,
  open: PropTypes.bool,
  id: PropTypes.number.isRequired,
  bookmarks: PropTypes.array,
  openModal: PropTypes.func.isRequired,
  intl: PropTypes.object.isRequired
};

Category.defaultProps = {
  open: true,
  bookmarks: []
};
