import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { injectIntl } from 'react-intl';

import Base from '../Base';
import StructureComponent from '../../../organisms/structure';

class EditStructure extends Component {
  render() {
    const { intl, ...props } = this.props;

    return (
      <Base
        headline={ intl.formatMessage({ id: 'structure.title' }) }
        noCancel
        { ...props }
      >
        <StructureComponent />
      </Base>
    );
  }
}

export default injectIntl(EditStructure);

EditStructure.propTypes = {
  onClose: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired,
  intl: PropTypes.object.isRequired,
  pending: PropTypes.bool
};
