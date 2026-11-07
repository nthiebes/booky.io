// Start loading a bit before an element scrolls into view, so it is usually ready when it appears.
export const PRELOAD_MARGIN = '300px';

const callbacks = new Map();
let observer = null;

const getObserver = () => {
  if (!observer) {
    observer = new window.IntersectionObserver(
      (entries) => {
        entries.forEach(({ target, isIntersecting }) => {
          if (!isIntersecting || !callbacks.has(target)) {
            return;
          }

          const callback = callbacks.get(target);

          callbacks.delete(target);
          observer.unobserve(target);
          callback();
        });
      },
      { rootMargin: PRELOAD_MARGIN }
    );
  }

  return observer;
};

/**
 * Calls the callback once, when the element comes near the viewport.
 * One shared observer serves all elements, because a collection can render hundreds of them.
 * Returns a function that cancels the pending callback.
 */
const whenVisible = (element, callback) => {
  if (!element || typeof window.IntersectionObserver !== 'function') {
    callback();

    return () => {};
  }

  callbacks.set(element, callback);
  getObserver().observe(element);

  return () => {
    if (callbacks.delete(element)) {
      observer.unobserve(element);
    }
  };
};

export const resetWhenVisible = () => {
  observer?.disconnect();
  observer = null;
  callbacks.clear();
};

export default whenVisible;
