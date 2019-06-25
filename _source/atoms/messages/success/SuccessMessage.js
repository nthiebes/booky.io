import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { FormattedMessage } from 'react-intl';

import P from '../../paragraph';
import Icon from '../../icon';

export default class SuccessMessage extends Component {
  constructor(props) {
    super(props);

    this.animate = this.animate.bind(this);
    this.state = {
      animate: false
    };
  }

  componentDidMount() {
    window.setTimeout(this.animate, 100);
  }

  animate() {
    this.setState({
      animate: true
    });
  }

  render() {
    const { message, className, hasIcon } = this.props;
    const { animate } = this.state;

    return (
      <P className={ classNames('success', animate && 'success--animate', className && className) } role="alert">
        { hasIcon && <Icon icon="check" color="green" className="success__icon" /> }
        <FormattedMessage id={ message } />
      </P>
    );
  }
}

SuccessMessage.propTypes = {
  message: PropTypes.string,
  className: PropTypes.string,
  hasIcon: PropTypes.bool
};


SuccessMessage.defaultProps = {
  message: 'success.default'
};
