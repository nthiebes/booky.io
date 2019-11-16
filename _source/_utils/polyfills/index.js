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

  return Promise.all([
    fillFetch(),
    fillCoreJs()
  ]);
};
