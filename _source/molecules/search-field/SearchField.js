import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { injectIntl } from 'react-intl';
import classNames from 'classnames';

import Input from '../../atoms/input';

class SearchField extends Component {
  static propTypes = {
    className: PropTypes.string,
    intl: PropTypes.object.isRequired,
    darkMode: PropTypes.bool,
    id: PropTypes.string.isRequired,
    searchBookmarks: PropTypes.func.isRequired,
    resetSearch: PropTypes.func.isRequired,
    updateSearchData: PropTypes.func.isRequired,
    keyword: PropTypes.string,
    dashboardsPending: PropTypes.bool
  };

  fetchTimeout;

  handleChange = (keyword) => {
    const { searchBookmarks, resetSearch, updateSearchData } = this.props;

    updateSearchData({
      keyword,
      pending: true,
      error: null,
      offset: 0
    });

    const searchBookmarksByValue = () => {
      searchBookmarks({ keyword });
    };

    clearTimeout(this.fetchTimeout);

    if (keyword === '') {
      window.scrollTo(0, 0);
      resetSearch();
    } else {
      this.fetchTimeout = setTimeout(() => {
        window.scrollTo(0, 0);
        searchBookmarksByValue();
      }, 500);
    }
  };

  handleSubmit = (event) => {
    const { keyword } = this.props;

    event.preventDefault();

    this.handleChange(keyword);
  };

  render() {
    const {
      className,
      intl,
      darkMode,
      id,
      keyword,
      dashboardsPending
    } = this.props;

    return (
      <form
        role="search"
        className={classNames('search-field', className)}
        onSubmit={this.handleSubmit}
      >
        <Input
          placeholder={intl.formatMessage({ id: 'search.placeholder' })}
          className={classNames(
            'search-field__input',
            darkMode && 'search-field__input--dark-mode'
          )}
          value={keyword}
          onChange={this.handleChange}
          validation={false}
          icon="search"
          id={id}
          disabled={dashboardsPending}
          ariaLabel={intl.formatMessage({ id: 'search.label' })}
        />
      </form>
    );
  }
}

export default injectIntl(SearchField);
