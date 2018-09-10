import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { injectIntl } from 'react-intl';

import Base from '../Base';
import Input from '../../../atoms/input';

class EditDashboard extends Component {
  constructor(props) {
    super(props);

    this.onNameChange = this.onNameChange.bind(this);
    this.state = {
      name: props.data.name
    };
  }

  // componentWillReceiveProps(nextProps) {
  //   this.setState({
  //     id: nextProps.data.id,
  //     name: nextProps.data.name,
  //     valid: true
  //   });
  // }

  onNameChange(value) {
    this.setState({
      name: value
    });
  }

  render() {
    const { onClose, onSave, intl, data, pending } = this.props;
    const { name } = this.state;

    return (
      <Base onClose={ onClose } onSave={ onSave } pending={ pending } headline={ intl.formatMessage({ id: 'modal.editDashboard' }) }>
        <Input
          id="dashboard-name"
          name="name"
          color="primary"
          value={ name }
          onChange={ this.onNameChange }
          required
          maxLength="50"
          label={ intl.formatMessage({ id: 'modal.name' }) }
        />
        <Input
          name="id"
          value={ data.id.toString() }
          type="hidden"
        />
      </Base>
    );
  }
}

export default injectIntl(EditDashboard);

EditDashboard.propTypes = {
  onClose: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired,
  data: PropTypes.object.isRequired,
  intl: PropTypes.object.isRequired,
  pending: PropTypes.bool
};
