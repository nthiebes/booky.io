/* eslint-disable */
var exec = require('child_process').exec;

exec('node -v', function (err, stdout) {
  if (err) throw err;

  if (parseFloat(stdout.slice(1)) < 8) {
    throw new Error('booky.io requires node 8.0 or greater.');
  }
});