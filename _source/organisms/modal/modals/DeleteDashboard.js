import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage, injectIntl } from 'react-intl';

import Base from '../Base';
import P from '../../../atoms/paragraph';
import Select from '../../../atoms/select';

class DeleteDashboard extends Component {
  static propTypes = {
    onClose: PropTypes.func.isRequired,
    onSave: PropTypes.func.isRequired,
    data: PropTypes.object.isRequired,
    intl: PropTypes.object.isRequired,
    pending: PropTypes.bool,
    darkMode: PropTypes.bool
  };

  state = {
    id: this.props.data.id,
    newId: null,
    value: 0
  };

  onChange = (value) => {
    this.setState({
      newId: value === '0' ? null : this.props.data.dashboards[value - 1].id,
      value
    });
  };

  handleSave = () => {
    this.props.onSave(this.state);
  };

  render() {
    const { data, intl, pending, ...props } = this.props;
    const options = [
      {
        text: intl.formatMessage({ id: 'modal.deleteAll' }),
        value: '0'
      },
      ...data.dashboards.map(({ name }, index) => ({
        text: `${intl.formatMessage({ id: 'modal.moveTo' })}: ${name}`,
        value: index + 1
      }))
    ];

    return (
      <Base
        {...props}
        onSave={this.handleSave}
        pending={pending}
        headline={intl.formatMessage({ id: 'modal.deleteDashboard' })}
      >
        <P>
          <FormattedMessage id="modal.deleteDashboardLabel" />
          <br />
          <b>{data.name}</b>
        </P>
        {/* Hide only empty active collections */}
        {(data.categories.length > 0 || data.activeDashboard !== data.id) && (
          <Select
            id="dashboard-delete"
            label={intl.formatMessage({ id: 'modal.deleteDashboardFuture' })}
            options={options}
            onChange={this.onChange}
            selected="0"
            disabled={pending}
          />
        )}
      </Base>
    );
  }
}

export default injectIntl(DeleteDashboard);
