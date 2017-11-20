import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Input from '../../atoms/input';

export default class Search extends Component {
  render() {
    const { className, focus } = this.props;

    return (
      <div className={ `search ${className}` }>
        <Input placeholder="Search booky..." focus={ focus } className="search__input" />
      </div>
    );
  }
}

Search.propTypes = {
  'focus': PropTypes.bool,
  'className': PropTypes.string
};

Search.defaultProps = {
  'className': '',
  'focus': false
};
