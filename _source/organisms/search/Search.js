import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import classNames from 'classnames';

import { ErrorMessage } from '../../atoms/messages';
import Icon from '../../atoms/icon';
import { H2, H3 } from '../../atoms/headline';
import P from '../../atoms/paragraph';
import Empty from '../../molecules/empty';

class Search extends PureComponent {
  static propTypes = {
    keyword: PropTypes.string,
    results: PropTypes.shape({
      dashboards: PropTypes.array.isRequired,
      total: PropTypes.number.isRequired,
      offset: PropTypes.number.isRequired,
      limit: PropTypes.number.isRequired
    }),
    hasSidebar: PropTypes.bool,
    dashboardsOpen: PropTypes.bool,
    darkMode: PropTypes.bool,
    newtab: PropTypes.bool,
    pending: PropTypes.bool,
    error: PropTypes.string
  }

  getWrapper = (content) => {
    const { hasSidebar, dashboardsOpen } = this.props;

    return (
      <section className={ classNames(
        'search-results',
        hasSidebar && 'search-results--sidebar',
        hasSidebar && dashboardsOpen && 'search-results--shifted'
      ) }>
        { content }
      </section>
    );
  }

  render() {
    const {
      results,
      darkMode,
      newtab,
      keyword,
      pending,
      error
    } = this.props;
    const { dashboards, total } = results;

    if (error) {
      return this.getWrapper(
        <ErrorMessage hasIcon noAnimation />
      );
    }

    if (pending) {
      return this.getWrapper(
        <Icon icon="spinner" className="search-results__spinner" />
      );
    }

    if (!results.dashboards.length) {
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
            keyword: <b className="search-results__keyword">{ keyword }</b>,
            total: <b className="search-results__keyword">{ total }</b>
          } } />
        </P>
        <ul>
          { dashboards.map(({id: dashboardId, name: dashboardName, categories}) => (
            <li key={ dashboardId }>
              <H2>{ dashboardName }</H2>
              { categories.map(({ id: categoryId, name: categoryName, bookmarks }) => (
                <ul key={ categoryId }>
                  <H3>{ categoryName }</H3>
                  { bookmarks.map(({ id: bookmarkId, name: bookmarkName, url, favicon }) => (
                    <li key={ bookmarkId } className="bookmark">
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
      </Fragment>
    );
  }
}

export default Search;
