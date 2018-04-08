import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage, injectIntl } from 'react-intl';

import Base from '../Base';
import Label from '../../../atoms/label';

class DeleteBookmark extends Component {
  render() {
    const { data, onClose, onSave, intl } = this.props;

    return (
      <Base onClose={ onClose } onSave={ () => { onSave({
        id: data.id,
        categoryId: data.categoryId
      }); } } headline={ intl.formatMessage({ id: 'modal.deleteBookmark' }) }>
        <Label>
          <div><FormattedMessage id="modal.deleteBookmarkLabel" /></div>
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
  intl: PropTypes.object.isRequired
};
