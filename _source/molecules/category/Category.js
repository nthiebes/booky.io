import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Droppable } from 'react-beautiful-dnd';
import classNames from 'classnames';
import { FormattedHTMLMessage, injectIntl } from 'react-intl';

import Bookmark from '../bookmark';
import Icon from '../../atoms/icon';
import { H2 } from '../../atoms/headline';
import { ButtonSmallPrimary } from '../../atoms/button';

class Category extends Component {
  constructor(props) {
    super(props);

    this.toggleCategory = this.toggleCategory.bind(this);
    this.toggleEditMode = this.toggleEditMode.bind(this);
    this.onEditClick = this.onEditClick.bind(this);
    this.onDeleteClick = this.onDeleteClick.bind(this);
    this.onAddClick = this.onAddClick.bind(this);
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

  onEditClick() {
    const { name, id, openModal, color } = this.props;

    openModal('EditCategory', {
      name,
      id,
      color
    });
  }

  onDeleteClick() {
    const { name, id, openModal } = this.props;

    openModal('DeleteCategory', {
      name,
      id
    });
  }

  onAddClick() {
    const { id, openModal } = this.props;

    openModal('AddBookmark', {
      categoryId: id
    });
  }

  render() {
    const { name, id, color, bookmarks, intl, darkMode } = this.props;
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
            tabIndex="0"
          />
          <H2 className="category__name" onClick={ this.toggleCategory }>{ name }</H2>
          <Icon
            className="category__icon"
            icon="edit"
            title={ intl.formatMessage({ id: 'category.edit' }) }
            onClick={ this.onEditClick }
            tabIndex={ editMode ? '0' : '-1' }
          />
          <Icon
            className="category__icon"
            icon="delete"
            title={ intl.formatMessage({ id: 'category.delete' }) }
            onClick={ this.onDeleteClick }
            tabIndex={ editMode ? '0' : '-1' }
          />
          <Icon
            icon={ editMode ? 'close' : 'more-horiz' }
            title={ editMode ? intl.formatMessage({ id: 'category.editModeQuit' }) : intl.formatMessage({ id: 'category.editMode' }) }
            onClick={ this.toggleEditMode }
            tabIndex="0"
          />
        </header>
        <ul className={ classNames('category__bookmarks', !open && 'category__bookmarks--hidden') }>
          <Droppable droppableId={ id.toString() } type="bookmark">
            { (provided) => (
              <div className="category__bookmark-drag-wrapper" ref={ provided.innerRef } { ...provided.droppableProps }>
                { open && bookmarks.map((bookmark, index) => (
                  <Bookmark
                    key={ index }
                    index={ index }
                    id={ bookmark.id }
                    categoryId={ id }
                    editMode={ editMode }
                    name={ bookmark.name }
                    url={ bookmark.url }
                    favicon={ bookmark.favicon }
                  />
                )) }
                { open && bookmarks.length === 0 && (
                  <li className={ classNames('category__empty', darkMode && 'category__empty--dark-mode') }>
                    <i><FormattedHTMLMessage id="bookmark.empty" /></i>
                  </li>
                ) }
                { provided.placeholder }
              </div>
            ) }
          </Droppable>
        </ul>
        { open && (
          <ButtonSmallPrimary icon="add" className="category__button" onClick={ this.onAddClick }>
            <FormattedHTMLMessage id="bookmark.add" />
          </ButtonSmallPrimary>
        ) }
      </section>
    );
  }
}

export default injectIntl(Category);

Category.propTypes = {
  name: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  open: PropTypes.bool,
  id: PropTypes.string.isRequired,
  bookmarks: PropTypes.array,
  openModal: PropTypes.func.isRequired,
  intl: PropTypes.object.isRequired,
  darkMode: PropTypes.bool.isRequired
};

Category.defaultProps = {
  open: true,
  bookmarks: []
};
