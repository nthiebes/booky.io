import React, { PropTypes, Component } from 'react';
import Bookmark from '../bookmark';
import Icon from '../../atoms/icon';

/**
 * React component
 *
 * @class Category
 * @classdesc molecules/category/Category
 */
export default class Category extends Component {
  render() {
    const PROPS = this.props;

    return (
      <section className="m-category">
        <header className="m-category__header">
          <Icon className="m-category__icon a-icon--dark" icon="reduce" title="Reduce category" />
          <h1 className="m-category__name">
            <span className="m-category__name-inner">{ PROPS.name }</span>
          </h1>
          <Icon className="m-category__icon m-category__icon--edit-mode a-icon--dark" icon="edit" title="Edit category" />
          <Icon className="m-category__icon m-category__icon--edit-mode a-icon--dark" icon="delete" title="Delete category" />
          <Icon className="m-category__icon m-category__icon--edit-mode a-icon--dark m-category__icon--drag" icon="drag" title="Drag category" />
        </header>
        <ul className="m-category__bookmarks">
          <Bookmark name="Bookmark 1 veeeeeeery こんにちはお元気で loooooong tiiiitle !!!!!!" url="https://booky.io" />
          <Bookmark name="Bookmark مرحبا كيف حال 2" url="https://booky.io" />
          <Bookmark name="Bookmark Привет, как дела 3" url="https://booky.io" />
        </ul>
      </section>
    );
  }
}

Category.propTypes = {
  'name': PropTypes.string.isRequired
};
