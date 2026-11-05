import React, { PureComponent, Fragment } from 'react';
import { FormattedMessage } from 'react-intl';
import classNames from 'classnames';

import { ErrorMessage } from '../../atoms/messages';
import Icon from '../../atoms/icon';
import { ButtonSmallMedium, ButtonSmallLight } from '../../atoms/button';
import P from '../../atoms/paragraph';
import Empty from '../../molecules/empty';
import SearchResults from './SearchResults';
import SearchSkeleton from './SearchSkeleton';

export default class Search extends PureComponent {
  state = {
    editMode: false
  };

  toggleEditMode = () => {
    this.setState({
      editMode: !this.state.editMode
    });
  };

  getWrapper = (content) => {
    const { hasSidebar, dashboardsOpen, className } = this.props;

    return (
      <section
        className={classNames(
          'search',
          hasSidebar && 'search--sidebar',
          hasSidebar && dashboardsOpen && 'search--shifted',
          className
        )}
      >
        {content}
      </section>
    );
  };

  handleLoadMore = () => {
    const { loadMoreBookmarks, keyword, offset, limit } = this.props;

    loadMoreBookmarks(keyword, { offset: offset + limit });
  };

  handleDashboardClick = (dashboardId) => {
    const { changeDashboard } = this.props;

    return () => {
      window.scrollTo(0, 0);
      changeDashboard(dashboardId);
    };
  };

  handleOnClick = () => {
    if (this.props.isExtension) {
      window.close();
    }
  };

  render() {
    const {
      dashboards,
      total,
      darkMode,
      keyword,
      pending,
      error,
      offset,
      limit
    } = this.props;
    const LoadMoreButton = darkMode ? ButtonSmallLight : ButtonSmallMedium;

    if (error) {
      window.scrollTo(0, 0);
      return this.getWrapper(<ErrorMessage hasIcon noAnimation />);
    }

    if (pending && offset === 0) {
      return this.getWrapper(<SearchSkeleton />);
    }

    if (!total) {
      return this.getWrapper(
        <Empty illustration="search">
          <FormattedMessage
            id="search.empty"
            values={{
              keyword: <b>{keyword}</b>
            }}
          />
        </Empty>
      );
    }

    return this.getWrapper(
      <Fragment>
        <P>
          <FormattedMessage
            id="search.results"
            values={{
              keyword: <b className="search__keyword">{keyword}</b>,
              results: <b className="search__keyword">{total}</b>,
              count: total
            }}
          />
        </P>
        <SearchResults
          dashboards={dashboards}
          darkMode={darkMode}
          editMode={this.state.editMode}
          onDashboardClick={this.handleDashboardClick}
          onToggleEditMode={this.toggleEditMode}
        />
        <div className="search__load-more-wrapper">
          {pending && offset >= limit && (
            <Icon icon="spinner" className="search__spinner" />
          )}
          {total > limit + offset && !pending && (
            <LoadMoreButton
              className="search__load-more"
              onClick={this.handleLoadMore}
            >
              <FormattedMessage
                id="search.loadMore"
                values={{ b: (msg) => <b>{msg}</b> }}
              />
            </LoadMoreButton>
          )}
        </div>
      </Fragment>
    );
  }
}
