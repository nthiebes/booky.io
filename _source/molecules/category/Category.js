import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Bookmark from '../bookmark';
import Icon from '../../atoms/icon';

export default class Category extends Component {
  constructor(props) {
    super(props);

    this.toggleCategory = this.toggleCategory.bind(this);
    this.state = {
      open: props.open
    };
  }

  toggleCategory() {
    this.setState({
      open: !this.state.open
    });
  }

  render() {
    const { name } = this.props;
    const { open } = this.state;

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
          <Icon icon="edit-mode" />
          <Icon className="category__icon category__icon--edit-mode" icon="edit" title="Edit category" />
          <Icon className="category__icon category__icon--edit-mode" icon="delete" title="Delete category" />
          <Icon className="category__icon category__icon--edit-mode category__icon--drag" icon="drag" title="Drag category" />
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
