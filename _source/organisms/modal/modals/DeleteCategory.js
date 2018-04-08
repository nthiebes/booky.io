import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage, injectIntl } from 'react-intl';

import Base from '../Base';
import Label from '../../../atoms/label';
import Dropdown from '../../../molecules/dropdown';

class DeleteCategory extends Component {
  constructor(props) {
    super(props);

    this.onChange = this.onChange.bind(this);
    this.state = {
      id: props.data.id,
      newId: null,
      value: 0
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      id: nextProps.data.id,
      newId: null,
      value: 0
    });
  }

  onChange(index) {
    this.setState({
      newId: index === 0 ? null : this.props.data.categories[index - 1].id,
      value: index
    });
  }

  render() {
    const { data, onClose, onSave, intl } = this.props;
    const options = [{name: 'Delete all'}, ...data.categories.map(({name}) => ({
      name: `Move to: ${name}`
    }))];

    return (
      <Base onClose={ onClose } onSave={ () => { onSave(this.state); } } headline={ intl.formatMessage({ id: 'modal.deleteCategory' }) }>
        <Label>
          <div><FormattedMessage id="modal.deleteCategoryLabel" /></div>
          <b>{ data.name }</b>
        </Label>
        <Dropdown
          label={ intl.formatMessage({ id: 'modal.deleteCategoryFuture' }) }
          options={ options }
          onChange={ this.onChange }
          value={ this.state.value }
        />
      </Base>
    );
  }
}

export default injectIntl(DeleteCategory);

DeleteCategory.propTypes = {
  onClose: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired,
  data: PropTypes.object.isRequired,
  intl: PropTypes.object.isRequired
};
