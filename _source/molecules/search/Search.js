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
    id: PropTypes.string.isRequired
  }

  state = {
    value: ''
  }
  
  onChange = (value) => {
    this.setState({
      value
    });
  }

  render() {
    const { className, intl, darkMode, id } = this.props;
    const { value } = this.state;

    return (
      <div role="search" className={ classNames('search', className) }>
        <Label htmlFor="search" className="search__label">
          <FormattedMessage id="misc.searchLabel" />
        </Label>
        <Input
          placeholder={ intl.formatMessage({ id: 'misc.search' }) }
          className={ classNames('search__input', darkMode && 'search__input--dark-mode') }
          value={ value }
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
