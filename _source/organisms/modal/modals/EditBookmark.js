import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Base from '../Base';
import Input from '../../../atoms/input';

export default class EditBookmark extends Component {
  constructor(props) {
    super(props);

    this.onNameChange = this.onNameChange.bind(this);
    this.onUrlChange = this.onUrlChange.bind(this);
    this.state = {
      id: props.data.id,
      name: props.data.name,
      url: props.data.url,
      categoryId: props.data.categoryId
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      id: nextProps.data.id,
      name: nextProps.data.name,
      url: nextProps.data.url,
      categoryId: nextProps.data.categoryId
    });
  }

  onNameChange(value) {
    this.setState({
      name: value
    });
  }

  onUrlChange(value) {
    this.setState({
      url: value
    });
  }

  render() {
    const { onClose, onSave } = this.props;
    const { name, url } = this.state;

    return (
      <Base onClose={ onClose } onSave={ () => { onSave(this.state); } } headline="Edit bookmark">
        <label className="modal__label" htmlFor="bookmark-url">{ 'URL:' }</label>
        <Input id="bookmark-url" color="primary" value={ url } onChange={ this.onUrlChange } type="url" required />
        <label className="modal__label" htmlFor="bookmark-name">{ 'Name:' }</label>
        <Input id="bookmark-name" color="primary" value={ name } onChange={ this.onNameChange } required />
      </Base>
    );
  }
}

EditBookmark.propTypes = {
  onClose: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired,
  data: PropTypes.object.isRequired
};
