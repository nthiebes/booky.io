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

  onNameChange(value) {
    this.setState({
      name: value
    });
  }

  render() {
    const { intl, data, pending, ...props } = this.props;
    const { name } = this.state;

    return (
      <Base { ...props } pending={ pending } headline={ intl.formatMessage({ id: 'modal.editDashboard' }) } hasAnchor>
        <Input
          id="dashboard-name"
          name="name"
          color="primary"
          value={ name }
          onChange={ this.onNameChange }
          required
          maxLength="50"
          label={ intl.formatMessage({ id: 'modal.name' }) }
          disabled={ pending }
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
  pending: PropTypes.bool,
  darkMode: PropTypes.bool
};
