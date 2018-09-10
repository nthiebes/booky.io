import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage, injectIntl } from 'react-intl';

import Base from '../Base';
import Input from '../../../atoms/input';
import Label from '../../../atoms/label';
import ColorPicker from '../../../molecules/color-picker';

class EditCategory extends Component {
  constructor(props) {
    super(props);

    this.onNameChange = this.onNameChange.bind(this);
    this.onColorChange = this.onColorChange.bind(this);
    this.state = {
      id: props.data.id,
      name: props.data.name,
      color: props.data.color
    };
  }

  // componentWillReceiveProps(nextProps) {
  //   this.setState({
  //     id: nextProps.data.id,
  //     name: nextProps.data.name,
  //     color: nextProps.data.color
  //   });
  // }

  onNameChange(value) {
    this.setState({
      name: value
    });
  }

  onColorChange(value) {
    this.setState({
      color: value
    });
  }

  render() {
    const { onClose, onSave, intl, pending } = this.props;
    const { name, color } = this.state;

    return (
      <Base onClose={ onClose } onSave={ () => { onSave(this.state); } } pending={ pending } headline={ intl.formatMessage({ id: 'modal.editCategory' }) }>
        <Input
          id="category-name"
          color="primary"
          value={ name }
          onChange={ this.onNameChange }
          required
          maxLength="50"
          label={ intl.formatMessage({ id: 'modal.name' }) }
          disabled={ pending }
        />
        <Label><FormattedMessage id="modal.color" /></Label>
        <ColorPicker value={ color } onChange={ this.onColorChange } disabled={ pending } />
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
  pending: PropTypes.bool
};
