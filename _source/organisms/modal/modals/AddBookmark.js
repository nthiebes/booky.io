import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { injectIntl } from 'react-intl';

import Base from '../Base';
import Input from '../../../atoms/input';
import Select from '../../../atoms/select';
import { abortFetch } from '../../../_utils/fetcher';
import { parseBookmarkUrl } from '../../../_utils/url';

class AddBookmark extends PureComponent {
  static propTypes = {
    onClose: PropTypes.func.isRequired,
    onSave: PropTypes.func.isRequired,
    data: PropTypes.object,
    intl: PropTypes.object.isRequired,
    pending: PropTypes.bool,
    darkMode: PropTypes.bool,
    getTitle: PropTypes.func.isRequired,
    autofillBookmarkNames: PropTypes.bool
  }

  state = {
    name: '',
    url: '',
    bookmarkTitlePending: false,
    categoryId: this.props.data.source === 'header' ? this.props.data.categories[0].id : this.props.data.categoryId
  }

  onNameChange = (value) => {
    this.setState({
      name: value
    });
  }

  onUrlChange = (value) => {
    this.setState({
      url: value
    });
  }

  onUrlBlur = (value) => {
    const { getTitle, autofillBookmarkNames } = this.props;
    const { name } = this.state;

    if (!autofillBookmarkNames || !value || name) { return; }

    this.setState({
      bookmarkTitlePending: true
    });

    getTitle({
      url: parseBookmarkUrl(value, { protocol: 'https' }),
      onSuccess: (title) => {
        this.setState({
          name: title,
          bookmarkTitlePending: false
        });
      },
      onError: () => {
        this.setState({
          name: value,
          bookmarkTitlePending: false
        });
      }
    });
  }

  onCategoryChange = (id) => {
    this.setState({
      categoryId: id
    });
  }

  handleClose = () => {
    const { onClose } = this.props;

    abortFetch();
    onClose();
  }

  render() {
    const { data, intl, pending, ...props } = this.props;
    const { name, url, bookmarkTitlePending } = this.state;

    return (
      <Base
        { ...props }
        onClose={ this.handleClose }
        pending={ pending }
        headline={ intl.formatMessage({ id: 'modal.addBookmark' }) }
        useAnchor={ false }
      >
        <Input
          id="bookmark-url"
          name="url"
          value={ url }
          onChange={ this.onUrlChange }
          onBlur={ this.onUrlBlur }
          required
          maxLength="2000"
          label={ intl.formatMessage({ id: 'modal.url' }) }
          disabled={ pending }
          // eslint-disable-next-line jsx-a11y/no-autofocus
          autoFocus
          inputMode="url"
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
          pending={ bookmarkTitlePending }
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
