// This file configures a web server for testing the production build
// on your local machine.

import browserSync from 'browser-sync';
import historyApiFallback from 'connect-history-api-fallback';
import {chalkProcessing} from './chalkConfig';

/* eslint-disable no-console */

console.log(chalkProcessing('Opening production build...'));

// Run Browsersync
browserSync({
  port: 4000,
  open: false,
  ui: {
    port: 4001
  },
  server: {
    baseDir: '_public'
  },

  files: [
    '_source/*.html'
  ],

  middleware: [historyApiFallback()]
});
