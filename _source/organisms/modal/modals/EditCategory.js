import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Base from '../Base';
import Input from '../../../atoms/input';
import Label from '../../../atoms/label';
import ColorPicker from '../../../molecules/color-picker';

export default class EditCategory extends Component {
  constructor(props) {
    super(props);

    this.onNameChange = this.onNameChange.bind(this);
    this.onColorChange = this.onColorChange.bind(this);
    this.state = {
      id: props.data.id,
      name: props.data.name,
      color: props.data.color,
      valid: true
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      id: nextProps.data.id,
      name: nextProps.data.name,
      color: nextProps.data.color,
      valid: true
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
      color: value,
      valid: Boolean(value)
    });
  }

  render() {
    const { onClose, onSave } = this.props;
    const { name, color, valid } = this.state;

    return (
      <Base onClose={ onClose } onSave={ () => { onSave(this.state); } } valid={ valid } headline="Edit category">
        <Input id="category-name" color="primary" value={ name } onChange={ this.onNameChange } required maxLength="50" label="Name:" />
        <Label>{ 'Color:' }</Label>
        <ColorPicker value={ color } onChange={ this.onColorChange } />
      </Base>
    );
  }
}

EditCategory.propTypes = {
  onClose: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired,
  data: PropTypes.object.isRequired
};
