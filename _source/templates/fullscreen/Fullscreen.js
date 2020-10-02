import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { postMessage } from '../../_utils/extension';

export default class Fullscreen extends PureComponent {
  static propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string
  }

  componentDidMount() {
    // Tell the extension that the page is ready to receive messages
    postMessage({
      ready: true
    });
  }

  render() {
    const { children, className } = this.props;

    return (
      <main className={ classNames(
        'fullscreen',
        className
      ) }>
        { children }
      </main>
    );
  }
}
