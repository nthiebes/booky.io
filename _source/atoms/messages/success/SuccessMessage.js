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
    icon: PropTypes.string
  }
  
  static defaultProps = {
    message: 'success.default',
    icon: 'check'
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
    const { message, className, hasIcon, icon } = this.props;
    const { animate } = this.state;

    return (
      <P className={ classNames('success', className) } role="alert">
        { hasIcon && (
          <Icon
            icon={ icon }
            color="green"
            size="large"
            ignoreDarkMode
            className={ classNames('success__icon', animate && 'success__icon--animate') }
          />
        ) }
        <span className={ classNames('success__text', animate && 'success__text--animate') }>
          <FormattedMessage id={ message } />
        </span>
      </P>
    );
  }
}
