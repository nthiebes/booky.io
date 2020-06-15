import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { injectIntl } from 'react-intl';

class TabBar extends Component {
  render() {
    const { className, title, intl } = this.props;

    return (
      <nav aria-label={ intl.formatMessage({ id: title }) } className={ classNames('tab-bar', className) }>
        <ul className="tab-bar__scroll-container">
          { this.props.children }
        </ul>
      </nav>
    );
  }
}

TabBar.propTypes = {
  children: PropTypes.array.isRequired,
  className: PropTypes.string,
  intl: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired
};

export default injectIntl(TabBar);
