import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage, FormattedHTMLMessage } from 'react-intl';
import classNames from 'classnames';

import { ErrorMessage } from '../../atoms/messages';
import Icon from '../../atoms/icon';
import { ButtonSmallMedium } from '../../atoms/button';
import { H2, H3 } from '../../atoms/headline';
import P from '../../atoms/paragraph';
import Empty from '../../molecules/empty';
import SearchSkeleton from './SearchSkeleton';

class Search extends PureComponent {
  static propTypes = {
    keyword: PropTypes.string,
    dashboards: PropTypes.array.isRequired,
    total: PropTypes.number,
    offset: PropTypes.number.isRequired,
    limit: PropTypes.number.isRequired,
    hasSidebar: PropTypes.bool,
    dashboardsOpen: PropTypes.bool,
    darkMode: PropTypes.bool,
    newtab: PropTypes.bool,
    pending: PropTypes.bool,
    error: PropTypes.string,
    searchBookmarks: PropTypes.func.isRequired,
    loadMoreBookmarks: PropTypes.func.isRequired
  }

  getWrapper = (content) => {
    const { hasSidebar, dashboardsOpen } = this.props;

    return (
      <section className={ classNames(
        'search',
        hasSidebar && 'search--sidebar',
        hasSidebar && dashboardsOpen && 'search--shifted'
      ) }>
        { content }
      </section>
    );
  }

  handleLoadMore = () => {
    const { loadMoreBookmarks, keyword, offset, limit } = this.props;
    
    loadMoreBookmarks(keyword, { offset: offset + limit });
  }

  render() {
    const {
      dashboards,
      total,
      darkMode,
      newtab,
      keyword,
      pending,
      error,
      offset,
      limit
    } = this.props;

    if (error) {
      window.scrollTo(0, 0);
      return this.getWrapper(
        <ErrorMessage hasIcon noAnimation />
      );
    }

    if (pending && offset === 0) {
      return this.getWrapper(
        <SearchSkeleton />
      );
    }

    if (!total) {
      return this.getWrapper(
        <Empty illustration="chip-head">
          <FormattedMessage id="search.empty" values={ {
            keyword: <b>{ keyword }</b>
          } } />
        </Empty>
      );
    }

    return this.getWrapper(
      <Fragment>
        <P>
          <FormattedMessage id="search.results" values={ {
            keyword: <b className="search__keyword">{ keyword }</b>,
            results: <b className="search__keyword">{ total }</b>,
            count: total
          } } />
        </P>
        <ul>
          { dashboards.map(({id: dashboardId, name: dashboardName, categories}) => (
            <li key={ dashboardId }>
              <H2 className="search__headline">
                <Icon icon="collection" />
                { dashboardName }
              </H2>
              { categories.map(({ id: categoryId, name: categoryName, bookmarks }, index) => (
                <ul key={ categoryId }>
                  <H3 className="search__headline" noMargin={ index === 0 }>
                    <Icon icon="category" />
                    { categoryName }
                  </H3>
                  { bookmarks.map(({ id: bookmarkId, name: bookmarkName, url, favicon }) => (
                    <li key={ bookmarkId } className="bookmark search__bookmark">
                      { !favicon || favicon === 'default' ? (
                        <Icon
                          icon="earth"
                          size="tiny"
                          className={ classNames('bookmark__favicon', darkMode && 'bookmark__favicon--dark-mode') }
                        />
                      ) : (
                        <img
                          src={ favicon }
                          height="16"
                          width="16"
                          alt=""
                          className="bookmark__favicon"
                        />
                      ) }
                      <a
                        className={ classNames('bookmark__link', darkMode && 'bookmark__link--dark') }
                        href={ url }
                        target={ newtab ? '_blank' : '_self' }
                        rel={ newtab ? 'noopener noreferrer' : null }
                      >
                        { bookmarkName }
                      </a>
                    </li>
                  )) }
                </ul>
              )) }
            </li>
          )) }
        </ul>
        <div className="search__load-more-wrapper">
          { pending && offset >= limit && (
            <Icon icon="spinner" className="search__spinner" />
          ) }
          { total > (limit + offset) && !pending && (
            <ButtonSmallMedium className="search__load-more" onClick={ this.handleLoadMore }>
              <FormattedHTMLMessage id="search.loadMore" />
            </ButtonSmallMedium>
          ) }
        </div>
      </Fragment>
    );
  }
}

export default Search;
