import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Label from '../../atoms/label';

export default class Select extends Component {
  static propTypes = {
    options: PropTypes.array.isRequired,
    className: PropTypes.string,
    onChange: PropTypes.func,
    label: PropTypes.string,
    id: PropTypes.string,
    name: PropTypes.string,
    required: PropTypes.bool,
    selected: PropTypes.string,
    disabled: PropTypes.bool
  }

  onBlur = (event) => {
    this.props.onChange(event.target.value);
  }

  render() {
    const { options, className, label, id, name, required, selected, disabled } = this.props;

    return (
      <Fragment>
        { label && <Label htmlFor={ id }>{ label }</Label> }
        <select
          id={ id }
          name={ name }
          required={ required }
          onBlur={ this.onBlur }
          defaultValue={ selected }
          disabled={ disabled }
          className={ classNames('select', className) }>
          { options.map(({ text, value }) => (
            <option key={ value } value={ value }>
              { text }
            </option>
          )) }
        </select>
      </Fragment>
    );
  }
}
