import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage, injectIntl } from 'react-intl';
import classNames from 'classnames';

import Input from '../../atoms/input';
import Label from '../../atoms/label';

class Search extends Component {
  static propTypes = {
    className: PropTypes.string,
    intl: PropTypes.object.isRequired,
    darkMode: PropTypes.bool,
    id: PropTypes.string.isRequired,
    searchBookmarks: PropTypes.func.isRequired
  }

  state = {
    keyword: ''
  }

  fetchTimeout;
  
  onChange = (keyword) => {
    const { searchBookmarks } = this.props;

    this.setState({
      keyword
    });

    const searchBookmarksByValue = () => {
      searchBookmarks(keyword);
    };

    clearTimeout(this.fetchTimeout);

    if (keyword === '') {
      window.scrollTo(0, 0);
      searchBookmarksByValue();
    } else {
      this.fetchTimeout = setTimeout(() => {
        window.scrollTo(0, 0);
        searchBookmarksByValue();
      }, 500);
    }
  }

  render() {
    const { className, intl, darkMode, id } = this.props;
    const { keyword } = this.state;

    return (
      <div role="search" className={ classNames('search-field', className) }>
        <Label htmlFor="search" className="search-field__label">
          <FormattedMessage id="search.label" />
        </Label>
        <Input
          placeholder={ intl.formatMessage({ id: 'search.placeholder' }) }
          className={ classNames(
            'search-field__input',
            darkMode && 'search-field__input--dark-mode'
          ) }
          value={ keyword }
          onChange={ this.onChange }
          validation={ false }
          icon="search"
          id={ id }
        />
      </div>
    );
  }
}

export default injectIntl(Search);
