import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Base from '../Base';
import Input from '../../../atoms/input';
import Dropdown from '../../../molecules/dropdown';

export default class AddBookmark extends Component {
  constructor(props) {
    super(props);

    this.onNameChange = this.onNameChange.bind(this);
    this.onUrlChange = this.onUrlChange.bind(this);
    this.onCategoryChange = this.onCategoryChange.bind(this);
    this.state = {
      name: '',
      url: '',
      categoryId: props.data.source === 'header' ? props.data.categories[0].id : props.data.categoryId,
      value: 0,
      valid: false
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      name: '',
      url: '',
      categoryId: nextProps.data.source === 'header' ? nextProps.data.categories[0].id : nextProps.data.categoryId,
      value: 0,
      valid: false
    });
  }

  onNameChange(value) {
    this.setState({
      name: value,
      valid: Boolean(value && this.state.url)
    });
  }

  onUrlChange(value) {
    this.setState({
      url: value,
      valid: Boolean(value && this.state.name)
    });
  }

  onCategoryChange(index) {
    this.setState({
      categoryId: this.props.data.categories[index].id,
      value: index
    });
  }

  render() {
    const { onClose, onSave, data } = this.props;
    const { name, url, valid } = this.state;

    return (
      <Base onClose={ onClose } onSave={ () => { onSave(this.state); } } valid={ valid } headline="Add a bookmark">
        <label className="modal__label" htmlFor="bookmark-url">{ 'URL:' }</label>
        <Input id="bookmark-url" value={ url } onChange={ this.onUrlChange } required maxLength="2000" />
        <label className="modal__label" htmlFor="bookmark-name">{ 'Name:' }</label>
        <Input id="bookmark-name" value={ name } onChange={ this.onNameChange } required maxLength="80" />
        { data.source === 'header' && [
          <label key="0" className="modal__label">{ 'Category:' }</label>,
          <Dropdown key="1" options={ data.categories } onChange={ this.onCategoryChange } value={ this.state.value } />
        ] }
      </Base>
    );
  }
}

AddBookmark.propTypes = {
  onClose: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired,
  data: PropTypes.object
};

AddBookmark.defaultProps = {
  data: {}
};
