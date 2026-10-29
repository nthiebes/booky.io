import React, { Component } from 'react';
import { FormattedMessage, injectIntl } from 'react-intl';

import { postMessage } from '../../_utils/extension';
import { ButtonLargePrimary } from '../../atoms/button';
import Select from '../../atoms/select';
import Checkbox from '../../atoms/checkbox';
import Input from '../../atoms/input';
import Textarea from '../../atoms/textarea';
import { ErrorMessage } from '../../atoms/messages';
import Icon from '../../atoms/icon';
import { Hr } from '../../atoms/hr';
import Extension from '../../templates/extension';
import Section from '../../molecules/section';
import Expandable from '../../molecules/expandable';
import Form from '../../molecules/form';
import { decodeEmoji } from '../../_utils/string';

class Add extends Component {
  constructor(props) {
    super(props);

    const searchParams = new URL(window.location.href).searchParams;
    const name = props.name || searchParams.get('name') || '';
    const url = props.url || searchParams.get('url') || '';

    this.state = {
      activeCategory: localStorage.getItem('activeCategory') || '',
      pending: false,
      error: null,
      exists: false,
      saveAllTabs: false,
      missingTabsPermission: false,
      existingBookmarks: [],
      isDataOpen: Boolean(
        localStorage.getItem('showData') === 'true' || !name || !url
      ),
      name,
      url,
      note: props.note || searchParams.get('note') || ''
    };
  }

  componentDidMount() {
    this.props.getDashboards();
    this.checkDuplicates(this.state.url);
  }

  componentDidUpdate(prevProps) {
    const { categories, name, url, note } = this.props;

    // if (dashboards.length > prevProps.dashboards.length && prevProps.dashboards.length !== 0) {
    //   changeDashboard(dashboards[dashboards.length - 1].id);
    // }

    if (
      categories.length > prevProps.categories.length &&
      prevProps.categories.length !== 0
    ) {
      const categoryId = categories[categories.length - 1].id;

      this.setState({
        activeCategory: categoryId
      });
      localStorage.setItem('activeCategory', categoryId);
    }

    // The extension sends the page data via postMessage after mounting,
    // so fill the fields that are still empty once it arrives
    if (
      prevProps.name !== name ||
      prevProps.url !== url ||
      prevProps.note !== note
    ) {
      const nextName = this.state.name || name || '';
      const nextUrl = this.state.url || url || '';

      this.setState({
        name: nextName,
        url: nextUrl,
        note: this.state.note || note || '',
        // Don't collapse the section if the user already filled in both fields
        isDataOpen:
          this.state.name && this.state.url
            ? this.state.isDataOpen
            : Boolean(
                localStorage.getItem('showData') === 'true' ||
                !nextName ||
                !nextUrl
              )
      });

      if (nextUrl !== this.state.url) {
        this.checkDuplicates(nextUrl);
      }
    }
  }

