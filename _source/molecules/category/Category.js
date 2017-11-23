import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Bookmark from '../bookmark';
import Icon from '../../atoms/icon';

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
    const { name } = this.props;
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
          <h1 className="category__name" onClick={ this.toggleCategory }>
            <span className="category__name-inner">{ name }</span>
          </h1>
          <Icon className="category__icon" icon="edit" title="Edit category" />
          <Icon className="category__icon" icon="delete" title="Delete category" />
          <Icon className="category__icon category__icon--drag" icon="drag" title="Drag category" />
          <Icon
            className={ editMode ? '' : 'category__edit-icon--hide' }
            icon="view"
            title="View mode"
            onClick={ this.toggleEditMode }
          />
          <Icon
            className={ editMode ? 'category__edit-icon--hide' : '' }
            icon="edit-mode"
            title="Edit mode"
            onClick={ this.toggleEditMode }
          />
        </header>
        <ul className={ classNames('category__bookmarks', !open && 'category__bookmarks--hidden') }>
          <Bookmark editMode={ editMode } name="Bookmark 1 veeeeeeery こんにちはお元気で loooooong tiiiitle !!!!!!" url="https://booky.io" />
          <Bookmark editMode={ editMode } name="Bookmark مرحبا كيف حال 2" url="https://booky.io" />
          <Bookmark editMode={ editMode } name="Bookmark Привет, как дела 3" url="https://booky.io" />
        </ul>
      </section>
    );
  }
}

Category.propTypes = {
  name: PropTypes.string.isRequired,
  open: PropTypes.bool
};

Category.defaultProps = {
  open: true
};
