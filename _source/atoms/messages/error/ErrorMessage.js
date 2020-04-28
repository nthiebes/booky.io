import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { FormattedMessage } from 'react-intl';

import P from '../../paragraph';
import Link from '../../link';
import Icon from '../../icon';

export default class ErrorMessage extends Component {
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
    const { message, className, hasIcon, noAnimation } = this.props;
    const { animate } = this.state;

    return (
      <P
        className={ classNames(
          'error',
          animate && !noAnimation && 'error--animate',
          noAnimation && 'error--show',
          className
        ) }
        role="alert"
      >
        { hasIcon && (
          <Icon icon="error" color="orange" ignoreDarkMode className="error__icon" />
        ) }
        <FormattedMessage
          tagName="span"
          id={ message }
          tagName="span"
          values={ { mail: <Link href="mailto:hello@booky.io" color="dark">{ <FormattedMessage id="error.email" /> }</Link> } }
        />
      </P>
    );
  }
}

ErrorMessage.propTypes = {
  message: PropTypes.string,
  className: PropTypes.string,
  hasIcon: PropTypes.bool,
  noAnimation: PropTypes.bool
};

ErrorMessage.defaultProps = {
  message: 'error.default'
};
