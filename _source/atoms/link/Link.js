import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link as RegularLink, IndexLink } from 'react-router';
import classNames from 'classnames';

export default class Link extends Component {
  constructor(props) {
    super(props);

    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  handleKeyDown(event) {
    if (event.key === 'Enter') {
      this.props.onClick && this.props.onClick(event);
    }
  }

  render() {
    const { color, children, className, darkMode, to, href, title, onClick, target, tabIndex } = this.props;
    const internalType = to === '/' ? IndexLink : RegularLink;
    const CustomTag = href ? 'a' : internalType;

    return (
      <CustomTag
        href={ href }
        to={ to }
        title={ title }
        onClick={ onClick }
        target={ target }
        tabIndex={ tabIndex }
        onKeyDown={ this.handleKeyDown }
        className={ classNames(
          'link',
          color && `link--${color}`,
          darkMode && 'link--dark-mode',
          className && className
        ) }
      >
        { children }
      </CustomTag>
    );
  }
}

Link.propTypes = {
  href: PropTypes.string,
  to: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
    PropTypes.array
  ]),
  title: PropTypes.string,
  color: PropTypes.string,
  onClick: PropTypes.func,
  target: PropTypes.string,
  darkMode: PropTypes.bool,
  tabIndex: PropTypes.string
};

Link.defaultProps = {
  color: 'primary'
};
