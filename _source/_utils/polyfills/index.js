/* eslint-disable consistent-return */
import 'core-js/features/promise';

export const loadPolyfills = () => {
  const fillFetch = () => new Promise((resolve) => {
    if ('fetch' in window) { return resolve(); }

    require.ensure([], () => {
      require('whatwg-fetch');

      resolve();
    }, 'fetch');
  });
  const fillAbort = () => new Promise((resolve) => {
    if ('signal' in new Request('')) { return resolve(); }

    require.ensure([], () => {
      require('abortcontroller-polyfill/dist/abortcontroller-polyfill-only');

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
    fillAbort(),
    fillCoreJs()
  ]);
};
