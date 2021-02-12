import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { injectIntl } from 'react-intl';

import Base from '../Base';
import CustomizeComponent from '../../../organisms/customize';

class Customize extends Component {
  render() {
    const { intl, ...props } = this.props;

    return (
      <Base
        headline={intl.formatMessage({ id: 'customize.title' })}
        noCancel
        {...props}
      >
        <CustomizeComponent />
      </Base>
    );
  }
}

export default injectIntl(Customize);

Customize.propTypes = {
  onClose: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired,
  intl: PropTypes.object.isRequired,
  pending: PropTypes.bool
};
