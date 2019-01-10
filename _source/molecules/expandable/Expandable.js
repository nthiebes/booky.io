import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { H2 } from '../../atoms/headline';
import './Expandable.scss';

export default class Expandable extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
    this.state = {
      open: false
    };
  }

  handleClick() {
    this.setState({
      open: !this.state.open
    });
  }

  render() {
    const { className, headline, children } = this.props;
    const { open } = this.state;

    return (
      <section className={className}>
        <H2 className="expandable__headline" onClick={ this.handleClick }>
          { headline }
        </H2>
        <div className={ classNames('expandable__content', open && 'expandable__content--open') }>
          { children }
        </div>
      </section>
    );
  }
}

Expandable.propTypes = {
  className: PropTypes.String,
  children: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.element,
    PropTypes.string
  ]).isRequired,
  headline: PropTypes.string.isRequired
};
