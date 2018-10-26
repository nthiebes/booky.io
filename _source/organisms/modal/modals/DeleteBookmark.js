import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage, injectIntl } from 'react-intl';

import Base from '../Base';
import Label from '../../../atoms/label';

class DeleteBookmark extends Component {
  constructor(props) {
    super(props);

    this.handleSave = this.handleSave.bind(this);
  }

  handleSave() {
    const { data, onSave } = this.props;

    onSave({
      id: data.id,
      categoryId: data.categoryId
    });
  }

  render() {
    const { data, intl, ...props } = this.props;

    return (
      <Base
        { ...props }
        onSave={ this.handleSave }
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
  pending: PropTypes.bool,
  darkMode: PropTypes.bool
};
