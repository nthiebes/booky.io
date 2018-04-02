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
      name: props.data.name,
      valid: true
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      id: nextProps.data.id,
      name: nextProps.data.name,
      valid: true
    });
  }

  onNameChange(value) {
    this.setState({
      name: value,
      valid: Boolean(value)
    });
  }

  render() {
    const { onClose, onSave } = this.props;
    const { name, valid } = this.state;

    return (
      <Base onClose={ onClose } onSave={ () => { onSave(this.state); } } valid={ valid } headline="Edit dashboard">
        <Input id="dashboard-name" color="primary" value={ name } onChange={ this.onNameChange } required maxLength="50" label="Name:" />
      </Base>
    );
  }
}

EditDashboard.propTypes = {
  onClose: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired,
  data: PropTypes.object.isRequired
};