  checkDuplicates = (url) => {
    const { getDuplicates, isPremium } = this.props;

    if (!url) {
      this.setState({
        exists: false,
        existingBookmarks: []
      });
      return;
    }

    if (!isPremium) {
      return;
    }

    getDuplicates({
      url: encodeURIComponent(url),
      onSuccess: ({ exists, bookmarks }) => {
        // Ignore responses for a URL that has been changed in the meantime
        if (url !== this.state.url) {
          return;
        }

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
  };

  toggleLocation = () => {
    const showLocation = localStorage.getItem('showLocation') === 'true';

    localStorage.setItem('showLocation', !showLocation);
  };

  toggleData = (event) => {
    // Control the <details> element via state so the duplicate message
    // placement stays in sync with what is actually visible
    event.preventDefault();

    const isDataOpen = !this.state.isDataOpen;

    localStorage.setItem('showData', isDataOpen);
    this.setState({
      isDataOpen
    });
  };

  handleDashboardChange = (value) => {
    this.props.changeDashboard(parseInt(value, 10));
  };

  handleCategoryChange = (value) => {
    localStorage.setItem('activeCategory', value);

    this.setState({
      activeCategory: value
    });
  };

  handleInputChange = (value, name) => {
    this.setState({
      [name]: value,
      pending: false
    });
  };

  onAddCategoryClick = () => {
    this.props.openModal('AddCategory');
  };

  onAddDashboardClick = () => {
    this.props.openModal('AddDashboard');
  };

  onUrlBlur = (value) => {
    this.checkDuplicates(value);
  };

  toggleSaveAllTabs = ({ checked }) => {
    // The extension only sends the tabs if the optional "tabs" permission
    // was granted in its options page, so point there instead
    if (checked && !this.props.tabs) {
      this.setState({
        missingTabsPermission: true
      });
      return;
    }

    this.setState({
      saveAllTabs: checked,
      missingTabsPermission: false,
      error: null
    });
  };

  openExtensionOptions = () => {
    postMessage({
      openOptions: true
    });
  };

  handleDashboardClick = (event, dashboardId) => {
    const { changeDashboard, history } = this.props;

    event.preventDefault();
    this.setState({
      error: null
    });

    // Wait until the new default dashboard is saved, otherwise the Open page
    // would still load the categories of the previous one
    changeDashboard(dashboardId, {
      onSuccess: () => {
        window.scrollTo(0, 0);
        localStorage.setItem('activeTab', 'open');
        postMessage({
          activeTab: 'open'
        });
        history.push(`/extension/open${window.location.search}`);
      },
      onError: (error) => {
        this.setState({
          error
        });
      }
    });
  };

  closeExtension = () => {
    postMessage({
      close: true
    });
    window.close();
  };

  saveAllTabs = (categoryId) => {
    const { addBookmarks, tabs } = this.props;

    addBookmarks({
      bookmarks: tabs.map(({ title, url }) => ({
        categoryId: parseInt(categoryId, 10),
        name: (title || url).slice(0, 200),
        url
      })),
      onSuccess: () => {
        this.setState({
          pending: false
        });
        this.closeExtension();
      },
      onError: (error) => {
        this.setState({
          pending: false,
          error
        });
      }
    });
  };

  handleSubmit = (params) => {
    const { addBookmark } = this.props;

    this.setState({
      pending: true,
      error: null
    });

    if (this.state.saveAllTabs) {
      this.saveAllTabs(params.categoryId);
      return;
    }

    addBookmark({
      ...params,
      onSuccess: () => {
        this.setState({
          pending: false
        });
        this.closeExtension();
      },
      onError: (error) => {
        this.setState({
          pending: false,
          error
        });
      }
    });
  };

  render() {
    const {
      intl,
      enableNotes,
      dashboardsPending,
      categories,
      dashboards,
      activeDashboard
    } = this.props;
    const {
      activeCategory,
      error,
      pending,
      name: stateName,
      url: stateUrl,
      note: stateNote,
      exists,
      existingBookmarks,
      isDataOpen,
      saveAllTabs,
      missingTabsPermission
    } = this.state;
    const duplicateErrorMessage = exists ? 'error.duplicateLink' : null;
    const showLocation = localStorage.getItem('showLocation');
    const showData = localStorage.getItem('showData');
    const dashboardsOptions = dashboardsPending
      ? [
          {
            text: intl.formatMessage({ id: 'extension.loading' }),
            value: ''
          }
        ]
      : dashboards.map(({ name: text, id }) => ({
          text,
          value: id.toString()
        }));
    const categoriesOptions = dashboardsPending
      ? [
          {
            text: intl.formatMessage({ id: 'extension.loading' }),
            value: ''
          }
        ]
      : categories.map(({ name: text, id }) => ({
          text,
          value: id.toString()
        }));

    if (!showLocation) {
      localStorage.setItem('showLocation', true);
    }

    if (!showData) {
      localStorage.setItem('showData', false);
    }

    return (
      <Extension>
        <Section noMargin>
          <Form onSubmit={this.handleSubmit}>
            <ButtonLargePrimary
              className="add__add-button"
              type="submit"
              pending={pending}
              disabled={pending || dashboardsPending}
              icon="add-link"
            >
              <FormattedMessage
                id="extension.addButton"
                values={{ b: (msg) => <b>{msg}</b> }}
              />
            </ButtonLargePrimary>
            <Checkbox
              label={intl.formatMessage({ id: 'extension.saveAllTabs' })}
              id="saveAllTabs"
              name="saveAllTabs"
              onChange={this.toggleSaveAllTabs}
              checked={saveAllTabs}
              disabled={pending}
            />
            {missingTabsPermission && (
              <ErrorMessage
                message="extension.saveAllTabsPermission"
                hasIcon
                noPadding
                values={{
                  options: (msg) => (
                    <button
                      type="button"
                      className="link link--error"
                      onClick={this.openExtensionOptions}
                    >
                      <b>{msg}</b>
                    </button>
                  )
                }}
              />
            )}
            {error && <ErrorMessage message={error} hasIcon noPadding />}
            {!saveAllTabs &&
            exists &&
            !isDataOpen &&
            existingBookmarks.length > 0 ? (
              <ErrorMessage
                message={duplicateErrorMessage}
                hasIcon
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
            <Hr />
            <Expandable
              headline={<FormattedMessage id="extension.location" />}
              className="add__section"
              open={localStorage.getItem('showLocation') === 'true'}
              onClick={this.toggleLocation}
            >
              <>
                <span className="add__location-wrapper">
                  <Select
                    id="collection"
                    label={intl.formatMessage({
                      id: 'modal.editCategoryDashboard'
                    })}
                    options={dashboardsOptions}
                    required
                    onChange={this.handleDashboardChange}
                    value={activeDashboard}
                    disabled={dashboardsPending || pending}
                    name="dashboardId"
                  />
                  <Icon
                    icon="add-collection"
                    label={intl.formatMessage({ id: 'modal.addDashboard' })}
                    onClick={this.onAddDashboardClick}
                    useSkeleton={dashboardsPending}
                    isButton
                    tooltipDirection="left"
                  />
                </span>
                <span className="add__location-wrapper">
                  <Select
                    id="category"
                    label={intl.formatMessage({ id: 'modal.category' })}
                    options={categoriesOptions}
                    required
                    onChange={this.handleCategoryChange}
                    value={activeCategory}
                    disabled={dashboardsPending || pending}
                    name="categoryId"
                  />
                  <Icon
                    icon="add-category"
                    label={intl.formatMessage({ id: 'modal.addCategory' })}
                    onClick={this.onAddCategoryClick}
                    useSkeleton={dashboardsPending}
                    isButton
                    tooltipDirection="left"
                  />
                </span>
              </>
            </Expandable>
            {saveAllTabs ? null : (
              <Expandable
                headline={<FormattedMessage id="extension.data" />}
                className="add__section"
                open={isDataOpen}
                onClick={this.toggleData}
              >
                <>
                  <Input
                    id="bookmark-name"
                    name="name"
                    value={stateName}
                    onChange={this.handleInputChange}
                    required
                    maxLength="200"
                    label={intl.formatMessage({ id: 'modal.name' })}
                    disabled={pending}
                  />
                  <Input
                    id="bookmark-url"
                    name="url"
                    value={stateUrl}
                    onChange={this.handleInputChange}
                    required
                    maxLength="2000"
                    label={intl.formatMessage({ id: 'modal.url' })}
                    disabled={pending}
                    inputMode="url"
                    placeholder={intl.formatMessage({
                      id: 'modal.urlPlaceholder'
                    })}
                    onBlur={this.onUrlBlur}
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
                            <b>
                              {decodeEmoji(existingBookmarks[0].dashboardName)}
                            </b>
                          </button>
                        ),
                        category: decodeEmoji(existingBookmarks[0].categoryName)
                      }}
                    />
                  ) : null}
                  {enableNotes && (
                    <Textarea
                      id="bookmark-note"
                      name="note"
                      value={stateNote}
                      onChange={this.handleInputChange}
                      maxLength="300"
                      label={intl.formatMessage({ id: 'modal.note' })}
                      disabled={pending}
                      rows={3}
                    />
                  )}
                </>
              </Expandable>
            )}
          </Form>
        </Section>
      </Extension>
    );
  }
}

export default injectIntl(Add);
