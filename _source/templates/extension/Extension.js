import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export default class Extension extends Component {
  componentDidMount() {
    const extension = window.parent;
    
    // Tell the extension that the page is ready to receive messages
    extension.postMessage('ready', 'chrome-extension://bfbbnjmbdhohklfbfeoonobkkdjhilkj');

    // Messages from the popup
    window.addEventListener('message', (event) => {
      if (event.origin === 'chrome-extension://bfbbnjmbdhohklfbfeoonobkkdjhilkj') {
        this.props.updateExtensionData({
          page: event.data
        });
      }
    });
  }

  render() {
    const { children, className, darkMode } = this.props;

    return (
      <Fragment>
        <header>header</header>
        <main className={ classNames(
          'extension',
          darkMode && 'extension--dark',
          className && className
        ) }>
          { children }
        </main>
        <footer>footer</footer>
      </Fragment>
    );
  }
}

Extension.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.element,
    PropTypes.string
  ]).isRequired,
  className: PropTypes.string,
  darkMode: PropTypes.bool.isRequired,
  updateExtensionData: PropTypes.func.isRequired
};
