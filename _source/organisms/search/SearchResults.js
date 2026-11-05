import React, { PureComponent } from 'react';
import { injectIntl } from 'react-intl';

import Icon from '../../atoms/icon';
import { H2, H3 } from '../../atoms/headline';
import Bookmark from '../../molecules/bookmark';

class SearchResults extends PureComponent {
  render() {
    const {
      dashboards,
      darkMode,
      editMode,
      onDashboardClick,
      onToggleEditMode,
      intl
    } = this.props;

    return (
      <ul>
        {dashboards.map(
          (
            { id: dashboardId, name: dashboardName, categories },
            dashboardIndex
          ) => (
            <li key={`${dashboardId}-${dashboardIndex}`}>
              <button
                className="search__dashboard"
                onClick={onDashboardClick(dashboardId)}
              >
                <H2 className="search__headline">
                  <Icon icon="collection" color={darkMode ? 'grey' : ''} />
                  {dashboardName}
                </H2>
              </button>
              {categories.map(
                (
                  { id: categoryId, name: categoryName, bookmarks, color },
                  categoryIndex
                ) => (
                  <ul key={`${categoryId}-${categoryIndex}`}>
                    <H3
                      className="search__headline"
                      noMargin={categoryIndex === 0}
                    >
                      <Icon icon="category" color={darkMode ? 'grey' : ''} />
                      {categoryName}
                      <Icon
                        icon={editMode ? 'close' : 'more-horiz'}
                        label={
                          editMode
                            ? intl.formatMessage({
                                id: 'category.editModeQuit'
                              })
                            : intl.formatMessage({ id: 'category.editMode' })
                        }
                        onClick={onToggleEditMode}
                        isButton
                        className="search__edit-mode"
                      />
                    </H3>
                    {bookmarks.map((bookmark, bookmarkIndex) => (
                      <Bookmark
                        className="search__bookmark"
                        key={bookmark.id}
                        index={bookmarkIndex}
                        id={bookmark.id}
                        categoryId={categoryId}
                        editMode={editMode}
                        name={bookmark.name}
                        url={bookmark.url}
                        note={bookmark.note}
                        favicon={bookmark.favicon}
                        onDeleteOrEditClick={onToggleEditMode}
                        isSearch
                        color={color}
                      />
                    ))}
                  </ul>
                )
              )}
            </li>
          )
        )}
      </ul>
    );
  }
}

export default injectIntl(SearchResults);
