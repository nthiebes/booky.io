import React, { Component } from 'react';

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

    event.preventDefault();
    onSubmit &&
      onSubmit({
        ...this.getData()
      });
  }

  render() {
    const { children, className, onClick } = this.props;

    return (
      // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions, jsx-a11y/click-events-have-key-events
      <form
        ref={(form) => {
          this.form = form;
        }}
        onSubmit={this.handleSubmit}
        className={className}
        onClick={onClick}
      >
        {children}
      </form>
    );
  }
}

