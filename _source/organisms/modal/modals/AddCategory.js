import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Base from '../Base';
import Input from '../../../atoms/input';
import Label from '../../../atoms/label';
import ColorPicker from '../../../molecules/color-picker';

export default class AddCategory extends Component {
  constructor(props) {
    super(props);

    this.onNameChange = this.onNameChange.bind(this);
    this.onColorChange = this.onColorChange.bind(this);
    this.state = {
      name: '',
      color: 0,
      valid: false
    };
  }

  componentWillReceiveProps() {
    this.setState({
      name: '',
      color: 0,
      valid: false
    });
  }

  onNameChange(value) {
    this.setState({
      name: value,
      valid: Boolean(value)
    });
  }

  onColorChange(value) {
    this.setState({
      color: value
    });
  }

  render() {
    const { onClose, onSave } = this.props;
    const { name, color, valid } = this.state;

    return (
      <Base onClose={ onClose } onSave={ () => { onSave(this.state); } } valid={ valid } headline="Add a category">
        <Input id="category-name" color="primary" value={ name } onChange={ this.onNameChange } required maxLength="50" label="Name:" />
        <Label>{ 'Color:' }</Label>
        <ColorPicker value={ color } onChange={ this.onColorChange } />
      </Base>
    );
  }
}

AddCategory.propTypes = {
  onClose: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired
};
