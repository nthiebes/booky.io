import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { injectIntl } from 'react-intl';

class TabBar extends Component {
  static propTypes = {
    children: PropTypes.array.isRequired,
    className: PropTypes.string,
    intl: PropTypes.object.isRequired,
    title: PropTypes.string.isRequired
  }

  state = {
    scrolledToStart: true,
    scrolledToEnd: false
  }

  handleScroll = (event) => {
    const element = event.target;
    const { scrolledToStart, scrolledToEnd } = this.state;

    if (element.scrollLeft === 0) {
      this.setState({
        scrolledToStart: true
      });
      // Scrolled to the end
    } else if (element.scrollWidth - element.scrollLeft === element.clientWidth) {
      this.setState({
        scrolledToEnd: true
      });
    } else if (scrolledToStart || scrolledToEnd) {
      this.setState({
        scrolledToStart: false,
        scrolledToEnd: false
      });
    }
  }

  render() {
    const { className, title, intl, children } = this.props;
    const { scrolledToStart, scrolledToEnd } = this.state;

    return (
      <nav
        aria-label={ intl.formatMessage({ id: title }) }
        className={ classNames(
          'tab-bar',
          !scrolledToStart && 'tab-bar--start',
          !scrolledToEnd && 'tab-bar--end',
          className
        ) }
      >
        <ul className="tab-bar__scroll-container" onScroll={ this.handleScroll }>
          { children }
        </ul>
      </nav>
    );
  }
}

export default injectIntl(TabBar);
