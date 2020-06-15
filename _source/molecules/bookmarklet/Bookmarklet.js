/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';
import { FormattedHTMLMessage, injectIntl } from 'react-intl';

import { ErrorMessage } from '../../atoms/messages';
import javascript from './javascript';

const updatedJavascript = process.env.NODE_ENV === 'production'
  ? javascript.replace(/http:\/\/localhost:3000/, 'https://beta.booky.io')
  : javascript;

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
          className="bookmarklet button button--small button--small-primary button--solid"
          href={ `javascript:${updatedJavascript}` }
          onClick={ this.handleBookmarkletClick }
        >
          <FormattedHTMLMessage id="bookmarklet.text" />
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
