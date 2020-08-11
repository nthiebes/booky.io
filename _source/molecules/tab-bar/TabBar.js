import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { injectIntl } from 'react-intl';
import { Droppable } from 'react-beautiful-dnd';

class TabBar extends Component {
  static propTypes = {
    children: PropTypes.array.isRequired,
    className: PropTypes.string,
    intl: PropTypes.object.isRequired,
    title: PropTypes.string.isRequired,
    darkMode: PropTypes.bool,
    disabled: PropTypes.bool
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
    const { className, title, intl, children, darkMode, disabled } = this.props;
    const { scrolledToStart, scrolledToEnd } = this.state;

    return (
      <nav
        aria-label={ intl.formatMessage({ id: title }) }
        className={ classNames(
          'tab-bar',
          darkMode && 'tab-bar--darkMode',
          !scrolledToStart && 'tab-bar--start',
          !scrolledToEnd && 'tab-bar--end',
          className
        ) }
      >
        <Droppable droppableId="dashboard-tabs" type="dashboard-tabs" direction="horizontal">
          { (provided) => (
            <ul
              className={ classNames('tab-bar__scroll-container', disabled && 'tab-bar__scroll-container--disabled') }
              onScroll={ this.handleScroll }
              ref={ provided.innerRef }
              { ...provided.droppableProps }
            >
              { children }
              { provided.placeholder }
            </ul>
          ) }
        </Droppable>
      </nav>
    );
  }
}

export default injectIntl(TabBar);
