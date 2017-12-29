import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Base from '../Base';
import Input from '../../../atoms/input';

export default class AddBookmark extends Component {
  constructor(props) {
    super(props);

    this.onNameChange = this.onNameChange.bind(this);
    this.onUrlChange = this.onUrlChange.bind(this);
    this.state = {
      name: '',
      url: ''
    };
  }

  componentWillReceiveProps() {
    this.setState({
      name: '',
      url: ''
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
      <Base onClose={ onClose } onSave={ () => { onSave(this.state); } } headline="Add a bookmark">
        <label className="modal__label" htmlFor="bookmark-url">{ 'URL:' }</label>
        <Input id="bookmark-url" color="primary" value={ url } onChange={ this.onUrlChange } type="url" required />
        <label className="modal__label" htmlFor="bookmark-name">{ 'Name:' }</label>
        <Input id="bookmark-name" color="primary" value={ name } onChange={ this.onNameChange } required />
      </Base>
    );
  }
}

AddBookmark.propTypes = {
  onClose: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired
};
