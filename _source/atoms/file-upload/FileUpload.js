import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export default class FileUpload extends Component {
  constructor(props) {
    super(props);

    this.handleOnChange = this.handleOnChange.bind(this);
  }

  handleOnChange(event) {
    const { name, onChange } = this.props;
    
    console.log(event.target.value, name);
    
    onChange && onChange(event.target.value, name);
  }

  render() {
    const {
      className,
      name,
      id,
      darkMode
    } = this.props;

    return (
      <input
        className={ classNames('file-upload', darkMode && 'file-upload--dark-mode', className) }
        type="file"
        id={ id }
        name={ name }
        onChange={ this.handleOnChange }
      />
    );
  }
}

FileUpload.propTypes = {
  className: PropTypes.string,
  onChange: PropTypes.func,
  name: PropTypes.string,
  id: PropTypes.string,
  darkMode: PropTypes.bool
};
