import React, { PureComponent } from 'react';
import classNames from 'classnames';
import { FormattedMessage } from 'react-intl';

import P from '../../atoms/paragraph';
import { postMessage, isExtensionMessage } from '../../_utils/extension';
import { config } from '../../config';

export default class Fullscreen extends PureComponent {
  componentDidMount() {
    const { updateExtensionData } = this.props;

    // Tell the extension that the page is ready to receive messages
    postMessage({
      ready: true
    });

    // Messages from the popup
    window.addEventListener('message', (event) => {
      if (!isExtensionMessage(event)) {
        return;
      }

      // eslint-disable-next-line no-unused-vars
      const { type, ...page } = event.data;

      updateExtensionData({
        page
      });
    });
  }

  render() {
    const { children, className } = this.props;

    if (config.updateInProgress) {
      return (
        <div className="page--update">
          <P>
            <FormattedMessage id="misc.updateInProgress" />
          </P>
        </div>
      );
    }

    return (
      <main className={classNames('fullscreen', className)}>{children}</main>
    );
  }
}
