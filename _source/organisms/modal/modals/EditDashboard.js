import React, { Component } from 'react';
import { injectIntl } from 'react-intl';

import Base from '../Base';
import Input from '../../../atoms/input';
import CategoriesSorting from '../../categories-sorting';

class EditDashboard extends Component {
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
