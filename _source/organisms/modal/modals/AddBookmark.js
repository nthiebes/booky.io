import React, { PureComponent } from 'react';
import { FormattedMessage, injectIntl } from 'react-intl';

import Base from '../Base';
import Input from '../../../atoms/input';
import Textarea from '../../../atoms/textarea';
import Select from '../../../atoms/select';
import { ErrorMessage } from '../../../atoms/messages';
import Expandable from '../../../molecules/expandable';
import { abortFetch } from '../../../_utils/fetcher';
import { parseBookmarkUrl } from '../../../_utils/url';
import { decodeEmoji } from '../../../_utils/string';

class AddBookmark extends PureComponent {
  state = {
    name: '',
    url: '',
    note: '',
    exists: false,
    existingBookmarks: [],
    bookmarkTitlePending: false,
    categoryId:
      this.props.data.source === 'header'
        ? this.props.data.categories[0].id
        : this.props.data.categoryId
  };

  onNameChange = (value) => {
    this.setState({
      name: value
    });
  };

  onUrlChange = (value) => {
    this.setState({
      url: value
    });
  };

  onNoteChange = (value) => {
    this.setState({
      note: value
    });
  };

  onUrlBlur = (value) => {
    const { getTitle, getDuplicates, autofillBookmarkNames, isPremium } =
      this.props;
    const { name } = this.state;

    if (!value) {
      this.setState({
        exists: false,
        existingBookmarks: []
      });
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

    if (isPremium) {
      getDuplicates({
        url: encodeURIComponent(this.state.url),
        onSuccess: ({ exists, bookmarks }) => {
          this.setState({
            exists,
            existingBookmarks: bookmarks
          });
        },
        onError: () => {
          this.setState({
            exists: false,
            existingBookmarks: []
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

    abortFetch();
    onClose();
  };

  render() {
    const { data, intl, pending, enableNotes, ...props } = this.props;
    const { name, url, note, bookmarkTitlePending, exists, existingBookmarks } =
      this.state;
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
