import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage, injectIntl } from 'react-intl';
import classNames from 'classnames';

import Input from '../../atoms/input';
import Label from '../../atoms/label';

class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: ''
    };
    this.onChange = this.onChange.bind(this);
  }

  onChange(value) {
    this.setState({
      value
    });
  }

  render() {
    const { className, intl, darkMode } = this.props;
    const { value } = this.state;

    return (
      <div className={ classNames('search', className) }>
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
          id="search"
        />
      </div>
    );
  }
}

export default injectIntl(Search);

Search.propTypes = {
  className: PropTypes.string,
  intl: PropTypes.object.isRequired,
  darkMode: PropTypes.bool
};
