import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Label from '../label';

export default class Radio extends Component {
  constructor(props) {
    super(props);

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const { onChange } = this.props;

    onChange && onChange({
      name: event.target.name,
      value: event.target.value
    });
  }

  render() {
    const { label, className, id, name, value, defaultChecked } = this.props;

    return (
      <div className={ classNames('radio', className && classNames) }>
        <input
          type="radio"
          id={ id }
          name={ name }
          className="radio__input"
          value={ value }
          onChange={ this.handleInputChange }
          defaultChecked={ defaultChecked }
        />
        { label && <Label htmlFor={ id } className="radio__label">{ label }</Label> }
      </div>
    );
  }
}

Radio.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  className: PropTypes.string,
  onChange: PropTypes.func,
  defaultChecked: PropTypes.bool
};
