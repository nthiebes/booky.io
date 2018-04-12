import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { injectIntl } from 'react-intl';

import Input from '../../atoms/input';

class Search extends Component {
  render() {
    const { className, intl } = this.props;

    return (
      <div className={ `search ${className}` }>
        <Input placeholder={ intl.formatMessage({ id: 'misc.search' }) } className="search__input" />
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
