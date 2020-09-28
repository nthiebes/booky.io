import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { FormattedMessage } from 'react-intl';

import Link from '../../atoms/link';
import Icon from '../../atoms/icon';

export default class Extension extends PureComponent {
  static propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    darkMode: PropTypes.bool.isRequired,
    updateExtensionData: PropTypes.func.isRequired
  }
  
  componentDidMount() {
    const extension = window.parent;
    const extensionId = process.env.NODE_ENV === 'development' ? 'cdgbikmincdhncjonjcldflnkdbmbgco' : 'pmcpkkipiedakcaolhnbijibndfemckf';
    
    // Tell the extension that the page is ready to receive messages
    extension.postMessage('ready', `chrome-extension://${extensionId}`);

    // Messages from the popup
    window.addEventListener('message', (event) => {
      if (event.origin === `chrome-extension://${extensionId}`) {
        this.props.updateExtensionData({
          page: event.data
        });
      }
    });
  }

  render() {
    const { children, className, darkMode } = this.props;

    return (
      <>
        <header className="extension__header">
          <nav className="extension__nav">
            <Link to="/extension/add" isNavLink className="extension__nav-item" activeClassName="extension__nav-item--active">
              <Icon icon="add-link" color="light" />
              <FormattedMessage id="extension.add" />
            </Link>
            <Link to="/extension/open" isNavLink className="extension__nav-item" activeClassName="extension__nav-item--active">
              <Icon icon="open" color="light" />
              <FormattedMessage id="extension.open" />
            </Link>
            <Link to="/extension/customize" isNavLink className="extension__nav-item" activeClassName="extension__nav-item--active">
              <Icon icon="customize" color="light" />
              <FormattedMessage id="extension.customize" />
            </Link>
          </nav>
        </header>
        <main className={ classNames(
          'extension',
          darkMode && 'extension--dark',
          className
        ) }>
          { children }
        </main>
      </>
    );
  }
}
