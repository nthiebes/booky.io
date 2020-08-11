import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { injectIntl } from 'react-intl';

import Base from '../Base';
import Input from '../../../atoms/input';
import { abortFetch } from '../../../_utils/fetcher';
import { parseBookmarkUrl } from '../../../_utils/url';

class EditBookmark extends PureComponent {
  static propTypes = {
    onClose: PropTypes.func.isRequired,
    onSave: PropTypes.func.isRequired,
    data: PropTypes.object.isRequired,
    intl: PropTypes.object.isRequired,
    pending: PropTypes.bool,
    darkMode: PropTypes.bool,
    getTitle: PropTypes.func.isRequired,
    autofillBookmarkNames: PropTypes.bool
  }

  state = {
    name: this.props.data.name,
    url: this.props.data.url,
    bookmarkTitlePending: false
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
          bookmarkTitlePending: false
        });
      }
    });
  }

  handleClose = () => {
    const { onClose } = this.props;

    abortFetch();
    onClose();
  }

  render() {
    const { intl, pending, data, ...props } = this.props;
    const { name, url, bookmarkTitlePending } = this.state;

    return (
      <Base
        { ...props }
        onClose={ this.handleClose }
        pending={ pending }
        headline={ intl.formatMessage({ id: 'modal.editBookmark' }) }
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
        <Input
          name="id"
          value={ data.id.toString() }
          type="hidden"
        />
        <Input
          name="categoryId"
          value={ data.categoryId.toString() }
          type="hidden"
        />
      </Base>
    );
  }
}

export default injectIntl(EditBookmark);
