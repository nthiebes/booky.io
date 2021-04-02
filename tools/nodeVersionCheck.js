/* eslint-disable */
var exec = require('child_process').exec;

exec('node -v', function (err, stdout) {
  if (err) throw err;

  if (parseFloat(stdout.slice(1)) < 14) {
    throw new Error('booky.io requires node 14.6 or greater.');
  }
});
