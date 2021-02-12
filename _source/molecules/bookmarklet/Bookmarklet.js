/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { PureComponent } from 'react';
import { FormattedMessage } from 'react-intl';

import Icon from '../../atoms/icon';
import { javascript } from './javascript';

class Bookmarklet extends PureComponent {
  handleBookmarkletClick = (event) => {
    event.preventDefault();
  };

  render() {
    return (
      <a
        className="bookmarklet button button--large button--large-primary button--solid"
        onClick={this.handleBookmarkletClick}
        ref={(node) => {
          if (node) {
            node.setAttribute('href', javascript);
          }
        }}
      >
        <Icon
          icon="drag"
          color="light"
          className="button__icon"
          ignoreDarkMode
        />
        <span className="button__text">
          <FormattedMessage
            id="bookmarklet.text"
            values={{ b: (msg) => <b>{msg}</b> }}
          />
        </span>
      </a>
    );
  }
}

export default Bookmarklet;
