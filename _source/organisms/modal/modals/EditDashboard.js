import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Base from '../Base';
import Input from '../../../atoms/input';

export default class EditDashboard extends Component {
  constructor(props) {
    super(props);

    this.onNameChange = this.onNameChange.bind(this);
    this.state = {
      id: props.data.id,
      name: props.data.name
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      id: nextProps.data.id,
      name: nextProps.data.name
    });
  }

  onNameChange(value) {
    this.setState({
      name: value
    });
  }

  render() {
    const { onClose, onSave } = this.props;
    const { name } = this.state;

    return (
      <Base onClose={ onClose } onSave={ () => { onSave(this.state); } } headline="Edit dashboard">
        <label className="modal__label" htmlFor="dashboard-name">{ 'Name:' }</label>
        <Input id="dashboard-name" color="primary" value={ name } onChange={ this.onNameChange } required maxLength="50" />
      </Base>
    );
  }
}

EditDashboard.propTypes = {
  onClose: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired,
  data: PropTypes.object.isRequired
};
