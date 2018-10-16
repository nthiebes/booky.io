import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { injectIntl } from 'react-intl';

import Base from '../Base';
import StructureComponent from '../../../organisms/structure';

class EditStructure extends Component {
  render() {
    const { onClose, onSave, intl, pending } = this.props;

    return (
      <Base
        onClose={ onClose }
        onSave={ onSave }
        pending={ pending }
        headline={ intl.formatMessage({ id: 'structure.title' }) }
        hasAnchor
        noCancel
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
