import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Droppable } from 'react-beautiful-dnd';
import classNames from 'classnames';
import { FormattedMessage, injectIntl } from 'react-intl';

import Bookmark from '../bookmark';
import Icon from '../../atoms/icon';
import { H2 } from '../../atoms/headline';
import { ButtonSmallPrimary } from '../../atoms/button';
import Skeleton from '../../atoms/skeleton';
import { ErrorMessage } from '../../atoms/messages';

class Category extends PureComponent {
  static propTypes = {
    name: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    hidden: PropTypes.bool.isRequired,
    id: PropTypes.number.isRequired,
    bookmarks: PropTypes.array,
    openModal: PropTypes.func.isRequired,
    intl: PropTypes.object.isRequired,
    darkMode: PropTypes.bool.isRequired,
    toggleCategory: PropTypes.func.isRequired,
    pending: PropTypes.bool,
    getBookmarks: PropTypes.func.isRequired,
    noFetch: PropTypes.bool,
    error: PropTypes.string,
    closeEditMode: PropTypes.bool.isRequired,
    minimalBookmarkButton: PropTypes.bool.isRequired
  };
  
  static defaultProps = {
    bookmarks: []
  };

  state = {
    editMode: false
  };

  componentDidMount() {
    const { hidden, id, getBookmarks, noFetch } = this.props;

    if (!hidden && !noFetch) {
      getBookmarks(id);
    }
  }

  toggleCategory = () => {
    const { toggleCategory, hidden, id } = this.props;

    toggleCategory({
      id,
      hidden: !hidden
    });
  }

  toggleEditMode = () => {
    this.setState({
      editMode: !this.state.editMode
    });
  }

  onEditClick = () => {
    const { name, id, openModal, color, closeEditMode } = this.props;

    openModal('EditCategory', {
      name,
      id,
      color
    });

    if (closeEditMode) {
      this.setState({
        editMode: false
      });
    }
  }

  onDeleteClick = () => {
    const { name, id, openModal, closeEditMode } = this.props;

    openModal('DeleteCategory', {
      name,
      id
    });
    
    if (closeEditMode) {
      this.setState({
        editMode: false
      });
    }
  }

  onAddClick = () => {
    const { id, openModal } = this.props;

    openModal('AddBookmark', {
      categoryId: id
    });
  }

  render() {
    const { name, id, color, bookmarks, intl, darkMode, hidden, pending, error, minimalBookmarkButton } = this.props;
    const { editMode } = this.state;
    const headerClassName = classNames(
      'category__header',
      `category__header--${color}`,
      editMode && 'category__header--edit-mode'
    );

    return (
      <li className="category">
        <header className={ headerClassName }>
          <Icon
            className={ classNames('category__toggle-icon', hidden && 'category__toggle-icon--rotate') }
            icon="expand"
            label={ hidden ? intl.formatMessage({ id: 'category.expand' }) : intl.formatMessage({ id: 'category.reduce' }) }
            onClick={ this.toggleCategory }
            isButton
          />
          <H2 style="h3" className="category__name" onClick={ this.toggleCategory } title={ name }>
            { name }
          </H2>
          { editMode && (
            <Fragment>
              <Icon
                icon="edit"
                label={ intl.formatMessage({ id: 'category.edit' }) }
                onClick={ this.onEditClick }
                isButton
              />
              <Icon
                icon="delete"
                label={ intl.formatMessage({ id: 'category.delete' }) }
                onClick={ this.onDeleteClick }
                isButton
              />
            </Fragment>
          ) }
          <Icon
            icon={ editMode ? 'close' : 'more-horiz' }
            label={ editMode ? intl.formatMessage({ id: 'category.editModeQuit' }) : intl.formatMessage({ id: 'category.editMode' }) }
            onClick={ this.toggleEditMode }
            isButton
          />
          { minimalBookmarkButton && (
            <Icon
              icon="add-link"
              label={ intl.formatMessage({ id: 'bookmark.add' }) }
              onClick={ this.onAddClick }
              isButton
            />
          ) }
        </header>
        <Droppable droppableId={ id.toString() } type="bookmark">
          { (provided) => (
            <ul
              className={ classNames('category__bookmarks', hidden && 'category__bookmarks--hidden') }
              ref={ provided.innerRef }
              { ...provided.droppableProps }
            >
              { !hidden && (
                pending ? (
                  <Fragment>
                    <Skeleton className="category__skeleton" />
                    <Skeleton className="category__skeleton" />
                    <Skeleton className="category__skeleton" />
                  </Fragment>
                ) : (
                  <Fragment>
                    { bookmarks.map((bookmark, index) => (
                      <Bookmark
                        key={ bookmark.id }
                        index={ index }
                        id={ bookmark.id }
                        categoryId={ id }
                        editMode={ editMode }
                        name={ bookmark.name }
                        url={ bookmark.url }
                        favicon={ bookmark.favicon }
                        onDeleteOrEditClick={ this.toggleEditMode }
                      />
                    )) }
                    { error && <ErrorMessage message={ error } className="category__error" noAnimation /> }
                  </Fragment>
                )
              ) }
              { !hidden && !pending && bookmarks.length === 0 && !error && (
                <li className={ classNames('category__empty', darkMode && 'category__empty--dark-mode') }>
                  <i><FormattedMessage id="bookmark.empty" values={ { b: (msg) => <b>{msg}</b> } } /></i>
                </li>
              ) }
              { provided.placeholder }
            </ul>
          ) }
        </Droppable>
        { !hidden && !error && !pending && !minimalBookmarkButton && (
          <ButtonSmallPrimary icon="add-link" className="category__button" onClick={ this.onAddClick }>
            <FormattedMessage id="bookmark.add" values={ { b: (msg) => <b>{msg}</b> } } />
          </ButtonSmallPrimary>
        ) }
      </li>
    );
  }
}

export default injectIntl(Category);
