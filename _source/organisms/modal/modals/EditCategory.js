import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage, injectIntl } from 'react-intl';

import Base from '../Base';
import Input from '../../../atoms/input';
import Label from '../../../atoms/label';
import Select from '../../../atoms/select';
import ColorPicker from '../../../molecules/color-picker';

class EditCategory extends Component {
  state = {
    name: this.props.data.name,
    color: this.props.data.color,
    dashboardId: this.props.data.activeDashboard
  }

  onNameChange = (value) => {
    this.setState({
      name: value
    });
  }

  onColorChange = (value) => {
    this.setState({
      color: value
    });
  }

  onDashboardChange = (value) => {
    this.setState({
      dashboardId: value
    });
  }

  render() {
    const { intl, pending, data, ...props } = this.props;
    const { name, color } = this.state;
    const options = [
      ...data.dashboards.map(({ id, name: dashboardName }) => ({
        text: dashboardName,
        value: id
      }))
    ];

    return (
      <Base
        { ...props }
        pending={ pending }
        headline={ intl.formatMessage({ id: 'modal.editCategory' }) }
      >
        <Input
          id="category-name"
          name="name"
          color="primary"
          value={ name }
          onChange={ this.onNameChange }
          required
          maxLength="200"
          label={ intl.formatMessage({ id: 'modal.name' }) }
          disabled={ pending }
        />
        <Label>
          <FormattedMessage id="modal.color" />
        </Label>
        <ColorPicker
          value={ color }
          onChange={ this.onColorChange }
          disabled={ pending }
          isLegacy
        />
        <Select
          id="category-dashboard"
          label={ intl.formatMessage({ id: 'modal.editCategoryDashboard' }) }
          options={ options }
          onChange={ this.onDashboardChange }
          selected={ data.activeDashboard.toString() }
          disabled={ pending }
          name="dashboardId"
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

export default injectIntl(EditCategory);

EditCategory.propTypes = {
  onClose: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired,
  data: PropTypes.object.isRequired,
  intl: PropTypes.object.isRequired,
  pending: PropTypes.bool,
  darkMode: PropTypes.bool
};
