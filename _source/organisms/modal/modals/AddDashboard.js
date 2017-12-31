import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Base from '../Base';
import Input from '../../../atoms/input';

export default class AddDashboard extends Component {
  constructor(props) {
    super(props);

    this.onNameChange = this.onNameChange.bind(this);
    this.state = {
      name: ''
    };
  }

  componentWillReceiveProps() {
    this.setState({
      name: ''
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
      <Base onClose={ onClose } onSave={ () => { onSave(this.state); } } headline="Add a dashboard">
        <label className="modal__label" htmlFor="dashboard-name">{ 'Name:' }</label>
        <Input id="dashboard-name" color="primary" value={ name } onChange={ this.onNameChange } required maxLength="50" />
      </Base>
    );
  }
}

AddDashboard.propTypes = {
  onClose: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired
};
