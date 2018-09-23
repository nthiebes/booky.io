import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage, injectIntl } from 'react-intl';

import Base from '../Base';
import Label from '../../../atoms/label';

class DeleteBookmark extends Component {
  render() {
    const { data, onClose, onSave, intl, pending } = this.props;

    return (
      <Base
        onClose={ onClose }
        onSave={ () => { onSave({
          id: data.id,
          categoryId: data.categoryId
        }); } }
        pending={ pending }
        headline={ intl.formatMessage({ id: 'modal.deleteBookmark' }) }
        hasAnchor
      >
        <Label>
          <FormattedMessage id="modal.deleteBookmarkLabel" /><br />
          <b>{ data.name }</b>
        </Label>
      </Base>
    );
  }
}

export default injectIntl(DeleteBookmark);

DeleteBookmark.propTypes = {
  onClose: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired,
  data: PropTypes.object.isRequired,
  intl: PropTypes.object.isRequired,
  pending: PropTypes.bool
};
