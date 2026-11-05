import React, { PureComponent } from 'react';
import { FormattedMessage } from 'react-intl';

import Empty from '../../molecules/empty';
import { ErrorMessage } from '../../atoms/messages';
import Icon from '../../atoms/icon';
import { ButtonSmallMedium, ButtonSmallLight } from '../../atoms/button';
import P from '../../atoms/paragraph';
import SearchResults from '../search/SearchResults';
import SearchSkeleton from '../search/SearchSkeleton';

export default class Duplicates extends PureComponent {
  state = {
    editMode: false
  };

  toggleEditMode = () => {
    this.setState({
      editMode: !this.state.editMode
    });
  };

  handleDashboardClick = (dashboardId) => () => {
    const { changeDashboard, history } = this.props;

    // Home loads the default collection when it mounts, so it has to be saved first
    changeDashboard(dashboardId, {
      onSuccess: () => {
        window.scrollTo(0, 0);
        history.push('/');
      }
    });
  };

  render() {
    const { groups, total, pending, error, darkMode, loadMoreDuplicates } =
      this.props;
    const LoadMoreButton = darkMode ? ButtonSmallLight : ButtonSmallMedium;

    if (error) {
      return <ErrorMessage hasIcon noAnimation />;
    }

    if (pending && !groups.length) {
      return (
        <section className="duplicates">
          <SearchSkeleton />;
        </section>
      );
    }

    if (!total) {
      return (
        <Empty illustration="search">
          <FormattedMessage id="duplicates.empty" />
        </Empty>
      );
    }

    return (
      <section className="duplicates">
        <P noPadding>
          <FormattedMessage
            id="duplicates.results"
            values={{
              results: <b className="search__keyword">{total}</b>,
              count: total
            }}
          />
        </P>
        {groups.map(({ url, dashboards }) => (
          <div className="duplicates__group" key={url}>
            <P noPadding className="duplicates__url">
              {url}
            </P>
            <SearchResults
              dashboards={dashboards}
              darkMode={darkMode}
              editMode={this.state.editMode}
              onDashboardClick={this.handleDashboardClick}
              onToggleEditMode={this.toggleEditMode}
            />
          </div>
        ))}
        <div className="search__load-more-wrapper">
          {pending && <Icon icon="spinner" className="search__spinner" />}
          {total > groups.length && !pending && (
            <LoadMoreButton
              className="search__load-more"
              onClick={loadMoreDuplicates}
            >
              <FormattedMessage
                id="search.loadMore"
                values={{ b: (msg) => <b>{msg}</b> }}
              />
            </LoadMoreButton>
          )}
        </div>
      </section>
    );
  }
}
