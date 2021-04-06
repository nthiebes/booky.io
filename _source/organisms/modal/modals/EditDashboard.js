import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { injectIntl } from 'react-intl';

import Base from '../Base';
import Input from '../../../atoms/input';
import CategoriesSorting from '../../categories-sorting';

class EditDashboard extends Component {
  static propTypes = {
    onClose: PropTypes.func.isRequired,
    onSave: PropTypes.func.isRequired,
    data: PropTypes.object.isRequired,
    intl: PropTypes.object.isRequired,
    pending: PropTypes.bool,
    darkMode: PropTypes.bool
  };

  state = {
    name: this.props.data.name
  };

  onNameChange = (value) => {
    this.setState({
      name: value
    });
  };

  render() {
    const { intl, data, pending, ...props } = this.props;
    const { name } = this.state;

    return (
      <Base
        {...props}
        pending={pending}
        headline={intl.formatMessage({ id: 'modal.editDashboard' })}
      >
        <Input
          id="dashboard-name"
          name="name"
          color="primary"
          value={name}
          onChange={this.onNameChange}
          required
          maxLength="200"
          label={intl.formatMessage({ id: 'modal.name' })}
          disabled={pending}
        />
        <Input name="id" value={data.id.toString()} type="hidden" />
        <CategoriesSorting dashboardId={data.id} dashboardName={name} />
      </Base>
    );
  }
}

export default injectIntl(EditDashboard);
