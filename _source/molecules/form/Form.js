import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Form extends Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  getData() {
    const params = {};

    for (const { name, value } of Array.from(this.form.elements)) {
      if (name) {
        params[name] = value;
      }
    }
    return params;
  }

  handleSubmit(event) {
    const { onSubmit } = this.props;

    onSubmit && onSubmit({
      ...this.getData()
    });
    event.preventDefault();
  }

  render() {
    const { children } = this.props;

    return (
      <form ref={ (form) => { this.form = form; } } onSubmit={ this.handleSubmit }>
        { children }
      </form>
    );
  }
}

Form.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.element
  ]).isRequired,
  onSubmit: PropTypes.func
};
