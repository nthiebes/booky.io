import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Base from '../Base';
import Input from '../../../atoms/input';
import ColorPicker from '../../../molecules/color-picker';

export default class AddCategory extends Component {
  constructor(props) {
    super(props);

    this.onNameChange = this.onNameChange.bind(this);
    this.onColorChange = this.onColorChange.bind(this);
    this.state = {
      name: '',
      color: 0
    };
  }

  componentWillReceiveProps() {
    this.setState({
      name: '',
      color: 0
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
      <Base onClose={ onClose } onSave={ () => { onSave(this.state); } } headline="Add a category">
        <label className="modal__label" htmlFor="category-name">{ 'Name:' }</label>
        <Input id="category-name" color="primary" value={ name } onChange={ this.onNameChange } required maxLength="50" />
        <label className="modal__label" htmlFor="color">{ 'Color:' }</label>
        <ColorPicker value={ color } onChange={ this.onColorChange } />
      </Base>
    );
  }
}

AddCategory.propTypes = {
  onClose: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired
};
