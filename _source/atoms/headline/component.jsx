import React, { Component } from 'react';
import PropTypes from 'prop-types';

/**
 * React component
 *
 * @class Headline
 * @classdesc atoms/headline/Headline
 */
export default class Headline extends Component {
  render() {
    const PROPS = this.props;
    const CLASS = 'a-headline ' + PROPS.className;
    const TEXT = PROPS.text;
    const CustomTag = `h${PROPS.type}`;

    return (
      <CustomTag className={ CLASS }>
        { TEXT }
      </CustomTag>
    );
  }
}

Headline.propTypes = {
  'className': PropTypes.string,
  'type': PropTypes.number.isRequired,
  'text': PropTypes.string.isRequired
};

Headline.defaultProps = {
  'className': ''
};
