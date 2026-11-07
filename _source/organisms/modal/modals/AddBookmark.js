import React, { PureComponent } from 'react';
import { FormattedMessage, injectIntl } from 'react-intl';

import Base from '../Base';
import Input from '../../../atoms/input';
import Textarea from '../../../atoms/textarea';
import Select from '../../../atoms/select';
import { ErrorMessage } from '../../../atoms/messages';
import Expandable from '../../../molecules/expandable';
import { abortFetch, ABORT_KEYS } from '../../../_utils/fetcher';
import { parseBookmarkUrl } from '../../../_utils/url';
import { createDuplicateCheck } from '../../../_utils/duplicate-check';
import { decodeEmoji } from '../../../_utils/string';

class AddBookmark extends PureComponent {
  state = {
    name: '',
    url: '',
    note: '',
    exists: false,
    existingBookmarks: [],
    duplicatePending: false,
    bookmarkTitlePending: false,
    categoryId:
      this.props.data.source === 'header'
        ? this.props.data.categories[0].id
        : this.props.data.categoryId
  };

  componentWillUnmount() {
    this.duplicateCheck.cancel();
  }

  duplicateCheck = createDuplicateCheck({
    getDuplicates: this.props.getDuplicates,
    onChange: (result) => this.setState(result)
  });

  onNameChange = (value) => {
    this.setState({
      name: value
    });
  };

  onUrlChange = (value) => {
    this.setState({
      url: value
    });

    if (this.props.isPremium) {
      this.duplicateCheck.checkDelayed(value);
    }
  };

  onNoteChange = (value) => {
    this.setState({
      note: value
    });
  };

  onUrlBlur = (value) => {
    const { getTitle, autofillBookmarkNames } = this.props;
    const { name } = this.state;

    if (!value) {
      return;
    }

    if (autofillBookmarkNames && !name) {
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
          const match = value.match(
            /(?:[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?\.)+[a-z0-9][a-z0-9-]{0,61}[a-z0-9]/i
          );

          this.setState({
            name: this.state.name || (match ? match[0] : value),
            bookmarkTitlePending: false
          });
        }
      });
    }
  };

  handleDashboardClick = (event, dashboardId) => {
    const { changeDashboard } = this.props;

    event.preventDefault();
    this.handleClose();
    window.scrollTo(0, 0);
    changeDashboard(dashboardId);
  };

  onCategoryChange = (id) => {
    this.setState({
      categoryId: id
    });
  };

  handleClose = () => {
    const { onClose } = this.props;

    this.duplicateCheck.cancel();
    abortFetch(ABORT_KEYS.modal);
    onClose();
  };

  render() {
    const { data, intl, pending, enableNotes, ...props } = this.props;
    const {
      name,
      url,
      note,
      bookmarkTitlePending,
      exists,
      existingBookmarks,
      duplicatePending
    } = this.state;
    const duplicateErrorMessage = exists ? 'error.duplicateLink' : null;

    return (
      <Base
        {...props}
        onClose={this.handleClose}
        pending={pending}
        headline={intl.formatMessage({ id: 'modal.addBookmark' })}
        useAnchor={false}
      >
        <Input
          id="bookmark-url"
          name="url"
          value={url}
          onChange={this.onUrlChange}
          onBlur={this.onUrlBlur}
          required
          maxLength="2000"
          label={intl.formatMessage({ id: 'modal.url' })}
          disabled={pending}
          pending={duplicatePending}
          // eslint-disable-next-line jsx-a11y/no-autofocus
          autoFocus
          inputMode="url"
          placeholder={intl.formatMessage({ id: 'modal.urlPlaceholder' })}
        />
        {exists && existingBookmarks.length > 0 ? (
          <ErrorMessage
            message={duplicateErrorMessage}
            noPadding
            values={{
              collection: (
                <button
                  type="button"
                  className="link link--error"
                  onClick={(event) => {
                    this.handleDashboardClick(
                      event,
                      existingBookmarks[0].dashboardId
                    );
                  }}
                >
                  <b>{decodeEmoji(existingBookmarks[0].dashboardName)}</b>
                </button>
              ),
              category: decodeEmoji(existingBookmarks[0].categoryName)
            }}
          />
        ) : null}
        <Input
          id="bookmark-name"
          name="name"
          value={name}
          onChange={this.onNameChange}
          required
          maxLength="200"
          label={intl.formatMessage({ id: 'modal.name' })}
          disabled={pending}
          pending={bookmarkTitlePending}
        />
        {data.source === 'header' ? (
          <Select
            id="bookmark-category"
            name="categoryId"
            options={data.categories.map(({ id, name: categoryName }) => ({
              text: categoryName,
              value: id
            }))}
            onChange={this.onCategoryChange}
            selected="0"
            label={intl.formatMessage({ id: 'modal.category' })}
            disabled={pending}
          />
        ) : (
          <Input
            name="categoryId"
            value={data.categoryId.toString()}
            type="hidden"
          />
        )}
        {enableNotes && (
          <Expandable
            notBold
            headline={<FormattedMessage id="modal.note" />}
            className="modal__note"
          >
            <Textarea
              id="bookmark-note"
              name="note"
              value={note}
              onChange={this.onNoteChange}
              maxLength="300"
              disabled={pending}
              rows={3}
            />
          </Expandable>
        )}
      </Base>
    );
  }
}

export default injectIntl(AddBookmark);
