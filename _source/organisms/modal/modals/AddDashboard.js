import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { injectIntl } from 'react-intl';

import Base from '../Base';
import Input from '../../../atoms/input';

class AddDashboard extends Component {
  static propTypes = {
    onClose: PropTypes.func.isRequired,
    onSave: PropTypes.func.isRequired,
    intl: PropTypes.object.isRequired,
    pending: PropTypes.bool,
    darkMode: PropTypes.bool
  }

  state = {
    name: ''
  }

  onNameChange = (value) => {
    this.setState({
      name: value
    });
  }

  render() {
    const { pending, intl, ...props } = this.props;
    const { name } = this.state;

    return (
      <Base
        { ...props }
        pending={ pending }
        headline={ intl.formatMessage({ id: 'modal.addDashboard' }) }
        useAnchor={ false }
      >
        <Input
          id="dashboard-name"
          name="name"
          color="primary"
          value={ name }
          onChange={ this.onNameChange }
          required
          maxLength="200"
          label={ intl.formatMessage({ id: 'modal.name' }) }
          disabled={ pending }
          // eslint-disable-next-line jsx-a11y/no-autofocus
          autoFocus
        />
      </Base>
    );
  }
}

export default injectIntl(AddDashboard);
