 
var exec = require('child_process').exec;

exec('node -v', function (err, stdout) {
  if (err) throw err;

  var version = stdout.trim().slice(1).split('.').map(Number);

  if (version[0] < 18 || (version[0] === 18 && version[1] < 18)) {
    throw new Error('booky.io requires node 18.18 or greater.');
  }
});
