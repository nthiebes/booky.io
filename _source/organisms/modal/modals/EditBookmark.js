import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { injectIntl } from 'react-intl';

import Base from '../Base';
import Input from '../../../atoms/input';

class EditBookmark extends Component {
  constructor(props) {
    super(props);

    this.onNameChange = this.onNameChange.bind(this);
    this.onUrlChange = this.onUrlChange.bind(this);
    this.state = {
      name: props.data.name,
      url: props.data.url
    };
  }

  onNameChange(value) {
    this.setState({
      name: value
    });
  }

  onUrlChange(value) {
    this.setState({
      url: value
    });
  }

  render() {
    const { onClose, onSave, intl, pending, data } = this.props;
    const { name, url } = this.state;

    return (
      <Base onClose={ onClose } onSave={ onSave } pending={ pending } headline={ intl.formatMessage({ id: 'modal.editBookmark' }) } hasAnchor>
        <Input
          id="bookmark-url"
          name="url"
          color="primary"
          value={ url }
          onChange={ this.onUrlChange }
          type="url"
          required
          maxLength="2000"
          label={ intl.formatMessage({ id: 'modal.url' }) }
          disabled={ pending }
        />
        <Input
          id="bookmark-name"
          name="name"
          color="primary"
          value={ name }
          onChange={ this.onNameChange }
          required
          maxLength="80"
          label={ intl.formatMessage({ id: 'modal.name' }) }
          disabled={ pending }
        />
        <Input
          name="id"
          value={ data.id }
          type="hidden"
        />
        <Input
          name="categoryId"
          value={ data.categoryId }
          type="hidden"
        />
      </Base>
    );
  }
}

export default injectIntl(EditBookmark);

EditBookmark.propTypes = {
  onClose: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired,
  data: PropTypes.object.isRequired,
  intl: PropTypes.object.isRequired,
  pending: PropTypes.bool
};
