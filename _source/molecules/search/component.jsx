import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Input from '../../atoms/input';

/**
 * React component
 *
 * @class Search
 * @classdesc molecules/search/Search
 */
export default class Search extends Component {
  render() {
    const PROPS = this.props;
    const CLASS = 'm-search ' + PROPS.className;

    return (
      <div className={ CLASS }>
        <Input placeholder="Search booky..." focus={ PROPS.focus } />
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
