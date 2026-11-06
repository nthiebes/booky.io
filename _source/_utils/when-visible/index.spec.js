/**
 * @jest-environment jsdom
 */

import whenVisible, { PRELOAD_MARGIN, resetWhenVisible } from './index';

describe('whenVisible', () => {
  let instances;

  beforeEach(() => {
    instances = [];
    window.IntersectionObserver = jest.fn(function (callback, options) {
      this.callback = callback;
      this.options = options;
      this.observe = jest.fn();
      this.unobserve = jest.fn();
      this.disconnect = jest.fn();
      instances.push(this);
    });
  });

  afterEach(() => {
    resetWhenVisible();
    delete window.IntersectionObserver;
  });

  const intersect = (target, isIntersecting = true) =>
    instances[0].callback([{ target, isIntersecting }]);

  it('waits until the element is near the viewport', () => {
    const element = document.createElement('li');
    const callback = jest.fn();

    whenVisible(element, callback);

    expect(instances[0].options).toEqual({ rootMargin: PRELOAD_MARGIN });
    expect(instances[0].observe).toHaveBeenCalledWith(element);
    expect(callback).not.toHaveBeenCalled();

    intersect(element, false);
    expect(callback).not.toHaveBeenCalled();

    intersect(element);
    expect(callback).toHaveBeenCalledTimes(1);
    expect(instances[0].unobserve).toHaveBeenCalledWith(element);
  });

  it('calls the callback only once', () => {
    const element = document.createElement('li');
    const callback = jest.fn();

    whenVisible(element, callback);
    intersect(element);
    intersect(element);

    expect(callback).toHaveBeenCalledTimes(1);
  });

  it('shares one observer between all elements', () => {
    const first = document.createElement('li');
    const second = document.createElement('li');
    const firstCallback = jest.fn();
    const secondCallback = jest.fn();

    whenVisible(first, firstCallback);
    whenVisible(second, secondCallback);
    intersect(second);

    expect(instances).toHaveLength(1);
    expect(firstCallback).not.toHaveBeenCalled();
    expect(secondCallback).toHaveBeenCalledTimes(1);
  });

  it('does not call a cancelled callback', () => {
    const element = document.createElement('li');
    const callback = jest.fn();

    const cancel = whenVisible(element, callback);

    cancel();
    intersect(element);

    expect(callback).not.toHaveBeenCalled();
    expect(instances[0].unobserve).toHaveBeenCalledWith(element);
  });

  it('calls the callback immediately without IntersectionObserver', () => {
    delete window.IntersectionObserver;
    const callback = jest.fn();

    whenVisible(document.createElement('li'), callback);

    expect(callback).toHaveBeenCalledTimes(1);
  });
});
