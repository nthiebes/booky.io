import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { injectIntl } from 'react-intl';

import Base from '../Base';
import Input from '../../../atoms/input';
import Select from '../../../atoms/select';

class AddBookmark extends Component {
  constructor(props) {
    super(props);

    this.onNameChange = this.onNameChange.bind(this);
    this.onUrlChange = this.onUrlChange.bind(this);
    this.onCategoryChange = this.onCategoryChange.bind(this);
    this.state = {
      name: '',
      url: '',
      categoryId: props.data.source === 'header' ? props.data.categories[0].id : props.data.categoryId
    };
  }

  // componentWillReceiveProps(nextProps) {
  //   this.setState({
  //     name: '',
  //     url: '',
  //     categoryId: nextProps.data.source === 'header' ? nextProps.data.categories[0].id : nextProps.data.categoryId,
  //     value: 0
  //   });
  // }

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

  onCategoryChange(id) {
    this.setState({
      categoryId: id
    });
  }

  render() {
    const { onClose, onSave, data, intl, pending } = this.props;
    const { name, url } = this.state;

    return (
      <Base onClose={ onClose } onSave={ onSave } pending={ pending } headline={ intl.formatMessage({ id: 'modal.addBookmark' }) }>
        <Input
          id="bookmark-url"
          name="url"
          value={ url }
          onChange={ this.onUrlChange }
          required
          maxLength="2000"
          label={ intl.formatMessage({ id: 'modal.url' }) }
          disabled={ pending }
          autoFocus
        />
        <Input
          id="bookmark-name"
          name="name"
          value={ name }
          onChange={ this.onNameChange }
          required
          maxLength="80"
          label={ intl.formatMessage({ id: 'modal.name' }) }
          disabled={ pending }
        />
        { data.source === 'header' ? (
          <Select
            id="bookmark-category"
            name="categoryId"
            options={ data.categories.map(({ id, name: categoryName }) => ({
              text: categoryName,
              value: id
            })) }
            onChange={ this.onCategoryChange }
            selected="0"
            label={ intl.formatMessage({ id: 'modal.category' }) }
            disabled={ pending }
          />
        ) : (
          <Input
            name="categoryId"
            value={ data.categoryId.toString() }
            type="hidden"
          />
        ) }
      </Base>
    );
  }
}

export default injectIntl(AddBookmark);

AddBookmark.propTypes = {
  onClose: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired,
  data: PropTypes.object,
  intl: PropTypes.object.isRequired,
  pending: PropTypes.bool
};
