import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { FormattedMessage } from 'react-intl';

import P from '../../paragraph';
import Icon from '../../icon';

export default class SuccessMessage extends Component {
  static propTypes = {
    message: PropTypes.string,
    className: PropTypes.string,
    hasIcon: PropTypes.bool,
    noAnimation: PropTypes.bool
  }
  
  state = {
    animate: false
  }

  componentDidMount() {
    window.setTimeout(this.animate, 100);
  }

  animate = () => {
    this.setState({
      animate: true
    });
  }

  render() {
    const { message, className, hasIcon, noAnimation } = this.props;
    const { animate } = this.state;

    return (
      <P
        className={ classNames(
          'success',
          animate && !noAnimation && 'success--animate',
          noAnimation && 'success--show',
          className
        ) }
        role="alert"
      >
        { hasIcon && (
          <Icon icon="check" color="green" ignoreDarkMode className="success__icon" />
        ) }
        <FormattedMessage id={ message } />
      </P>
    );
  }
}
