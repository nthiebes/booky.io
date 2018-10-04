import React, { Component } from 'react';

const withScroll = (ComposedComponent) => class ScrollDecorator extends Component {
  constructor() {
    super();

    // Initial scroll position
    this.state = {
      scrollPosition: this.getWindowScrollTop()
    };

    // Bind handlers
    this.handleInterval = this.handleInterval.bind(this);
    this.handleRequestAnimationFrame = this.handleRequestAnimationFrame.bind(this);
  }

  componentWillMount() {
    // 50 times per second, change to your needs
    const INTERVAL = 20;

    this.intervalID = setInterval(this.handleInterval, INTERVAL);
  }

  componentWillUnmount() {
    // Remove and reset interval/animationFrame
    clearInterval(this.intervalID);
    cancelAnimationFrame(this.requestID);
    this.requestID = null;
    this.intervalID = null;
  }

  getWindowScrollTop() {
    // Get scroll position, with IE fallback
    return window.pageYOffset || document.documentElement.scrollTop;
  }

  handleInterval() {
    // Interval is only used to throttle animation frame
    cancelAnimationFrame(this.requestID);
    this.requestID = requestAnimationFrame(this.handleRequestAnimationFrame);
  }

  handleRequestAnimationFrame() {
    const { scrollPosition } = this.state;
    const newScrollPosition = this.getWindowScrollTop();

    // Update the state only when scroll position is changed
    if (newScrollPosition !== scrollPosition) {
      this.setState({
        scrollPosition: newScrollPosition
      });
    }
  }

  render() {
    const { scrollPosition } = this.state;

    return (
      <ComposedComponent
        { ...this.props }
        scrollPosition={ scrollPosition }
      />
    );
  }
};

export default withScroll;
