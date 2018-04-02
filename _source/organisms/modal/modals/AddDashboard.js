import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Base from '../Base';
import Input from '../../../atoms/input';

export default class AddDashboard extends Component {
  constructor(props) {
    super(props);

    this.onNameChange = this.onNameChange.bind(this);
    this.state = {
      name: '',
      valid: false
    };
  }

  componentWillReceiveProps() {
    this.setState({
      name: '',
      valid: false
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
      <Base onClose={ onClose } onSave={ () => { onSave(this.state); } } valid={ valid } headline="Add a dashboard">
        <Input id="dashboard-name" color="primary" value={ name } onChange={ this.onNameChange } required maxLength="50" label="Name:" />
      </Base>
    );
  }
}

AddDashboard.propTypes = {
  onClose: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired
};
