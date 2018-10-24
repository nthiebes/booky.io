import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Label from '../../atoms/label';

export default class Select extends Component {
  constructor(props) {
    super(props);

    this.onChange = this.onChange.bind(this);
  }

  onChange(event) {
    this.props.onChange(event.target.value);
  }

  render() {
    const { options, className, label, id, name, required, compact, selected, disabled } = this.props;

    return (
      <Fragment>
        { label && <Label htmlFor={ id }>{ label }</Label> }
        <select
          id={ id }
          name={ name }
          required={ required }
          onChange={ this.onChange }
          defaultValue={ selected }
          disabled={ disabled }
          className={ classNames('select', compact ? 'select--compact' : 'select--large', className && className) }>
          { options.map(({ text, value }, index) => (
            <option key={ index } value={ value }>
              { text }
            </option>
          )) }
        </select>
      </Fragment>
    );
  }
}

Select.propTypes = {
  options: PropTypes.array.isRequired,
  className: PropTypes.string,
  onChange: PropTypes.func,
  label: PropTypes.string,
  id: PropTypes.string,
  name: PropTypes.string,
  required: PropTypes.bool,
  compact: PropTypes.bool,
  selected: PropTypes.string,
  disabled: PropTypes.bool
};
