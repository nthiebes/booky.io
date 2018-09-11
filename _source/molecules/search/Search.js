import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { injectIntl } from 'react-intl';

import Input from '../../atoms/input';

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
    const { className, intl } = this.props;
    const { value } = this.state;

    return (
      <div className={ `search ${className}` }>
        <Input
          placeholder={ intl.formatMessage({ id: 'misc.search' }) }
          className="search__input"
          value={ value }
          onChange={ this.onChange }
          validation={ false }
          icon="search"
        />
      </div>
    );
  }
}

export default injectIntl(Search);

Search.propTypes = {
  className: PropTypes.string,
  intl: PropTypes.object.isRequired
};

Search.defaultProps = {
  className: ''
};
