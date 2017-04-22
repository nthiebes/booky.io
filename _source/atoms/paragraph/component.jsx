import React, { PropTypes, Component } from 'react';

/**
 * React component
 *
 * @class Paragraph
 * @classdesc atoms/paragraph/Paragraph
 */
export default class Paragraph extends Component {
  render() {
    const PROPS = this.props;
    const CLASS = 'a-paragraph ' + PROPS.className;

    return (
      <p className={ CLASS }>
        { PROPS.children }
      </p>
    );
  }
}

Paragraph.propTypes = {
  'className': PropTypes.string,
  'children': PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
    PropTypes.array
  ]).isRequired
};

Paragraph.defaultProps = {
  'className': ''
};
