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
    checked: PropTypes.bool,
    inputClassName: PropTypes.string,
    labelClassName: PropTypes.string,
    first: PropTypes.bool,
    illustration: PropTypes.string
  }

  handleInputChange = (event) => {
    const { onChange } = this.props;

    onChange && onChange({
      name: event.target.name,
      value: event.target.value
    });
  }

  render() {
    const { children, className, id, name, value, checked, inputClassName, labelClassName, first, illustration } = this.props;

    return (
      <div className={ classNames('radio', first && 'radio--first', illustration && 'radio--image', className) }>
        { illustration && (
          <label htmlFor={ id } className="radio__image-label">
            <img
              width={ 200 }
              alt=""
              className="radio__image"
              src={ `../../_assets/illustrations/${illustration}.svg` }
              aria-hidden="true"
              loading="lazy"
            />
          </label>
        ) }
        <input
          type="radio"
          id={ id }
          name={ name }
          className={ classNames('radio__input', inputClassName) }
          value={ value }
          onChange={ this.handleInputChange }
          defaultChecked={ checked }
        />
        <Label htmlFor={ id } className={ classNames('radio__label', labelClassName) }>
          { children }
        </Label>
      </div>
    );
  }
}
