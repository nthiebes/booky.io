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
    const { name, id, color, bookmarks, openModal, intl, darkMode } = this.props;
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
            darkMode={ darkMode }
          />
          <H2 className="category__name" onClick={ this.toggleCategory } darkMode={ darkMode }>{ name }</H2>
          <Icon
            className="category__icon"
            icon="edit"
            title={ intl.formatMessage({ id: 'category.edit' }) }
            onClick={ () => { openModal('EditCategory', {
              name,
              id,
              color
            }); } }
            tabIndex={ editMode ? '0' : '-1' }
            darkMode={ darkMode }
          />
          <Icon
            className="category__icon"
            icon="delete"
            title={ intl.formatMessage({ id: 'category.delete' }) }
            onClick={ () => { openModal('DeleteCategory', {
              name,
              id
            }); } }
            tabIndex={ editMode ? '0' : '-1' }
            darkMode={ darkMode }
          />
          <Icon
            icon={ editMode ? 'close' : 'more-horiz' }
            title={ editMode ? intl.formatMessage({ id: 'category.editModeQuit' }) : intl.formatMessage({ id: 'category.editMode' }) }
            onClick={ this.toggleEditMode }
            tabIndex="0"
            darkMode={ darkMode }
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
                  <li className="category__empty">
                    <i><FormattedHTMLMessage id="bookmark.empty" /></i>
                  </li>
                ) }
                { provided.placeholder }
              </div>
            ) }
          </Droppable>
        </ul>
        { open && (
          <ButtonSmallPrimary
            icon="add"
            className="category__button"
            onClick={ () => { openModal('AddBookmark', {
              categoryId: id
            }); } }
          >
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
