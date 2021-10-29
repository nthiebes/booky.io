import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { FormattedMessage } from 'react-intl';

import { postMessage } from '../../_utils/extension';
import Link from '../../atoms/link';
import Icon from '../../atoms/icon';
import Modal from '../../organisms/modal';
import ErrorBoundary from '../../molecules/error-boundary';

export default class Extension extends PureComponent {
  static propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    darkMode: PropTypes.bool.isRequired,
    updateExtensionData: PropTypes.func.isRequired,
    color: PropTypes.number.isRequired
  };

  componentDidMount() {
    const { darkMode, updateExtensionData } = this.props;

    // Tell the extension that the page is ready to receive messages
    postMessage({
      ready: true,
      darkMode
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

  setActiveTab = (tab) => {
    localStorage.setItem('activeTab', tab);
    postMessage({
      activeTab: tab
    });
  };

  render() {
    const { children, className, darkMode, color } = this.props;

    return (
      <>
        <header className={`extension__header header--color${color}`}>
          <nav className="extension__nav">
            <Link
              to="/extension/add"
              isNavLink
              className="extension__nav-item"
              activeClassName="extension__nav-item--active"
              onClick={() => this.setActiveTab('add')}
            >
              <Icon icon="add-link" color="light" />
              <FormattedMessage id="extension.add" />
            </Link>
            <Link
              to="/extension/open"
              isNavLink
              className="extension__nav-item"
              activeClassName="extension__nav-item--active"
              onClick={() => this.setActiveTab('open')}
            >
              <Icon icon="open" color="light" />
              <FormattedMessage id="extension.open" />
            </Link>
            <Link
              to="/extension/customize"
              isNavLink
              className="extension__nav-item"
              activeClassName="extension__nav-item--active"
              onClick={() => this.setActiveTab('customize')}
            >
              <Icon icon="customize" color="light" />
              <FormattedMessage id="extension.customize" />
            </Link>
          </nav>
        </header>
        <main
          className={classNames(
            'extension',
            darkMode && 'extension--dark',
            className
          )}
        >
          <ErrorBoundary>{children}</ErrorBoundary>
        </main>
        <Modal />
      </>
    );
  }
}
