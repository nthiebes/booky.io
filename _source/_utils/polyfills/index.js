/* eslint-disable consistent-return */
export const loadPolyfills = () => {
  const fillFetch = () => new Promise((resolve) => {
    if ('fetch' in window) { return resolve(); }

    require.ensure([], () => {
      require('whatwg-fetch');

      resolve();
    }, 'fetch');
  });
  const fillCoreJs = () => new Promise((resolve) => {
    if (
      'from' in Array &&
      'find' in Array.prototype &&
      'assign' in Object
    ) { return resolve(); }

    require.ensure([], () => {
      require('core-js');

      resolve();
    }, 'core-js');
  });
  const fillIntersectionObserver = () => new Promise((resolve) => {
    if ('IntersectionObserver' in window) { return resolve(); }

    require.ensure([], () => {
      require('intersection-observer');

      resolve();
    }, 'observer');
  });
  const fillURLSearchParams = () => new Promise((resolve) => {
    if ('URLSearchParams' in window) { return resolve(); }

    require.ensure([], () => {
      require('url-search-params-polyfill');

      resolve();
    }, 'observer');
  });
  

  return Promise.all([
    fillFetch(),
    fillCoreJs(),
    fillIntersectionObserver(),
    fillURLSearchParams()
  ]);
};
