import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Label from '../label';

export default class Radio extends Component {
  static propTypes = {
    id: PropTypes.string,
    children: PropTypes.oneOfType([
      PropTypes.array,
      PropTypes.element,
      PropTypes.string
    ]).isRequired,
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    className: PropTypes.string,
    onChange: PropTypes.func,
    checked: PropTypes.bool
  }

  handleInputChange = (event) => {
    const { onChange } = this.props;

    onChange && onChange({
      name: event.target.name,
      value: event.target.value
    });
  }

  render() {
    const { children, className, id, name, value, checked } = this.props;

    return (
      <div className={ classNames('radio', className) }>
        <input
          type="radio"
          id={ id }
          name={ name }
          className="radio__input"
          value={ value }
          onChange={ this.handleInputChange }
          defaultChecked={ checked }
        />
        <Label htmlFor={ id } className="radio__label">
          { children }
        </Label>
      </div>
    );
  }
}
