import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage, injectIntl } from 'react-intl';

import Base from '../Base';
import Input from '../../../atoms/input';
import Label from '../../../atoms/label';
import ColorPicker from '../../../molecules/color-picker';

class AddCategory extends Component {
  constructor(props) {
    super(props);

    this.onNameChange = this.onNameChange.bind(this);
    this.onColorChange = this.onColorChange.bind(this);
    this.state = {
      name: '',
      color: 0
    };
  }

  // componentWillReceiveProps() {
  //   this.setState({
  //     name: '',
  //     color: 0
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
      <Base onClose={ onClose } onSave={ () => { onSave(this.state); } } pending={ pending } headline={ intl.formatMessage({ id: 'modal.addCategory' }) }>
        <Input
          id="category-name"
          name="name"
          color="primary"
          value={ name }
          onChange={ this.onNameChange }
          required
          maxLength="50"
          label={ intl.formatMessage({ id: 'modal.name' }) }
          disabled={ pending }
        />
        <Label><FormattedMessage id="modal.color" /></Label>
        <ColorPicker value={ color } onChange={ this.onColorChange } />
      </Base>
    );
  }
}

export default injectIntl(AddCategory);

AddCategory.propTypes = {
  onClose: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired,
  intl: PropTypes.object.isRequired,
  pending: PropTypes.bool
};
