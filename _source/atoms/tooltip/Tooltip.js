import React, { PureComponent, createRef } from 'react';
import classNames from 'classnames';

export default class Tooltip extends PureComponent {
  wrapper = createRef();
  tooltip = createRef();

  componentDidMount() {
    this.anchor = this.wrapper.current?.parentElement;
    this.anchor?.addEventListener('mouseenter', this.updatePosition);
  }

  componentWillUnmount() {
    this.anchor?.removeEventListener('mouseenter', this.updatePosition);
  }

  // The tooltip is fixed (to break out of overflow: hidden) without top and
  // left, so the browser keeps its position from the last layout, which is
  // off after scrolling. The empty wrapper sits where the tooltip should start,
  // so the tooltip is moved there explicitly on hover.
  // A transformed ancestor (e.g. the collapsed dashboards sidebar) becomes the
  // containing block of a fixed element, so top and left are relative to its
  // origin and not to the viewport. The origin is measured with top and left
  // at 0, minus the tooltip's own translate.
  updatePosition = () => {
    const wrapper = this.wrapper.current;
    const tooltip = this.tooltip.current;

    if (!wrapper || !tooltip) {
      return;
    }

    tooltip.style.top = '0px';
    tooltip.style.left = '0px';

    const target = wrapper.getBoundingClientRect();
    const current = tooltip.getBoundingClientRect();
    const { transform } = window.getComputedStyle(tooltip);
    const matrix = new DOMMatrixReadOnly(
      transform === 'none' ? undefined : transform
    );
    const originTop = current.top - matrix.m42;
    const originLeft = current.left - matrix.m41;

    tooltip.style.top = `${target.top - originTop}px`;
    tooltip.style.left = `${target.left - originLeft}px`;
  };

  render() {
    const { text, direction, darkMode } = this.props;

    return (
      <span
        ref={this.wrapper}
        className={classNames(
          'tooltip-wrapper',
          `tooltip-wrapper--${direction}`
        )}
      >
        <span
          ref={this.tooltip}
          className={classNames(
            'tooltip',
            `tooltip--${direction}`,
            darkMode && 'tooltip--darkMode'
          )}
        >
          {text}
        </span>
      </span>
    );
  }
}
