import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';
import { FormattedHTMLMessage } from 'react-intl';
import classNames from 'classnames';

import Icon from '../../atoms/icon';
import P from '../../atoms/paragraph';

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
    newtab: PropTypes.bool
  }

  render() {
    const { results, hasSidebar, dashboardsOpen, darkMode, newtab, keyword } = this.props;
    const { dashboards, total } = results;

    // console.log(results);

    return (
      <Fragment>
        <P className={ classNames(
          'search-results',
          hasSidebar && 'search-results--sidebar',
          hasSidebar && dashboardsOpen && 'search-results--shifted'
        ) }>
          { `${total} results, ${keyword}` }
        </P>
        <ul className={ classNames(
          'search-results',
          hasSidebar && 'search-results--sidebar',
          hasSidebar && dashboardsOpen && 'search-results--shifted'
        ) }>
          { dashboards.map(({id: dashboardId, name: dashboardName, categories}) => (
            <li key={ dashboardId }>
              { dashboardName }
              { categories.map(({ id: categoryId, name: categoryName, bookmarks }) => (
                <ul key={ categoryId }>
                  { categoryName }
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
