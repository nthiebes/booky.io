import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage, injectIntl } from 'react-intl';

import Base from '../Base';
import Input from '../../../atoms/input';
import Expandable from '../../../molecules/expandable';
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
    autofillBookmarkNames: PropTypes.bool,
    enableNotes: PropTypes.bool.isRequired
  }

  state = {
    name: this.props.data.name,
    url: this.props.data.url,
    note: this.props.data.note,
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

  onNoteChange = (value) => {
    this.setState({
      note: value
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
          name: this.state.name || title,
          bookmarkTitlePending: false
        });
      },
      onError: () => {
        // Host of a link
        const match = value.match(/(?:[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?\.)+[a-z0-9][a-z0-9-]{0,61}[a-z0-9]/i);

        this.setState({
          name: this.state.name || (match ? match[0] : value),
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
    const { intl, pending, data, enableNotes, ...props } = this.props;
    const { name, url, note, bookmarkTitlePending } = this.state;

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
          placeholder={ intl.formatMessage({id: 'modal.urlPlaceholder'}) }
        />
        <Input
          id="bookmark-name"
          name="name"
          value={ name }
          onChange={ this.onNameChange }
          required
          maxLength="200"
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
        { enableNotes && (
          <Expandable notBold headline={ <FormattedMessage id="modal.note" /> } className="modal__note">
            <Input
              name="note"
              value={ note }
              onChange={ this.onNoteChange }
              maxLength="100"
              disabled={ pending }
            />
          </Expandable>
        ) }
      </Base>
    );
  }
}

export default injectIntl(EditBookmark);
