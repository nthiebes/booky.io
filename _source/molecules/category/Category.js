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
        <header className="category__header">
          <Icon
            icon={ open ? 'expand' : 'reduce' }
            title={ open ? 'Reduce category' : 'Expand category' }
            onClick={ this.toggleCategory }
          />
          <h1 className="category__name" onClick={ this.toggleCategory }>
            <span className="category__name-inner">{ name }</span>
          </h1>
          { editMode ? [
            <Icon key="0" className="category__icon" icon="edit" title="Edit category" />,
            <Icon key="1" className="category__icon" icon="delete" title="Delete category" />,
            <Icon key="2" className="category__icon category__icon--drag" icon="drag" title="Drag category" />,
            <Icon
              key="3"
              icon="view"
              title="View mode"
              onClick={ this.toggleEditMode }
            />
          ] : (
            <Icon
              icon="edit-mode"
              title="Edit mode"
              onClick={ this.toggleEditMode }
            />
          ) }
        </header>
        <ul className={ classNames('category__bookmarks', !open && 'category__bookmarks--hidden') }>
          <Bookmark name="Bookmark 1 veeeeeeery こんにちはお元気で loooooong tiiiitle !!!!!!" url="https://booky.io" />
          <Bookmark name="Bookmark مرحبا كيف حال 2" url="https://booky.io" />
          <Bookmark name="Bookmark Привет, как дела 3" url="https://booky.io" />
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
