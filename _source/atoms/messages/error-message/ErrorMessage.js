import React, { Component } from 'react';
import classNames from 'classnames';
import { FormattedMessage } from 'react-intl';

import P from '../../paragraph';
import Link from '../../link';
import Icon from '../../icon';

export default class ErrorMessage extends Component {
  static defaultProps = {
    message: 'error.default',
    values: {}
  };

  state = {
    animate: false
  };

  componentDidMount() {
    window.setTimeout(this.animate, 100);
  }

  animate = () => {
    this.setState({
      animate: true
    });
  };

  render() {
    const { message, className, hasIcon, noAnimation, noPadding, values } =
      this.props;
    const { animate } = this.state;

    return (
      <P
        className={classNames(
          'error',
          animate && !noAnimation && 'error--animate',
          noAnimation && 'error--show',
          noPadding && 'error--noPadding',
          className
        )}
        role="alert"
      >
        {hasIcon && (
          <Icon
            icon="error"
            color="orange"
            ignoreDarkMode
            className="error__icon"
          />
        )}
        <FormattedMessage
          tagName="span"
          id={message}
          values={{
            mail: (
              <Link href="mailto:hello@booky.io" color="dark">
                {<FormattedMessage id="error.email" />}
              </Link>
            ),
            login: (
              <Link to="/login" color="dark">
                {'booky.io/login'}
              </Link>
            ),
            resend: (
              <Link to="/resend" color="dark">
                {'booky.io/resend'}
              </Link>
            ),
            forgot: (
              <Link to="/forgot" color="dark">
                {'booky.io/forgot'}
              </Link>
            ),
            strong: (msg) => <strong>{msg}</strong>,
            ...values
          }}
        />
      </P>
    );
  }
}
