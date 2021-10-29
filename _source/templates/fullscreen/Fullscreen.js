import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { postMessage } from '../../_utils/extension';

export default class Fullscreen extends PureComponent {
  static propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    updateExtensionData: PropTypes.func.isRequired
  };

  componentDidMount() {
    const { updateExtensionData } = this.props;

    // Tell the extension that the page is ready to receive messages
    postMessage({
      ready: true
    });

    // Messages from the popup
    window.addEventListener('message', (event) => {
      const { type, ...pageData } = event.data;

      if (type === 'BOOKY') {
        updateExtensionData({
          page: pageData
        });
      }
    });
  }

  render() {
    const { children, className } = this.props;

    return (
      <main className={classNames('fullscreen', className)}>{children}</main>
    );
  }
}
