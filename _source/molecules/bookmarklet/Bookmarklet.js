/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { PureComponent } from 'react';
import { FormattedMessage } from 'react-intl';

import { ErrorMessage } from '../../atoms/messages';
import Icon from '../../atoms/icon';
import javascript from './javascript';

class Bookmarklet extends PureComponent {
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

    return (
      <>
        <a
          className="bookmarklet button button--large button--large-primary button--solid booky--hide-mobile-tablet"
          onClick={ this.handleBookmarkletClick }
          ref={ (node) => {
            if (node) {
              node.setAttribute('href', `javascript:${javascript}`);
            }
          } }
        >
          <Icon
            icon="drag"
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
            message="bookmarklet.error"
            hasIcon
            noPadding
          />
        ) }
      </>
    );
  }
}

export default Bookmarklet;
