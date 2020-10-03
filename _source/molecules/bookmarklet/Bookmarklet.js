/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage, injectIntl } from 'react-intl';

import { ErrorMessage } from '../../atoms/messages';
import Icon from '../../atoms/icon';
import javascript from './javascript';

class Bookmarklet extends PureComponent {
  static propTypes = {
    intl: PropTypes.object.isRequired
  }

  state = {
    hasClicked: false
  }

  handleBookmarkletClick = (event) => {
    event.preventDefault();

    this.setState({
      hasClicked: true
    });
  }

  render() {
    const { hasClicked } = this.state;
    const { intl } = this.props;

    return (
      <Fragment>
        <a
          className="bookmarklet button button--large button--large-primary button--solid"
          onClick={ this.handleBookmarkletClick }
          ref={ (node) => {
            if (node) {
              node.setAttribute('href', `javascript:${javascript}`);
            }
          } }
        >
          <Icon
            icon="star"
            color="light"
            className="button__icon"
            ignoreDarkMode
          />
          <span className="button__text">
            <FormattedMessage id="bookmarklet.text" values={ { b: (msg) => <b>{msg}</b> } } />
          </span>
        </a>
        { hasClicked && (
          <ErrorMessage
            className="bookmarklet__error"
            message={ intl.formatMessage({ id: 'bookmarklet.error' }) }
            hasIcon
          />
        ) }
      </Fragment>
    );
  }
}

export default injectIntl(Bookmarklet);
