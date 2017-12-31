import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Base from '../Base';
import Input from '../../../atoms/input';
import ColorPicker from '../../../molecules/color-picker';

export default class EditCategory extends Component {
  constructor(props) {
    super(props);

    this.onNameChange = this.onNameChange.bind(this);
    this.onColorChange = this.onColorChange.bind(this);
    this.state = {
      id: props.data.id,
      name: props.data.name,
      color: props.data.color
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      id: nextProps.data.id,
      name: nextProps.data.name,
      color: nextProps.data.color
    });
  }

  onNameChange(value) {
    this.setState({
      name: value
    });
  }

  onColorChange(value) {
    this.setState({
      color: value
    });
  }

  render() {
    const { onClose, onSave } = this.props;
    const { name, color } = this.state;

    return (
      <Base onClose={ onClose } onSave={ () => { onSave(this.state); } } headline="Edit category">
        <label className="modal__label" htmlFor="category-name">{ 'Name:' }</label>
        <Input id="category-name" color="primary" value={ name } onChange={ this.onNameChange } required maxLength="50" />
        <label className="modal__label" htmlFor="color">{ 'Color:' }</label>
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
