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
      categoryId: props.data.categoryId,
      valid: true
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      id: nextProps.data.id,
      name: nextProps.data.name,
      url: nextProps.data.url,
      categoryId: nextProps.data.categoryId,
      valid: true
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

  render() {
    const { onClose, onSave } = this.props;
    const { name, url, valid } = this.state;

    return (
      <Base onClose={ onClose } onSave={ () => { onSave(this.state); } } valid={ valid } headline="Edit bookmark">
        <Input id="bookmark-url" color="primary" value={ url } onChange={ this.onUrlChange } type="url" required maxLength="2000" label="URL:" />
        <Input id="bookmark-name" color="primary" value={ name } onChange={ this.onNameChange } required maxLength="80" label="Name:" />
      </Base>
    );
  }
}

EditBookmark.propTypes = {
  onClose: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired,
  data: PropTypes.object.isRequired
};
